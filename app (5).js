// Products Data
const products = [
    {
        id: 1,
        name: 'Classic Oxford Shirt',
        category: 'shirts',
        price: 89.99,
        description: 'Premium cotton oxford shirt with refined tailoring',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500',
        badge: 'New'
    },
    {
        id: 2,
        name: 'Silk Evening Dress',
        category: 'dresses',
        price: 299.99,
        description: 'Elegant silk dress perfect for special occasions',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
        badge: 'Featured'
    },
    {
        id: 3,
        name: 'Tailored Wool Pants',
        category: 'pants',
        price: 149.99,
        description: 'Sophisticated wool blend trousers with perfect drape',
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500',
        badge: null
    },
    {
        id: 4,
        name: 'Leather Jacket',
        category: 'jackets',
        price: 499.99,
        description: 'Premium leather jacket with timeless design',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
        badge: 'Bestseller'
    },
    {
        id: 5,
        name: 'Cashmere Scarf',
        category: 'accessories',
        price: 129.99,
        description: 'Luxurious cashmere scarf in classic colors',
        image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500',
        badge: null
    },
    {
        id: 6,
        name: 'Linen Summer Shirt',
        category: 'shirts',
        price: 79.99,
        description: 'Lightweight linen shirt for warm weather',
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500',
        badge: 'New'
    },
    {
        id: 7,
        name: 'Cocktail Dress',
        category: 'dresses',
        price: 249.99,
        description: 'Stunning cocktail dress with modern silhouette',
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500',
        badge: null
    },
    {
        id: 8,
        name: 'Chino Pants',
        category: 'pants',
        price: 99.99,
        description: 'Versatile chino pants in premium cotton',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500',
        badge: null
    },
    {
        id: 9,
        name: 'Denim Jacket',
        category: 'jackets',
        price: 159.99,
        description: 'Classic denim jacket with modern fit',
        image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500',
        badge: 'Featured'
    },
    {
        id: 10,
        name: 'Leather Belt',
        category: 'accessories',
        price: 69.99,
        description: 'Premium leather belt with solid brass buckle',
        image: 'https://images.unsplash.com/photo-1624222247344-550fb60583f0?w=500',
        badge: null
    },
    {
        id: 11,
        name: 'Polo Shirt',
        category: 'shirts',
        price: 69.99,
        description: 'Classic polo shirt in premium pique cotton',
        image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500',
        badge: null
    },
    {
        id: 12,
        name: 'Maxi Dress',
        category: 'dresses',
        price: 189.99,
        description: 'Flowing maxi dress with elegant print',
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
        badge: 'New'
    }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartToggle = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const contactForm = document.getElementById('contactForm');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    updateCartUI();
    initializeNavigation();
    initializeNotifications();
});

// Render Products
function renderProducts(category) {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" width="320" height="400" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Filter Products
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const category = button.dataset.category;
        renderProducts(category);
    });
});

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    
    // Show cart sidebar
    cartSidebar.classList.add('active');
    
    // Visual feedback
    const button = event.target;
    button.textContent = 'Added!';
    button.style.background = 'var(--secondary-color)';
    
    setTimeout(() => {
        button.textContent = 'Add to Cart';
        button.style.background = '';
    }, 1500);
    
    // Send notification if enabled
    if (Notification.permission === 'granted') {
        setTimeout(() => {
            sendNotification(
                'Added to Cart! 🛍️',
                `${product.name} has been added to your cart.`,
                product.image
            );
        }, 500);
    }
}

// Update Cart UI
function updateCartUI() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-category">${item.category}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Save Cart
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Cart Sidebar Toggle
cartToggle.addEventListener('click', () => {
    cartSidebar.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
});

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    if (!cartSidebar.contains(e.target) && !cartToggle.contains(e.target)) {
        cartSidebar.classList.remove('active');
    }
});

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    alert(`Checkout Summary:\n\nItems: ${itemCount}\nTotal: $${total.toFixed(2)}\n\nThank you for your order!\n\nIn a production environment, this would redirect to a secure payment gateway.`);
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();
    cartSidebar.classList.remove('active');
});

// Contact Form
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Mobile Menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translateY(10px)' : '';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translateY(-10px)' : '';
});

