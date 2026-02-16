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
    {
        id: 11,
        name: "Maxi Dress",
        category: "dresses",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80"
        ],
        description: "Flowing maxi dress with elegant draping"
    },
    {
        id: 12,
        name: "Dress Pants",
        category: "pants",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80"
        ],
        description: "Sophisticated dress pants for formal occasions"
    },
    {
        id: 13,
        name: "Bomber Jacket",
        category: "jackets",
        price: 279.99,
        image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80"
        ],
        description: "Modern bomber jacket with classic appeal"
    },
    {
        id: 14,
        name: "Designer Sunglasses",
        category: "accessories",
        price: 229.99,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
            "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80"
        ],
        description: "Premium sunglasses with UV protection"
    },
    {
        id: 15,
        name: "Polo Shirt",
        category: "shirts",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80"
        ],
        description: "Classic polo shirt in premium piqué cotton"
    },
    {
        id: 16,
        name: "Summer Dress",
        category: "dresses",
        price: 139.99,
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80"
        ],
        description: "Light and breezy summer dress"
    },
    {
        id: 17,
        name: "Cargo Pants",
        category: "pants",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
            "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80"
        ],
        description: "Utility-inspired cargo pants with modern fit"
    },
    {
        id: 18,
        name: "Trench Coat",
        category: "jackets",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800&q=80",
            "https://images.unsplash.com/photo-1548126032-079d21f80cf1?w=800&q=80",
            "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80"
        ],
        description: "Timeless trench coat in water-resistant fabric"
    },
    {
        id: 19,
        name: "Leather Belt",
        category: "accessories",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583bb?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1624222247344-550fb60583bb?w=800&q=80",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
            "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80"
        ],
        description: "Genuine leather belt with brass buckle"
    },
    {
        id: 20,
        name: "Dress Shirt",
        category: "shirts",
        price: 109.99,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80"
        ],
        description: "Crisp dress shirt with French cuffs"
    },
    {
        id: 21,
        name: "Evening Gown",
        category: "dresses",
        price: 599.99,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80"
        ],
        description: "Stunning evening gown for gala events"
    },
    {
        id: 22,
        name: "Jogger Pants",
        category: "pants",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80",
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
            "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80"
        ],
        description: "Comfortable joggers with tapered fit"
    },
    {
        id: 23,
        name: "Denim Jacket",
        category: "jackets",
        price: 189.99,
        image: "https://images.unsplash.com/photo-1548126032-079d21f80cf1?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1548126032-079d21f80cf1?w=800&q=80",
            "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
        ],
        description: "Classic denim jacket with vintage wash"
    },
    {
        id: 24,
        name: "Silk Scarf",
        category: "accessories",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80",
            "https://images.unsplash.com/photo-1591561954555-607968b16a57?w=800&q=80",
            "https://images.unsplash.com/photo-1581779736280-94e7af2e64ec?w=800&q=80"
        ],
        description: "Luxurious silk scarf with artistic print"
    }
];

// Performance Monitoring
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            imageLoadTimes: [],
            totalImages: 0,
            loadedImages: 0,
            failedImages: 0,
            startTime: performance.now()
        };
    }

    trackImageLoad(url, loadTime) {
        this.metrics.imageLoadTimes.push({ url, loadTime });
        this.metrics.loadedImages++;
        this.updateDashboard();
    }

    trackImageError(url) {
        this.metrics.failedImages++;
        console.error(`Failed to load image: ${url}`);
        this.updateDashboard();
    }

    updateDashboard() {
        const dashboard = document.getElementById('performanceDashboard');
        if (!dashboard) return;

        const avgLoadTime = this.metrics.imageLoadTimes.length > 0
            ? (this.metrics.imageLoadTimes.reduce((sum, img) => sum + img.loadTime, 0) / this.metrics.imageLoadTimes.length).toFixed(2)
            : 0;

        const totalTime = ((performance.now() - this.metrics.startTime) / 1000).toFixed(2);

        dashboard.innerHTML = `
            <div class="perf-metric">
                <span class="perf-label">Total Images:</span>
                <span class="perf-value">${this.metrics.totalImages}</span>
            </div>
            <div class="perf-metric">
                <span class="perf-label">Loaded:</span>
                <span class="perf-value perf-success">${this.metrics.loadedImages}</span>
            </div>
            <div class="perf-metric">
                <span class="perf-label">Failed:</span>
                <span class="perf-value perf-error">${this.metrics.failedImages}</span>
            </div>
            <div class="perf-metric">
                <span class="perf-label">Avg Load Time:</span>
                <span class="perf-value">${avgLoadTime}ms</span>
            </div>
            <div class="perf-metric">
                <span class="perf-label">Total Time:</span>
                <span class="perf-value">${totalTime}s</span>
            </div>
        `;
    }

    setTotalImages(count) {
        this.metrics.totalImages = count;
        this.updateDashboard();
    }
}

