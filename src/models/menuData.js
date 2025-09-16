// Menu Data Model - Ortak veri yapısı
class MenuData {
    constructor() {
        this.yemekler = [
            {
                id: 1,
                name: "Adana Kebap",
                description: "Acılı kıyma ile hazırlanan geleneksel kebap",
                price: "85₺",
                category: "kebap",
                image: "adana-kebap.jpg",
                ingredients: ["Kuzu eti", "Kırmızı biber", "Soğan", "Tuz"],
                prepTime: "25 dakika"
            },
            {
                id: 2,
                name: "Urfa Kebap",
                description: "Acısız kıyma ile hazırlanan yumuşak kebap",
                price: "85₺",
                category: "kebap",
                image: "urfa-kebap.jpg",
                ingredients: ["Kuzu eti", "Kırmızı biber", "Soğan", "Tuz"],
                prepTime: "25 dakika"
            },
            {
                id: 3,
                name: "Tavuk Şiş",
                description: "Marine edilmiş tavuk göğsü şiş",
                price: "75₺",
                category: "tavuk",
                image: "tavuk-sis.jpg",
                ingredients: ["Tavuk göğsü", "Süt", "Baharatlar", "Zeytinyağı"],
                prepTime: "20 dakika"
            },
            {
                id: 4,
                name: "Kuzu Pirzola",
                description: "Taze kuzu pirzola ızgarada",
                price: "120₺",
                category: "et",
                image: "kuzu-pirzola.jpg",
                ingredients: ["Kuzu pirzola", "Tuz", "Karabiber", "Zeytinyağı"],
                prepTime: "30 dakika"
            },
            {
                id: 5,
                name: "Lahmacun",
                description: "İnce hamur üzerine kıyma ve sebze",
                price: "25₺",
                category: "hamur",
                image: "lahmacun.jpg",
                ingredients: ["Hamur", "Kıyma", "Domates", "Biber", "Soğan"],
                prepTime: "15 dakika"
            },
            {
                id: 6,
                name: "Pide",
                description: "Çeşitli malzemelerle hazırlanan pide",
                price: "45₺",
                category: "hamur",
                image: "pide.jpg",
                ingredients: ["Hamur", "Peynir", "Et", "Sebzeler"],
                prepTime: "20 dakika"
            }
        ];

        this.icecekler = [
            {
                id: 1,
                name: "Türk Kahvesi",
                description: "Geleneksel Türk kahvesi",
                price: "15₺",
                category: "sıcak",
                image: "turk-kahvesi.jpg",
                size: "Küçük fincan"
            },
            {
                id: 2,
                name: "Çay",
                description: "Taze demlenmiş çay",
                price: "8₺",
                category: "sıcak",
                image: "cay.jpg",
                size: "Büyük bardak"
            },
            {
                id: 3,
                name: "Taze Sıkılmış Portakal Suyu",
                description: "Günlük taze portakallardan",
                price: "25₺",
                category: "soğuk",
                image: "portakal-suyu.jpg",
                size: "400ml"
            },
            {
                id: 4,
                name: "Ayran",
                description: "Ev yapımı yoğurt ayranı",
                price: "12₺",
                category: "soğuk",
                image: "ayran.jpg",
                size: "350ml"
            },
            {
                id: 5,
                name: "Limonata",
                description: "Taze limon ve nane",
                price: "18₺",
                category: "soğuk",
                image: "limonata.jpg",
                size: "400ml"
            },
            {
                id: 6,
                name: "Soda",
                description: "Çeşitli aromalı sodalar",
                price: "10₺",
                category: "soğuk",
                image: "soda.jpg",
                size: "330ml"
            }
        ];

        this.tatlilar = [
            {
                id: 1,
                name: "Baklava",
                description: "Ev yapımı cevizli baklava",
                price: "35₺",
                category: "geleneksel",
                image: "baklava.jpg",
                ingredients: ["Yufka", "Ceviz", "Şeker", "Tereyağı"]
            },
            {
                id: 2,
                name: "Künefe",
                description: "Taze peynirli künefe",
                price: "40₺",
                category: "geleneksel",
                image: "kunefe.jpg",
                ingredients: ["Tel kadayıf", "Taze peynir", "Şeker şurubu"]
            },
            {
                id: 3,
                name: "Sütlaç",
                description: "Ev yapımı sütlaç",
                price: "20₺",
                category: "sütlü",
                image: "sutlac.jpg",
                ingredients: ["Süt", "Pirinç", "Şeker", "Tarçın"]
            },
            {
                id: 4,
                name: "Dondurma",
                description: "Çeşitli aromalı dondurma",
                price: "25₺",
                category: "soğuk",
                image: "dondurma.jpg",
                flavors: ["Vanilya", "Çikolata", "Çilek", "Muz"]
            },
            {
                id: 5,
                name: "Profiterol",
                description: "Çikolata soslu profiterol",
                price: "30₺",
                category: "modern",
                image: "profiterol.jpg",
                ingredients: ["Hamur", "Krema", "Çikolata sosu"]
            },
            {
                id: 6,
                name: "Tiramisu",
                description: "İtalyan tatlısı tiramisu",
                price: "45₺",
                category: "modern",
                image: "tiramisu.jpg",
                ingredients: ["Mascarpone", "Kahve", "Kakao", "Bisküvi"]
            }
        ];
    }

    // Yemekler getir
    getYemekler() {
        return this.yemekler;
    }

    // Kategoriye göre yemekler getir
    getYemeklerByCategory(category) {
        return this.yemekler.filter(item => item.category === category);
    }

    // İçecekler getir
    getIcecekler() {
        return this.icecekler;
    }

    // Kategoriye göre içecekler getir
    getIceceklerByCategory(category) {
        return this.icecekler.filter(item => item.category === category);
    }

    // Tatlılar getir
    getTatlilar() {
        return this.tatlilar;
    }

    // Kategoriye göre tatlılar getir
    getTatlilarByCategory(category) {
        return this.tatlilar.filter(item => item.category === category);
    }

    // ID'ye göre ürün getir
    getProductById(type, id) {
        const products = this[type];
        return products.find(product => product.id === parseInt(id));
    }

    // Arama fonksiyonu
    searchProducts(query) {
        const allProducts = [...this.yemekler, ...this.icecekler, ...this.tatlilar];
        return allProducts.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MenuData;
}
