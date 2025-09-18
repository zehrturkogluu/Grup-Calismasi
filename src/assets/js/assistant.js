document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('ask-btn');
    const ingredientsEl = document.getElementById('ingredients');
    const cuisineEl = document.getElementById('cuisine');
    const dietEl = document.getElementById('diet');
    const responseEl = document.getElementById('response');

    if (!btn) return;

    function setLoading(isLoading) {
        if (isLoading) {
            responseEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Tarif fikirleri hazırlanıyor...';
        }
    }

    btn.addEventListener('click', async () => {
        const ingredients = (ingredientsEl.value || '').trim();
        const cuisine = (cuisineEl && cuisineEl.value) || '';
        const diet = (dietEl && dietEl.value) || '';

        if (!ingredients) {
            responseEl.innerHTML = '<span style="color:#e74c3c">Lütfen en az bir malzeme girin.</span>';
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/assistant', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ingredients, cuisine, diet })
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || 'İstek başarısız');
            }
            const data = await res.json();
            responseEl.innerHTML = formatMarkdownLike(data.reply || 'Sonuç alınamadı.');
        } catch (err) {
            responseEl.innerHTML = '<span style="color:#e74c3c">Hata: ' + (err.message || err) + '</span>';
        }
    });

    function formatMarkdownLike(text) {
        let html = (text || '')
            .replace(/\n\n/g, '<br/><br/>')
            .replace(/\n/g, '<br/>');
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        return html;
    }
});


