# Lezzet Durağı Restoran Web Sitesi

Modern ve responsive tasarım ile yemek, içecek ve tatlı menüleri sunan restoran web sitesi.

## 🏗️ Proje Yapısı (MVC Mimarisi)

```
Grup-Calismasi/
├── src/
│   ├── components/          # Ortak bileşenler
│   │   ├── header.html      # Navigasyon bileşeni
│   │   └── footer.html      # Footer bileşeni
│   ├── controllers/         # İş mantığı
│   │   └── menuController.js # Menü işlemleri
│   ├── models/             # Veri modelleri
│   │   └── menuData.js     # Menü verileri
│   ├── views/              # Sayfa şablonları
│   │   ├── home.html       # Ana sayfa
│   │   ├── yemekler.html   # Yemekler sayfası
│   │   ├── icecekler.html  # İçecekler sayfası
│   │   └── tatlilar.html   # Tatlılar sayfası
│   └── assets/             # Statik dosyalar
│       ├── css/            # Stil dosyaları
│       ├── js/             # JavaScript dosyaları
│       └── images/         # Görseller
├── index.html              # Ana giriş dosyası
└── README.md               # Proje dokümantasyonu
```

## 👥 Ekip Çalışması

### Branch Yapısı
- **main**: Ana branch (production ready kod)
- **development**: Tek çalışma branch'i (3 kişi burada çalışır)

### Ekip Üyeleri ve Görev Dağılımı

#### 👨‍💻 Kişi 1 - Frontend Developer
- **Sorumluluklar**: UI/UX tasarım, CSS, responsive design
- **Dosyalar**: `src/assets/css/`, `src/components/`, `styles.css`

#### 👨‍💻 Kişi 2 - JavaScript Developer  
- **Sorumluluklar**: JavaScript, controller logic, etkileşimler
- **Dosyalar**: `src/controllers/`, `src/assets/js/`, `script.js`

#### 👨‍💻 Kişi 3 - Content Developer
- **Sorumluluklar**: İçerik yönetimi, veri modelleri, sayfa şablonları
- **Dosyalar**: `src/models/`, `src/views/`, HTML sayfaları

## 🚀 Çalışma Akışı

### 1. İlk Kurulum
```bash
# Repository'yi klonla
git clone https://github.com/zehrturkogluu/Grup-Calismasi.git

# Development branch'ine geç
git checkout development
```

### 2. Günlük Çalışma
```bash
# En güncel kodu al
git pull origin development

# Çalışmaya başla (aynı branch üzerinde)
# Değişikliklerinizi yapın

# Commit ve push yap
git add .
git commit -m "[tip]: [açıklama]"
git push origin development
```

### 3. Commit Kuralları
```
[tip]: [açıklama]

Tipler:
- feat: Yeni özellik
- fix: Hata düzeltmesi
- docs: Dokümantasyon
- style: Kod formatı
- refactor: Kod yeniden düzenleme
- test: Test ekleme
- chore: Genel işler

Örnek:
feat: yemekler sayfası için menü kartları eklendi
fix: mobil navigasyon menüsü düzeltildi
```

### 4. Ekip Çalışma Kuralları
1. **Aynı dosyada çalışmadan önce** git pull yapın
2. **Çakışma durumunda** iletişim kurun
3. **Büyük değişikliklerden önce** ekip arkadaşlarınızı bilgilendirin
4. **Commit mesajlarını** açık ve anlaşılır yazın

## 📋 Görev Listesi

### ✅ Tamamlanan
- [x] MVC mimarisi kurulumu
- [x] Ana sayfa tasarımı
- [x] Branch stratejisi
- [x] Ortak bileşenler (header, footer)

### 🔄 Devam Eden
- [ ] Yemekler sayfası
- [ ] İçecekler sayfası  
- [ ] Tatlılar sayfası
- [ ] Responsive tasarım optimizasyonu

### 📝 Planlanan
- [ ] Arama fonksiyonu
- [ ] Filtreleme sistemi
- [ ] İletişim formu
- [ ] SEO optimizasyonu

## 🛠️ Teknolojiler

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations
- **JavaScript ES6+**: Modern JavaScript
- **Font Awesome**: İkonlar
- **Google Fonts**: Tipografi

## 📱 Responsive Tasarım

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: 320px - 767px

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: #d4a574 (Altın)
- **Secondary**: #c49b63 (Koyu altın)
- **Background**: #ffffff (Beyaz)
- **Text**: #333333 (Koyu gri)

### Tipografi
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 600, 700

## 📞 İletişim

- **Email**: info@lezzetduragi.com
- **Telefon**: +90 (212) 555 0123
- **Adres**: Merkez Mah. Lezzet Sok. No:123, İstanbul

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Not**: Bu proje ekip çalışması için tasarlanmıştır. Lütfen branch stratejisini ve commit kurallarını takip edin.
