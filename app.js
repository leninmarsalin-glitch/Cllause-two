// Product Data with Multiple Images for Performance Testing
const products = [
    {
        id: 1,
        name: "Classic Oxford Shirt",
        category: "shirts",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80"
        ],
        description: "Premium cotton Oxford shirt with impeccable tailoring"
    },
    {
        id: 2,
        name: "Silk Evening Dress",
        category: "dresses",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80"
        ],
        description: "Elegant silk dress perfect for special occasions"
    },
    {
        id: 3,
        name: "Tailored Chinos",
        category: "pants",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80"
        ],
        description: "Versatile chinos with a modern fit"
    },
    {
        id: 4,
        name: "Leather Blazer",
        category: "jackets",
        price: 449.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
            "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80"
        ],
        description: "Premium leather blazer with contemporary styling"
    },
    {
        id: 5,
        name: "Cashmere Sweater",
        category: "shirts",
        price: 179.99,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80"
        ],
        description: "Luxuriously soft cashmere sweater"
    },
    {
        id: 6,
        name: "Cocktail Dress",
        category: "dresses",
        price: 259.99,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
            "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
        ],
        description: "Stunning cocktail dress for evening events"
    },
    {
        id: 7,
        name: "Denim Jeans",
        category: "pants",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
            "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80",
            "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80"
        ],
        description: "Premium selvedge denim with perfect fit"
    },
    {
        id: 8,
        name: "Wool Overcoat",
        category: "jackets",
        price: 499.99,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
            "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800&q=80",
            "https://images.unsplash.com/photo-1548126032-079d21f80cf1?w=800&q=80"
        ],
        description: "Classic wool overcoat for sophisticated style"
    },
    {
        id: 9,
        name: "Luxury Handbag",
        category: "accessories",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
        ],
        description: "Handcrafted leather handbag with timeless design"
    },
    {
        id: 10,
        name: "Linen Shirt",
        category: "shirts",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80"
        ],
        description: "Breathable linen shirt for summer comfort"
    },

    // --- REPLACED BLOCK ---
    {
        id: 19,
        name: "Leather Belt",
        category: "accessories",
        price: 89.99,
        image: "images/jacket2.jpg",
        images: [
            "images/jacket2.jpg",
            "images/jacket2.jpg",
            "images/jacket2.jpg"
        ],
        description: "Genuine leather belt with brass buckle"
    },

    // --- REPLACED BLOCK ---
    {
        id: 23,
        name: "Denim Jacket",
        category: "jackets",
        price: 189.99,
        image: "images/denim-jacket.jpg",
        images: [
            "images/denim-jacket.jpg",
            "images/denim-jacket.jpg",
            "images/denim-jacket.jpg"
        ],
        description: "Classic denim jacket with vintage wash"
    }
];

