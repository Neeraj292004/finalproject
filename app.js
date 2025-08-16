const products = [
  { id: 1, name: "Smartphones",image: "https://www.bing.com/th/id/OIP.SvOHHOHbhazWOPPejadOTgHaEl?w=284&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2" },
  { id: 2, name: "Laptop's",  image: "https://www.bing.com/th/id/OIP.1Yn781JF4tspKbsRPAsVRwHaHa?w=210&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2" },
  { id: 3, name: "Gaming Laptop's", image: "https://th.bing.com/th/id/OIP.fpeRw5yXCNAM4xYgZ3r2MQHaE2?w=257&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
  { id: 4, name: "Clothes", image:"https://th.bing.com/th/id/OIP.uzfgttZWwQtEXaH5w_xkuAHaJQ?w=188&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
  { id: 5, name: "Books", image: "https://th.bing.com/th/id/OIP.DapttvWp7lknCFEGk5x8igHaE7?w=296&h=184&c=7&r=0&o=5&dpr=1.2&pid=1.7" },
  { id: 6, name: "Shoes", image: "https://th.bing.com/th/id/OIP.T544Qdf-lY8u-zm_69RyDwAAAA?w=299&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
  { id: 7, name: "Watches", image: "https://static.vecteezy.com/system/resources/thumbnails/042/729/205/small_2x/a-collection-of-stylish-wristwatches-arranged-in-a-pattern-showcases-the-elegance-of-timepieces-photo.jpg" },
  { id: 8, name: "Headphones", image: "https://th.bing.com/th/id/OIP.TYwMguRbNhiZaN53NBJIlQHaE8?w=273&h=182&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
  { id: 9, name: "Buds", image: "https://th.bing.com/th/id/OIP.oCkT99j3aaQabe4zncRgrgHaFj?w=201&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3 "},
  { id: 10, name: "Beauty Products", image: "https://th.bing.com/th/id/OIP.jAXHjcCOpXFyXH-EvEY3owHaEJ?w=316&h=183&c=7&r=0&o=5&dpr=1.2&pid=1.7" },
  { id: 11, name: "Sports Equipment", image: "https://th.bing.com/th/id/OIP.ahDGZRaxaDRRi4TWEVKOEQHaH7?w=157&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
  { id: 12, name: "Toys", image: "https://th.bing.com/th?q=Spider-Man+Toys&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.2&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" },
  { id: 13, name: "Pet Supplies", image: "https://th.bing.com/th/id/OIP.r_3692DzCQ0LDii0im2MjwAAAA?w=279&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
  { id: 14, name: "Medicines", image: "https://th.bing.com/th/id/OIP.3PeQWXIameMst1D9eweDJgHaE6?w=277&h=183&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
  { id: 15, name: "Washing Machines", image: "https://th.bing.com/th/id/OIP.to7KsqffixcbCjbhsKGCMwHaI-?w=150&h=182&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
  { id: 16, name: "Refrigerators", image: "https://th.bing.com/th/id/OIP.mKmppE0bON6Rdkp-TY67rQHaLD?w=189&h=283&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" }, 
  { id: 17, name: "Air Conditioners", image: "https://th.bing.com/th/id/OIP.bspCFgpF40G3zDT-ObpHRwHaE0?w=325&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
  { id: 18, name: "Kid's Clothes", image: "https://th.bing.com/th/id/OIP.PJ06Nx_sMw9RqhSnmWSWowHaJC?w=161&h=196&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3" },
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.querySelector(".search-input");
const sortBtn = document.getElementById("sortBtn");
const cartCount = document.getElementById("cartCount");
const cartIcon = document.getElementById("cartIcon");
const cartModal = document.getElementById("cartModal");
const closeCart = document.querySelector(".close-cart");
const cartItemsList = document.getElementById("cartItems");
const totalPriceDisplay = document.getElementById("totalPrice");
const sortSelect = document.querySelector(".sort-select");
const languageSelect = document.getElementById("languageSelect");


let cart = [];
let originalProducts = [...products];
let currentFiltered = [...products];

function formatPrice(price) {
  return price.toLocaleString("en-IN", { minimumFractionDigits: 2 });
}
function renderProducts(items) {
  productGrid.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="buttons">
        <button class="view-btn" data-id="${product.id}">View</button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  currentFiltered = products.filter(p =>
    p.name.toLowerCase().includes(query)
  );
  applySort();
});

sortBtn.addEventListener("click", () => {
  sortSelect.style.display = sortSelect.style.display === "none" ? "block" : "none";
});
sortSelect.addEventListener("change", applySort);

function applySort() {
  let sorted = [...currentFiltered];
  switch (sortSelect.value) {
    case "low-high": sorted.sort((a, b) => a.price - b.price); break;
    case "high-low": sorted.sort((a, b) => b.price - a.price); break;
    case "alphabetical": sorted.sort((a, b) => a.name.localeCompare(b.name)); break;
    default:
      sorted = [...originalProducts].filter(p =>
        p.name.toLowerCase().includes(searchInput.value.toLowerCase())
      );
  }
  renderProducts(sorted);
}

productGrid.addEventListener("click", e => {
  if (e.target.classList.contains("view-btn")) {
    const productId = e.target.dataset.id;
    window.location.href = `category.html?productId=${productId}`;
  }
});

cartIcon.addEventListener("click", () => {
  renderCartSummary();
  cartModal.style.display = "block";
});

closeCart.onclick = () => cartModal.style.display = "none";

window.onclick = e => {
  if (e.target == cartModal) cartModal.style.display = "none";
};

function renderCartSummary() {
  cartItemsList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} - ₹${formatPrice(item.price)}</span>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    cartItemsList.appendChild(li);
    total += item.price;
  });

  totalPriceDisplay.textContent = `Total: ₹${formatPrice(total)}`;
}

cartItemsList.addEventListener("click", e => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    cart.splice(index, 1);
    cartCount.textContent = cart.length;
    renderCartSummary();
  }
});
languageSelect.addEventListener("change", () => {
  const selectedLang = languageSelect.value;
  alert(`Language switched to: ${selectedLang}`);
 
});

document.getElementById("loginBtn").addEventListener("click", () => {
  alert("Login feature coming soon!");
 
});
renderProducts(products);