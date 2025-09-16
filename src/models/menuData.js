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
                prepTime: "25 dakika",
                allergens: ["Et"]
            },
            {
                id: 2,
                name: "Urfa Kebap",
                description: "Acısız kıyma ile hazırlanan yumuşak kebap",
                price: "85₺",
                category: "kebap",
                image: "urfa-kebap.jpg",
                ingredients: ["Kuzu eti", "Kırmızı biber", "Soğan", "Tuz"],
                prepTime: "25 dakika",
                allergens: ["Et"]
            },
            {
                id: 3,
                name: "İskender Kebap",
                description: "Döner eti, yoğurt ve tereyağı ile servis edilen kebap",
                price: "95₺",
                category: "kebap",
                image: "iskender-kebap.jpg",
                ingredients: ["Döner eti", "Yoğurt", "Tereyağı", "Ekmek"],
                prepTime: "20 dakika",
                allergens: ["Et", "Süt", "Gluten"]
            },
            {
                id: 4,
                name: "Şiş Kebap",
                description: "Küp küp doğranmış et parçalarının şişte pişirilmesi",
                price: "90₺",
                category: "kebap",
                image: "sis-kebap.jpg",
                ingredients: ["Kuzu eti", "Soğan", "Domates", "Biber"],
                prepTime: "25 dakika",
                allergens: ["Et"]
            },
            {
                id: 5,
                name: "Tavuk Şiş",
                description: "Marine edilmiş tavuk göğsü şiş",
                price: "75₺",
                category: "tavuk",
                image: "tavuk-sis.jpg",
                ingredients: ["Tavuk göğsü", "Süt", "Baharatlar", "Zeytinyağı"],
                prepTime: "20 dakika",
                allergens: ["Et", "Süt"]
            },
            {
                id: 6,
                name: "Tavuk Döner",
                description: "Taze tavuk etinden hazırlanan döner",
                price: "65₺",
                category: "tavuk",
                image: "tavuk-doner.jpg",
                ingredients: ["Tavuk eti", "Baharatlar", "Soğan", "Domates"],
                prepTime: "15 dakika",
                allergens: ["Et"]
            },
            {
                id: 7,
                name: "Tavuk Kanat",
                description: "Baharatlı sosla marine edilmiş tavuk kanat",
                price: "55₺",
                category: "tavuk",
                image: "tavuk-kanat.jpg",
                ingredients: ["Tavuk kanat", "Baharatlı sos", "Sarımsak", "Limon"],
                prepTime: "25 dakika",
                allergens: ["Et"]
            },
            {
                id: 8,
                name: "Kuzu Pirzola",
                description: "Taze kuzu pirzola ızgarada",
                price: "120₺",
                category: "et",
                image: "kuzu-pirzola.jpg",
                ingredients: ["Kuzu pirzola", "Tuz", "Karabiber", "Zeytinyağı"],
                prepTime: "30 dakika",
                allergens: ["Et"]
            },
            {
                id: 9,
                name: "Kuzu Tandır",
                description: "Uzun süre pişirilmiş yumuşak kuzu eti",
                price: "110₺",
                category: "et",
                image: "kuzu-tandir.jpg",
                ingredients: ["Kuzu eti", "Soğan", "Havuç", "Baharatlar"],
                prepTime: "45 dakika",
                allergens: ["Et"]
            },
            {
                id: 10,
                name: "Köfte",
                description: "Ev yapımı kıymalı köfte",
                price: "70₺",
                category: "et",
                image: "kofte.jpg",
                ingredients: ["Kıyma", "Soğan", "Ekmek içi", "Baharatlar"],
                prepTime: "25 dakika",
                allergens: ["Et", "Gluten"]
            },
            {
                id: 11,
                name: "Lahmacun",
                description: "İnce hamur üzerine kıyma ve sebze",
                price: "25₺",
                category: "hamur",
                image: "lahmacun.jpg",
                ingredients: ["Hamur", "Kıyma", "Domates", "Biber", "Soğan"],
                prepTime: "15 dakika",
                allergens: ["Et", "Gluten"]
            },
            {
                id: 12,
                name: "Pide",
                description: "Çeşitli malzemelerle hazırlanan pide",
                price: "45₺",
                category: "hamur",
                image: "pide.jpg",
                ingredients: ["Hamur", "Peynir", "Et", "Sebzeler"],
                prepTime: "20 dakika",
                allergens: ["Et", "Süt", "Gluten"]
            },
            {
                id: 13,
                name: "Mantı",
                description: "Ev yapımı mantı, yoğurt ve tereyağı ile",
                price: "50₺",
                category: "hamur",
                image: "manti.jpg",
                ingredients: ["Hamur", "Kıyma", "Yoğurt", "Tereyağı", "Nane"],
                prepTime: "30 dakika",
                allergens: ["Et", "Süt", "Gluten"]
            },
            {
                id: 14,
                name: "Börek",
                description: "Çeşitli içlerle hazırlanan börek",
                price: "35₺",
                category: "hamur",
                image: "borek.jpg",
                ingredients: ["Yufka", "Peynir", "Ispanak", "Patates"],
                prepTime: "20 dakika",
                allergens: ["Süt", "Gluten"]
            },
            {
                id: 15,
                name: "Çorba",
                description: "Günlük çorba çeşitleri",
                price: "20₺",
                category: "çorba",
                image: "corba.jpg",
                ingredients: ["Sebze", "Et suyu", "Baharatlar", "Makarna"],
                prepTime: "15 dakika",
                allergens: ["Et", "Gluten"]
            },
            {
                id: 16,
                name: "Mercimek Çorbası",
                description: "Geleneksel kırmızı mercimek çorbası",
                price: "18₺",
                category: "çorba",
                image: "mercimek-corbasi.jpg",
                ingredients: ["Kırmızı mercimek", "Soğan", "Havuç", "Baharatlar"],
                prepTime: "20 dakika",
                allergens: []
            },
            {
                id: 17,
                name: "Ezogelin Çorba",
                description: "Bulgur ve mercimekli geleneksel çorba",
                price: "22₺",
                category: "çorba",
                image: "ezogelin-corbasi.jpg",
                ingredients: ["Bulgur", "Mercimek", "Domates", "Biber", "Nane"],
                prepTime: "25 dakika",
                allergens: ["Gluten"]
            },
            {
                id: 18,
                name: "Balık",
                description: "Günlük taze balık çeşitleri",
                price: "80₺",
                category: "balık",
                image: "balik.jpg",
                ingredients: ["Taze balık", "Limon", "Zeytinyağı", "Baharatlar"],
                prepTime: "20 dakika",
                allergens: ["Balık"]
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
                name: "Espresso",
                description: "Koyu ve aromalı espresso",
                price: "18₺",
                category: "sıcak",
                image: "espresso.jpg",
                size: "30ml"
            },
            {
                id: 4,
                name: "Cappuccino",
                description: "Espresso, sıcak süt ve köpük",
                price: "22₺",
                category: "sıcak",
                image: "cappuccino.jpg",
                size: "200ml"
            },
            {
                id: 5,
                name: "Latte",
                description: "Espresso ve bol sıcak süt",
                price: "24₺",
                category: "sıcak",
                image: "latte.jpg",
                size: "250ml"
            },
            {
                id: 6,
                name: "Americano",
                description: "Espresso ve sıcak su",
                price: "16₺",
                category: "sıcak",
                image: "americano.jpg",
                size: "200ml"
            },
            {
                id: 7,
                name: "Mocha",
                description: "Espresso, çikolata ve sıcak süt",
                price: "26₺",
                category: "sıcak",
                image: "mocha.jpg",
                size: "250ml"
            },
            {
                id: 8,
                name: "Sıcak Çikolata",
                description: "Ev yapımı sıcak çikolata",
                price: "20₺",
                category: "sıcak",
                image: "sicak-cikolata.jpg",
                size: "250ml"
            },
            {
                id: 9,
                name: "Taze Sıkılmış Portakal Suyu",
                description: "Günlük taze portakallardan",
                price: "25₺",
                category: "soğuk",
                image: "portakal-suyu.jpg",
                size: "400ml"
            },
            {
                id: 10,
                name: "Taze Sıkılmış Elma Suyu",
                description: "Taze elmalardan sıkılmış",
                price: "22₺",
                category: "soğuk",
                image: "elma-suyu.jpg",
                size: "400ml"
            },
            {
                id: 11,
                name: "Taze Sıkılmış Nar Suyu",
                description: "Taze narlardan sıkılmış",
                price: "28₺",
                category: "soğuk",
                image: "nar-suyu.jpg",
                size: "350ml"
            },
            {
                id: 12,
                name: "Ayran",
                description: "Ev yapımı yoğurt ayranı",
                price: "12₺",
                category: "soğuk",
                image: "ayran.jpg",
                size: "350ml"
            },
            {
                id: 13,
                name: "Limonata",
                description: "Taze limon ve nane",
                price: "18₺",
                category: "soğuk",
                image: "limonata.jpg",
                size: "400ml"
            },
            {
                id: 14,
                name: "Şerbet",
                description: "Geleneksel meyve şerbeti",
                price: "15₺",
                category: "soğuk",
                image: "serbet.jpg",
                size: "400ml"
            },
            {
                id: 15,
                name: "Kola",
                description: "Soğuk kola",
                price: "12₺",
                category: "soğuk",
                image: "kola.jpg",
                size: "330ml"
            },
            {
                id: 16,
                name: "Fanta",
                description: "Portakallı gazoz",
                price: "12₺",
                category: "soğuk",
                image: "fanta.jpg",
                size: "330ml"
            },
            {
                id: 17,
                name: "Sprite",
                description: "Limonlu gazoz",
                price: "12₺",
                category: "soğuk",
                image: "sprite.jpg",
                size: "330ml"
            },
            {
                id: 18,
                name: "Soda",
                description: "Çeşitli aromalı sodalar",
                price: "10₺",
                category: "soğuk",
                image: "soda.jpg",
                size: "330ml"
            },
            {
                id: 19,
                name: "Soğuk Kahve",
                description: "Buzlu soğuk kahve",
                price: "20₺",
                category: "soğuk",
                image: "soguk-kahve.jpg",
                size: "300ml"
            },
            {
                id: 20,
                name: "Frappuccino",
                description: "Kahve, süt ve buz karışımı",
                price: "28₺",
                category: "soğuk",
                image: "frappuccino.jpg",
                size: "350ml"
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
