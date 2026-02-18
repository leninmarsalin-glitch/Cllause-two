// ============================================================
// FIREBASE + CLOUDINARY CONFIGURATION
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLldz-KWw-Wo6Qbl--N0aE78eSg-u-qMI",
  authDomain: "apparel-pwa.firebaseapp.com",
  projectId: "apparel-pwa",
  storageBucket: "apparel-pwa.firebasestorage.app",
  messagingSenderId: "715697643204",
  appId: "1:715697643204:web:f6fb924b44ddc3a4cc3391"
};

const CLOUDINARY_CLOUD_NAME = "dylbupklz";
const CLOUDINARY_UPLOAD_PRESET = "apparel_uploads";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ============================================================
// GLOBAL STATE
// ============================================================
let products = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';

// ============================================================
// CLOUDINARY IMAGE UPLOAD
// ============================================================
async function uploadImageToCloudinary(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
    { method: 'POST', body: formData }
  );

  if (!response.ok) throw new Error('Image upload failed');
  const data = await response.json();
  return data.secure_url; // This is the image URL we save in Firebase
}

// ============================================================
// FIREBASE - LOAD PRODUCTS
// ============================================================
async function loadProductsFromFirebase() {
  const grid = document.getElementById('productsGrid');
  if (grid) grid.innerHTML = '<p style="text-align:center;padding:2rem;">Loading products...</p>';

  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });

    if (products.length === 0) {
      if (grid) grid.innerHTML = '<p style="text-align:center;padding:2rem;">No products yet. Add your first product!</p>';
    } else {
      renderProducts(products);
    }
    updateFilterCounts();
  } catch (error) {
    console.error("Error loading products:", error);
    if (grid) grid.innerHTML = '<p style="text-align:center;padding:2rem;color:red;">Error loading products. Please refresh.</p>';
  }
}

// ============================================================
// FIREBASE - ADD PRODUCT
// ============================================================
async function addProductToFirebase(productData) {
  try {
    await addDoc(collection(db, "products"), productData);
    await loadProductsFromFirebase();
    return true;
  } catch (error) {
    console.error("Error adding product:", error);
    return false;
  }
}

// ============================================================
// FIREBASE - DELETE PRODUCT
// ============================================================
async function deleteProductFromFirebase(productId) {
  try {
    await deleteDoc(doc(db, "products", productId));
    await loadProductsFromFirebase();
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    return false;
  }
}

// ============================================================
// RENDER PRODUCTS
// ============================================================
function renderProducts(productsToShow) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = currentFilter === 'all'
    ? productsToShow
    : productsToShow.filter(p => p.category === currentFilter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="text-align:center;padding:2rem;">No products in this category yet.</p>';
    return;
  }

  grid.innerHTML = filtered.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image">
        <img 
          src="${product.image}" 
          alt="${product.name}"
          style="width:100%;height:100%;object-fit:cover;"
          onload="this.style.opacity='1'"
          onerror="this.src='https://via.placeholder.com/400x500?text=No+Image'"
        />
        <div class="product-overlay">
          <button class="quick-view-btn" onclick="window.addToCart('${product.id}')">Add to Cart</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description || ''}</p>
        <div class="product-footer">
          <span class="product-price">₹${parseFloat(product.price).toLocaleString('en-IN')}</span>
          <button class="add-to-cart" onclick="addToCart('${product.id}')">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// FILTER PRODUCTS
// ============================================================
function updateFilterCounts() {
  const categories = ['shirts', 'dresses', 'pants', 'jackets', 'accessories'];
  const allBtn = document.querySelector('[data-category="all"]');
  if (allBtn) allBtn.textContent = `All (${products.length})`;

  categories.forEach(cat => {
    const btn = document.querySelector(`[data-category="${cat}"]`);
    if (btn) {
      const count = products.filter(p => p.category === cat).length;
      btn.textContent = `${cat.charAt(0).toUpperCase() + cat.slice(1)} (${count})`;
    }
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.category;
    renderProducts(products);
  });
});