// Navigation
function initializeNavigation() {
    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu
                navMenu.classList.remove('active');
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// PUSH NOTIFICATION SYSTEM
// ============================================

const notificationPrompt = document.getElementById('notificationPrompt');
const allowNotifications = document.getElementById('allowNotifications');
const denyNotifications = document.getElementById('denyNotifications');
const notificationToggle = document.getElementById('notificationToggle');

function initializeNotifications() {
    // Check if notifications are supported
    if (!('Notification' in window)) {
        console.log('This browser does not support notifications');
        if (notificationToggle) {
            notificationToggle.style.display = 'none';
        }
        return;
    }
    
    // Update bell button appearance based on permission
    updateNotificationButton();
    
    // Show notification prompt after 8 seconds if not shown before
    setTimeout(() => {
        if (!localStorage.getItem('notificationPromptShown')) {
            showNotificationPrompt();
        }
    }, 8000);
}

// Update notification bell button appearance
function updateNotificationButton() {
    if (!notificationToggle) return;
    
    if (Notification.permission === 'granted') {
        notificationToggle.classList.add('enabled');
        notificationToggle.title = 'Notifications enabled';
    } else if (Notification.permission === 'denied') {
        notificationToggle.classList.add('disabled');
        notificationToggle.title = 'Notifications blocked';
    } else {
        notificationToggle.title = 'Enable notifications';
    }
}

// Click handler for notification bell button
if (notificationToggle) {
    notificationToggle.addEventListener('click', () => {
        if (Notification.permission === 'granted') {
            sendNotification(
                'Notifications Active! 🔔',
                'You\'re all set to receive updates from Élégance.',
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=192'
            );
        } else if (Notification.permission === 'denied') {
            showSuccessMessage('💡 Notifications are blocked. Please enable them in your browser settings.');
        } else {
            showNotificationPrompt();
        }
    });
}

function showNotificationPrompt() {
    if (Notification.permission === 'granted' || Notification.permission === 'denied') {
        return;
    }
    
    notificationPrompt.classList.add('show');
}

// Allow Notifications Button
allowNotifications.addEventListener('click', async () => {
    try {
        const permission = await Notification.requestPermission();
        
        if (permission === 'granted') {
            notificationPrompt.classList.remove('show');
            localStorage.setItem('notificationPromptShown', 'true');
            localStorage.setItem('notificationPermission', 'granted');
            updateNotificationButton();
            showSuccessMessage('🎉 Notifications enabled! You\'ll receive updates about new arrivals and exclusive offers.');
            
            setTimeout(() => {
                sendNotification(
                    'Welcome to Élégance! 🎉',
                    'Thank you for enabling notifications. We\'ll keep you updated with our latest collections and exclusive offers.',
                    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=192'
                );
            }, 1500);
        } else {
            notificationPrompt.classList.remove('show');
            localStorage.setItem('notificationPromptShown', 'true');
            updateNotificationButton();
        }
    } catch (error) {
        console.error('Error requesting notification permission:', error);
        notificationPrompt.classList.remove('show');
    }
});

// Deny Notifications Button
denyNotifications.addEventListener('click', () => {
    notificationPrompt.classList.remove('show');
    localStorage.setItem('notificationPromptShown', 'true');
    localStorage.setItem('notificationPermission', 'denied');
});

// Send Local Notification
function sendNotification(title, body, icon) {
    if (Notification.permission === 'granted') {
        const notification = new Notification(title, {
            body: body,
            icon: icon || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=192',
            badge: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=96',
            vibrate: [200, 100, 200],
            tag: 'elegance-notification',
            requireInteraction: false,
            silent: false
        });
        
        notification.onclick = () => {
            window.focus();
            notification.close();
        };
        
        setTimeout(() => {
            notification.close();
        }, 7000);
    }
}

// Show Success Message
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'notification-success';
    successDiv.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <p>${message}</p>
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        successDiv.classList.remove('show');
        setTimeout(() => {
            successDiv.remove();
        }, 400);
    }, 6000);
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section-header, .about-text, .about-image, .contact-info, .contact-form-wrapper').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
});

// Performance: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = 'var(--shadow)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