const performanceMonitor = new PerformanceMonitor();

// Lazy Loading with Intersection Observer
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const startTime = performance.now();
                
                img.src = img.dataset.src;
                img.classList.add('loading');
                
                img.onload = () => {
                    const loadTime = performance.now() - startTime;
                    img.classList.remove('loading');
                    img.classList.add('loaded');
                    performanceMonitor.trackImageLoad(img.src, loadTime);
                };
                
                img.onerror = () => {
                    img.classList.remove('loading');
                    img.classList.add('error');
                    performanceMonitor.trackImageError(img.dataset.src);
                };
                
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Render Products
function renderProducts(filteredProducts = products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    performanceMonitor.setTotalImages(filteredProducts.length);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-category', product.category);
        
        card.innerHTML = `
            <div class="product-image">
                <img 
                    data-src="${product.image}" 
                    alt="${product.name}"
                    class="lazy-image"
                >
                <div class="product-overlay">
                    <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });

    // Initialize lazy loading
    lazyLoadImages();

    // Add event listeners
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        });
    });

    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            showQuickView(productId);
        });
    });
}

// Shopping Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">&times;</button>
            </div>
        `).join('');
    }

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Quick View Modal
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="quick-view-content">
            <button class="close-modal">&times;</button>
            <div class="quick-view-grid">
                <div class="quick-view-images">
                    <img src="${product.image}" alt="${product.name}" class="main-image">
                    <div class="thumbnail-images">
                        ${product.images.map(img => `
                            <img src="${img}" alt="${product.name}" class="thumbnail">
                        `).join('')}
                    </div>
                </div>
                <div class="quick-view-info">
                    <span class="product-category">${product.category}</span>
                    <h2>${product.name}</h2>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <p class="product-description">${product.description}</p>
                    <button class="add-to-cart-btn-large" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);

    // Event listeners
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        }
    });

    modal.querySelector('.add-to-cart-btn-large').addEventListener('click', () => {
        addToCart(productId);
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    });

    // Thumbnail switching
    modal.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            modal.querySelector('.main-image').src = product.images[index];
        });
    });
}

// Filter Functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;
        const filtered = category === 'all' 
            ? products 
            : products.filter(p => p.category === category);
        
        renderProducts(filtered);
    });
});

// Cart Toggle
document.getElementById('cartToggle')?.addEventListener('click', () => {
    document.getElementById('cartSidebar').classList.add('open');
});

document.getElementById('closeCart')?.addEventListener('click', () => {
    document.getElementById('cartSidebar').classList.remove('open');
});

// Checkout
document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    showNotification('Checkout feature coming soon!');
});

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'toast-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Push Notifications
const notificationPrompt = document.getElementById('notificationPrompt');
const notificationToggle = document.getElementById('notificationToggle');

// Show notification prompt after 5 seconds
setTimeout(() => {
    if ('Notification' in window && Notification.permission === 'default') {
        notificationPrompt?.classList.add('show');
    }
}, 5000);

document.getElementById('allowNotifications')?.addEventListener('click', async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
        showNotification('Notifications enabled!');
        notificationPrompt.classList.remove('show');
    }
});

document.getElementById('denyNotifications')?.addEventListener('click', () => {
    notificationPrompt.classList.remove('show');
});

notificationToggle?.addEventListener('click', async () => {
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            showNotification('Notifications are already enabled!');
        } else {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                showNotification('Notifications enabled!');
            }
        }
    }
});

// Contact Form
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('Thank you! We will get back to you soon.');
    e.target.reset();
});

// Mobile Menu
document.getElementById('menuToggle')?.addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navMenu')?.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById('navMenu')?.classList.remove('active');
            document.getElementById('menuToggle')?.classList.remove('active');
        }
    });
});

// Active Nav Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            navLink?.classList.add('active');
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
});

// Make functions globally accessible
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
