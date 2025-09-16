// Menu Controller - Menü işlemlerini yönetir
class MenuController {
    constructor() {
        this.menuData = new MenuData();
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    // Mevcut sayfayı belirle
    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('yemekler')) return 'yemekler';
        if (path.includes('icecekler')) return 'icecekler';
        if (path.includes('tatlilar')) return 'tatlilar';
        return 'home';
    }

    // Controller'ı başlat
    init() {
        this.setActiveNavLink();
        this.loadMenuData();
        this.bindEvents();
    }

    // Aktif navigasyon linkini ayarla
    setActiveNavLink() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === this.currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Menü verilerini yükle
    loadMenuData() {
        switch (this.currentPage) {
            case 'yemekler':
                this.renderYemekler();
                break;
            case 'icecekler':
                this.renderIcecekler();
                break;
            case 'tatlilar':
                this.renderTatlilar();
                break;
            default:
                this.renderHomePage();
        }
    }

    // Yemekler sayfasını render et
    renderYemekler() {
        const yemekler = this.menuData.getYemekler();
        const container = document.getElementById('menu-container');
        
        if (container) {
            container.innerHTML = this.generateMenuHTML(yemekler, 'yemekler');
            
            // Animasyonları tekrar başlat
            this.initAnimations();
        }
    }

    // İçecekler sayfasını render et
    renderIcecekler() {
        const icecekler = this.menuData.getIcecekler();
        const container = document.getElementById('menu-container');
        
        if (container) {
            container.innerHTML = this.generateMenuHTML(icecekler, 'icecekler');
            
            // Animasyonları tekrar başlat
            this.initAnimations();
        }
    }

    // Tatlılar sayfasını render et
    renderTatlilar() {
        const tatlilar = this.menuData.getTatlilar();
        const container = document.getElementById('menu-container');
        
        if (container) {
            container.innerHTML = this.generateMenuHTML(tatlilar, 'tatlilar');
            
            // Animasyonları tekrar başlat
            this.initAnimations();
        }
    }

    // Ana sayfa render et
    renderHomePage() {
        // Ana sayfa için özel render işlemleri
        this.renderMenuPreview();
    }

    // Menü önizleme render et
    renderMenuPreview() {
        const previewContainer = document.querySelector('.menu-grid');
        if (previewContainer) {
            // Ana sayfadaki menü önizleme kartları
            previewContainer.innerHTML = `
                <div class="menu-item">
                    <div class="menu-image">
                        <div class="image-placeholder">
                            <i class="fas fa-drumstick-bite"></i>
                        </div>
                    </div>
                    <div class="menu-content">
                        <h3>Ana Yemekler</h3>
                        <p>Geleneksel ve modern yemeklerimizi keşfedin</p>
                        <a href="yemekler.html" class="menu-link">Görüntüle <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="menu-image">
                        <div class="image-placeholder">
                            <i class="fas fa-coffee"></i>
                        </div>
                    </div>
                    <div class="menu-content">
                        <h3>İçecekler</h3>
                        <p>Taze sıkılmış meyve suları ve sıcak içecekler</p>
                        <a href="icecekler.html" class="menu-link">Görüntüle <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="menu-image">
                        <div class="image-placeholder">
                            <i class="fas fa-ice-cream"></i>
                        </div>
                    </div>
                    <div class="menu-content">
                        <h3>Tatlılar</h3>
                        <p>Ev yapımı tatlılarımızla damaklarınızı şenlendirin</p>
                        <a href="tatlilar.html" class="menu-link">Görüntüle <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
        }
    }

    // Menü HTML'i oluştur
    generateMenuHTML(items, type) {
        const categories = this.getCategories(items);
        let html = '';

        categories.forEach(category => {
            const categoryItems = items.filter(item => item.category === category);
            html += `
                <div class="menu-category">
                    <h2 class="category-title">${this.getCategoryTitle(category, type)}</h2>
                    <div class="menu-items-grid">
                        ${categoryItems.map(item => this.generateMenuItemHTML(item)).join('')}
                    </div>
                </div>
            `;
        });

        return html;
    }

    // Menü öğesi HTML'i oluştur
    generateMenuItemHTML(item) {
        return `
            <div class="menu-item-card" data-id="${item.id}">
                <div class="menu-item-image">
                    <div class="image-placeholder">
                        <i class="fas fa-${this.getIconForItem(item)}"></i>
                    </div>
                    <div class="price-tag">${item.price}</div>
                </div>
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    ${item.ingredients ? `
                        <div class="ingredients">
                            <strong>Malzemeler:</strong> ${item.ingredients.join(', ')}
                        </div>
                    ` : ''}
                    ${item.prepTime ? `
                        <div class="prep-time">
                            <i class="fas fa-clock"></i> ${item.prepTime}
                        </div>
                    ` : ''}
                    ${item.size ? `
                        <div class="size-info">
                            <i class="fas fa-info-circle"></i> ${item.size}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    // Kategorileri al
    getCategories(items) {
        return [...new Set(items.map(item => item.category))];
    }

    // Kategori başlığını al
    getCategoryTitle(category, type) {
        const titles = {
            yemekler: {
                'kebap': 'Kebaplar',
                'tavuk': 'Tavuk Yemekleri',
                'et': 'Et Yemekleri',
                'hamur': 'Hamur İşleri',
                'çorba': 'Çorbalar',
                'balık': 'Balık Yemekleri'
            },
            icecekler: {
                'sıcak': 'Sıcak İçecekler',
                'soğuk': 'Soğuk İçecekler'
            },
            tatlilar: {
                'geleneksel': 'Geleneksel Tatlılar',
                'sütlü': 'Sütlü Tatlılar',
                'soğuk': 'Soğuk Tatlılar',
                'modern': 'Modern Tatlılar'
            }
        };
        return titles[type] && titles[type][category] ? titles[type][category] : category;
    }

    // Öğe için ikon al
    getIconForItem(item) {
        if (item.category === 'kebap') return 'fire';
        if (item.category === 'tavuk') return 'drumstick-bite';
        if (item.category === 'et') return 'bone';
        if (item.category === 'hamur') return 'pizza-slice';
        if (item.category === 'çorba') return 'bowl-food';
        if (item.category === 'balık') return 'fish';
        if (item.category === 'sıcak') return 'coffee';
        if (item.category === 'soğuk') return 'glass';
        if (item.category === 'geleneksel') return 'cookie';
        if (item.category === 'sütlü') return 'ice-cream';
        if (item.category === 'modern') return 'birthday-cake';
        return 'utensils';
    }

    // Event listener'ları bağla
    bindEvents() {
        // Arama fonksiyonu
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }

        // Kategori filtresi
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.handleCategoryFilter(e.target.value);
            });
        }
    }

    // Arama işlemi
    handleSearch(query) {
        let results;
        
        // Sadece mevcut sayfa türündeki ürünleri ara
        switch (this.currentPage) {
            case 'yemekler':
                results = this.menuData.getYemekler().filter(item => 
                    item.name.toLowerCase().includes(query.toLowerCase()) ||
                    item.description.toLowerCase().includes(query.toLowerCase())
                );
                break;
            case 'icecekler':
                results = this.menuData.getIcecekler().filter(item => 
                    item.name.toLowerCase().includes(query.toLowerCase()) ||
                    item.description.toLowerCase().includes(query.toLowerCase())
                );
                break;
            case 'tatlilar':
                results = this.menuData.getTatlilar().filter(item => 
                    item.name.toLowerCase().includes(query.toLowerCase()) ||
                    item.description.toLowerCase().includes(query.toLowerCase())
                );
                break;
            default:
                results = [];
        }
        
        const container = document.getElementById('menu-container');
        if (container) {
            if (results.length > 0) {
                container.innerHTML = this.generateMenuHTML(results, this.currentPage);
            } else {
                container.innerHTML = `
                    <div style="text-align: center; padding: 50px; color: #666;">
                        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; color: #d4a574;"></i>
                        <h3>Aradığınız kriterlere uygun ürün bulunamadı</h3>
                        <p>Lütfen farklı anahtar kelimeler deneyin</p>
                    </div>
                `;
            }
            this.initAnimations();
        }
    }

    // Kategori filtresi
    handleCategoryFilter(category) {
        let items;
        switch (this.currentPage) {
            case 'yemekler':
                items = category ? this.menuData.getYemeklerByCategory(category) : this.menuData.getYemekler();
                break;
            case 'icecekler':
                items = category ? this.menuData.getIceceklerByCategory(category) : this.menuData.getIcecekler();
                break;
            case 'tatlilar':
                items = category ? this.menuData.getTatlilarByCategory(category) : this.menuData.getTatlilar();
                break;
        }
        
        const container = document.getElementById('menu-container');
        if (container && items) {
            container.innerHTML = this.generateMenuHTML(items, this.currentPage);
            this.initAnimations();
        }
    }

    // Animasyonları başlat
    initAnimations() {
        const menuCards = document.querySelectorAll('.menu-item-card');
        menuCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MenuController;
}