// ============================================================
// CART FUNCTIONS
// ============================================================
window.addToCart = function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
  showCartSidebar();
}

function updateCartUI() {
  const cartCount = document.getElementById('cartCount');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) cartCount.textContent = totalItems;

  if (cartItems) {
    if (cart.length === 0) {
      cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
      cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" width="60" height="60" style="object-fit:cover;border-radius:8px;">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>₹${parseFloat(item.price).toLocaleString('en-IN')} × ${item.quantity}</p>
          </div>
          <button onclick="removeFromCart('${item.id}')" style="background:none;border:none;cursor:pointer;font-size:1.2rem;">×</button>
        </div>
      `).join('');
    }
  }

  if (cartTotal) {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
  }
}

window.removeFromCart = function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function showCartSidebar() {
  document.getElementById('cartSidebar')?.classList.add('active');
}

document.getElementById('cartToggle')?.addEventListener('click', showCartSidebar);
document.getElementById('closeCart')?.addEventListener('click', () => {
  document.getElementById('cartSidebar')?.classList.remove('active');
});

// ============================================================
// ADMIN PANEL - ADD PRODUCT UI
// ============================================================
function createAdminPanel() {
  const panel = document.createElement('div');
  panel.id = 'adminPanel';
  panel.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.8); z-index: 99999;
    display: flex; align-items: center; justify-content: center;
  `;

  panel.innerHTML = `
    <div style="background:white; border-radius:16px; padding:2rem; width:90%; max-width:500px; max-height:90vh; overflow-y:auto;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
        <h2 style="font-family:'Cormorant Garamond',serif; font-size:1.8rem;">Add New Product</h2>
        <button onclick="document.getElementById('adminPanel').remove()" style="background:none;border:none;font-size:1.5rem;cursor:pointer;">×</button>
      </div>
      
      <div style="margin-bottom:1rem;">
        <label style="display:block;margin-bottom:0.5rem;font-weight:600;">Product Name *</label>
        <input id="adminName" type="text" placeholder="e.g. Blue Silk Saree" style="width:100%;padding:0.8rem;border:1px solid #ddd;border-radius:8px;font-size:1rem;">
      </div>

      <div style="margin-bottom:1rem;">
        <label style="display:block;margin-bottom:0.5rem;font-weight:600;">Category *</label>
        <select id="adminCategory" style="width:100%;padding:0.8rem;border:1px solid #ddd;border-radius:8px;font-size:1rem;">
          <option value="">Select category</option>
          <option value="shirts">Shirts</option>
          <option value="dresses">Dresses</option>
          <option value="pants">Pants</option>
          <option value="jackets">Jackets</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      <div style="margin-bottom:1rem;">
        <label style="display:block;margin-bottom:0.5rem;font-weight:600;">Price (₹) *</label>
        <input id="adminPrice" type="number" placeholder="e.g. 1499" style="width:100%;padding:0.8rem;border:1px solid #ddd;border-radius:8px;font-size:1rem;">
      </div>

      <div style="margin-bottom:1rem;">
        <label style="display:block;margin-bottom:0.5rem;font-weight:600;">Description</label>
        <textarea id="adminDesc" placeholder="Short description of the product" style="width:100%;padding:0.8rem;border:1px solid #ddd;border-radius:8px;font-size:1rem;height:80px;resize:vertical;"></textarea>
      </div>

      <div style="margin-bottom:1.5rem;">
        <label style="display:block;margin-bottom:0.5rem;font-weight:600;">Product Image *</label>
        <input id="adminImage" type="file" accept="image/*" style="width:100%;padding:0.8rem;border:1px solid #ddd;border-radius:8px;font-size:1rem;">
        <p style="font-size:0.8rem;color:#888;margin-top:0.3rem;">Image will be automatically compressed and uploaded</p>
      </div>

      <button id="adminSubmit" onclick="submitProduct()" style="
        width:100%; padding:1rem; background:#1a1a1a; color:white;
        border:none; border-radius:8px; font-size:1rem; font-weight:600;
        cursor:pointer; transition:background 0.3s;
      ">Add Product</button>
      
      <p id="adminStatus" style="text-align:center;margin-top:1rem;color:#666;"></p>
    </div>
  `;

  document.body.appendChild(panel);
}

window.submitProduct = async function submitProduct() {
  const name = document.getElementById('adminName')?.value.trim();
  const category = document.getElementById('adminCategory')?.value;
  const price = document.getElementById('adminPrice')?.value;
  const description = document.getElementById('adminDesc')?.value.trim();
  const imageFile = document.getElementById('adminImage')?.files[0];
  const statusEl = document.getElementById('adminStatus');
  const submitBtn = document.getElementById('adminSubmit');

  if (!name || !category || !price || !imageFile) {
    if (statusEl) statusEl.textContent = '⚠️ Please fill all required fields and select an image.';
    return;
  }

  if (submitBtn) submitBtn.disabled = true;
  if (statusEl) statusEl.textContent = '⏳ Uploading image...';

  try {
    const imageUrl = await uploadImageToCloudinary(imageFile);
    if (statusEl) statusEl.textContent = '⏳ Saving product...';

    const success = await addProductToFirebase({
      name,
      category,
      price: parseFloat(price),
      description,
      image: imageUrl,
      createdAt: new Date().toISOString()
    });

    if (success) {
      if (statusEl) statusEl.textContent = '✅ Product added successfully!';
      setTimeout(() => document.getElementById('adminPanel')?.remove(), 1500);
    } else {
      if (statusEl) statusEl.textContent = '❌ Failed to save product. Try again.';
      if (submitBtn) submitBtn.disabled = false;
    }
  } catch (error) {
    console.error(error);
    if (statusEl) statusEl.textContent = '❌ Upload failed. Check your internet and try again.';
    if (submitBtn) submitBtn.disabled = false;
  }
}

// Add admin button (bottom left, only visible to you)
function addAdminButton() {
  const btn = document.createElement('button');
  btn.textContent = '+ Add Product';
  btn.style.cssText = `
    position: fixed; bottom: 20px; left: 20px; z-index: 9999;
    background: #1a1a1a; color: white; border: none;
    padding: 0.8rem 1.5rem; border-radius: 50px;
    font-size: 0.9rem; font-weight: 600; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  `;
  btn.onclick = createAdminPanel;
  document.body.appendChild(btn);
}

// ============================================================
// NOTIFICATIONS
// ============================================================
document.getElementById('allowNotifications')?.addEventListener('click', async () => {
  const permission = await Notification.requestPermission();
  document.getElementById('notificationPrompt')?.classList.remove('show');
  if (permission === 'granted') {
    new Notification('Élégance', { body: 'You\'ll now receive updates on new arrivals!' });
  }
});

document.getElementById('denyNotifications')?.addEventListener('click', () => {
  document.getElementById('notificationPrompt')?.classList.remove('show');
});

document.getElementById('notificationToggle')?.addEventListener('click', async () => {
  if (Notification.permission === 'default') {
    document.getElementById('notificationPrompt')?.classList.add('show');
  } else if (Notification.permission === 'granted') {
    new Notification('Élégance', { body: 'Notifications are already enabled!' });
  }
});

// ============================================================
// CONTACT FORM
// ============================================================
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  e.target.reset();
});

// ============================================================
// SMOOTH SCROLL & NAV
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('menuToggle')?.addEventListener('click', () => {
  document.getElementById('navMenu')?.classList.toggle('open');
});

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadProductsFromFirebase();
  updateCartUI();
  addAdminButton();

  // Show notification prompt after 3 seconds
  setTimeout(() => {
    if (Notification.permission === 'default') {
      document.getElementById('notificationPrompt')?.classList.add('show');
    }
  }, 3000);
});
