// Product Data
const products = [
  {
    id: 1,
    name: "Classic Oxford Shirt",
    category: "shirts",
    price: 89.99,
    image: "images/imagesdenim-jacket.jpg",
    description: "Premium cotton Oxford shirt with impeccable tailoring"
  },
  {
    id: 2,
    name: "Silk Evening Dress",
    category: "dresses",
    price: 299.99,
    image: "images/imagesleather-belt.jpg",
    description: "Elegant silk dress perfect for special occasions"
  }
];

// Render products
const grid = document.getElementById("productGrid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <span>₹${product.price}</span>
  `;

  grid.appendChild(card);
});
