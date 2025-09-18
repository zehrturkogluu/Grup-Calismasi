const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.json({ limit: '1mb' }));

// Statik dosyalar ve açık rota eşlemesi (bazı ortamlarda static 404 verebiliyor)
const publicDir = path.join(__dirname);
app.use(express.static(publicDir));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

['/index.html','/yemekler.html','/icecekler.html','/tatlilar.html','/lezzet-asistani.html'].forEach(route => {
    app.get(route, (req, res) => {
        res.sendFile(path.join(publicDir, route.replace('/', '')));
    });
});

// Uzantısız kısa yollar (örn. /tatlilar -> tatlilar.html)
[
    { path: '/yemekler', file: 'yemekler.html' },
    { path: '/icecekler', file: 'icecekler.html' },
    { path: '/tatlilar', file: 'tatlilar.html' },
    { path: '/lezzet-asistani', file: 'lezzet-asistani.html' }
].forEach(({ path: p, file }) => {
    app.get(p, (req, res) => {
        res.sendFile(path.join(publicDir, file));
    });
});

// LLM proxy
app.post('/api/assistant', async (req, res) => {
    try {
        const { ingredients, cuisine, diet } = req.body || {};
        if (!process.env.OPENAI_API_KEY) {
            return res.status(500).json({ error: 'OPENAI_API_KEY tanımlı değil' });
        }

        const systemPrompt = [
            'Sen deneyimli bir şef asistanısın.',
            'Kullanıcının verdiği malzemelerle 1-2 tarif fikri öner.',
            'Yanıtta: isim, kısa açıklama, malzeme listesi, adım adım talimatlar ve tahmini süre/porsiyon ver.',
            'Varsa alternatif öneriler ekle. Kısa ve öz ol.'
        ].join(' ');

        const userPrompt = `Malzemeler: ${ingredients}\nMutfak: ${cuisine || '-'}\nDiyet: ${diet || '-'}`;

        // OpenAI Responses API (gpt-4.1-turbo benzeri)
        const resp = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt }
                ],
                temperature: 0.7,
                max_tokens: 700
            })
        });

        if (!resp.ok) {
            const errText = await resp.text();
            return res.status(500).json({ error: 'OpenAI hatası', detail: errText });
        }
        const json = await resp.json();
        const reply = json.choices?.[0]?.message?.content || '';
        res.json({ reply });
    } catch (e) {
        res.status(500).json({ error: 'Sunucu hatası', detail: String(e) });
    }
});

app.listen(PORT, () => {
    console.log(`Lezzet Durağı sunucu http://localhost:${PORT}`);
});


