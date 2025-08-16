const subProductsData = {
  1: [
    { id: "1a", name: "Samsung Galaxy S25 5G Smartphone with Galaxy AI (Icyblue, 12GB RAM, 256GB Storage), Snapdragon 8 Elite, 50 MP Camera with ProVisual Engine and 4000mAh Battery", price: 74999, rating: 4.5, image: "https://m.media-amazon.com/images/I/61p3FwE31-L._SX679_.jpg" },
    { id: "1b", name: "iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Black", price: 72499, rating: 4.0, image: "https://m.media-amazon.com/images/I/61135j8fPJL._SX679_.jpg" },
    { id: "1c", name: "Samsung Galaxy Z Fold7 5G Smartphone with Galaxy AI (Silver Shadow, 12GB RAM, 256GB Storage), Ultra Sleek Design with 200MP Camera, Powerful Snapdragon 8 Elite, Google Gemini", price: 174999, rating: 4.0, image: "https://m.media-amazon.com/images/I/61x2YvxqdGL._SX679_.jpg" },
    { id: "1d", name: "Apple iPhone 15 Pro Max (512 GB) - Black Titanium", price: 85000, rating: 4.0, image: "https://m.media-amazon.com/images/I/81Os1SDWpcL._SX679_.jpg" },
    { id: "1e", name: "Vivo V60 5G (Mist Gray, 8GB RAM, 128GB Storage) ", price: 36999, rating: 4.0, image: "https://m.media-amazon.com/images/I/61eAwV+gq6L._SX679_.jpg" },
    { id: "1f", name: "Vivo Y400 5G (Olive Green, 8GB RAM, 256GB Storage)", price: 23999, rating: 3.0, image: "https://m.media-amazon.com/images/I/71ze-N4mUuL._AC_UY327_FMwebp_QL65_.jpg" },
    { id: "1g", name: "Samsung Galaxy M11 (Black, 3GB RAM, 32GB Storage", price: 12900, rating: 5.0, image: "https://m.media-amazon.com/images/I/710jkZNub3S._SX679_.jpg"},
    { id: "1h", name: "iQOO Z10 Lite 5G (Titanium Blue, 6GB RAM, 128GB Storage) | 6000 mAh Battery | Dimensity 6300 5G Processor with 433K+* AnTuTu Score | IP64 Rated & Military Grade", price: 10998, rating: 4.0, image: "https://m.media-amazon.com/images/I/617yTaz4XkL._SX679_.jpg" },
    { id: "1i", name: "POCO C71, Power Black (4GB, 64GB)", price: 6998,rating: 4.5, image: "https://m.media-amazon.com/images/I/418KcvqZKCL.jpg" },
    { id: "1j", name: "iQOO 13 5G (Legend, 16GB RAM, 512GB Storage)", price: 59998, rating: 4.5, image: "https://m.media-amazon.com/images/I/51jAxBrJCtL._SX679_.jpg" },
    { id: "1k", name: "Google Pixel 9 Pro XL (Obsidian,16GB RAM 256GB Storage)", price: 110999, rating: 5.0, image: "https://m.media-amazon.com/images/I/41gQ7BHtQ7L._SX679_.jpg" },
    { id: "1l", name: "Infinix Hot 50 5G, Vibrant Blue (8GB, 128GB)", price: 10499, rating: 4.0, image: "https://m.media-amazon.com/images/I/714L2f+gT-L._SX679_.jpg" }
    
  ],
  2:[
    { id: "2a", name: "HP 15, AMD Ryzen 3 7320U (8GB LPDDR5, 512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.639.6cm, Win 11, Office 21, Silver, 1.59kg, fc0154AU, AMD Radeon Graphics, 1080p FHD Camera Laptop", price: 29990, rating: 4.0, image: "https://m.media-amazon.com/images/I/61SHFVKs+AL._SL1500_.jpg" },
    { id: "2b", name: "Lenovo IdeaPad Slim 3 Ryzen 5 5625U 15.6 (39.6cm) FHD Thin and Light Laptop (16GB RAM/512GB SSD/ Integrated AMD Radeon Graphics/Windows 11/Office Home 2024/Grey/1.6Kg), 82XM00QDIN", price: 39990, rating: 4.5, image: "https://m.media-amazon.com/images/I/615itEeM5ZL._SX679_.jpg" },
    { id: "2c", name: "Primebook 2 Neo 2025 (New Launch) Gen 2 | 6GB RAM, 128GB UFS 2.2 Storage | MediaTek Helio G99 | Android 15 (PrimeOS 3.0) | in-Built AI | 11.6” Thin & Light | Type-C, USB, MicroSD | Gray", price: 15990, rating: 4.5, image: "https://m.media-amazon.com/images/I/713cu-sW3TL._SL1500_.jpg" },
    { id: "2d", name: "HP 15, 13th Gen Intel Core i3-1315U (12GB DDR4, 512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.6''/39.6cm, Win11, M365 Basic(1yr)* Office24, Silver, 1.59kg, fd0573TU, FHD Camera w/Shutter Lapto", price: 38490, rating: 4.0, image: "https://m.media-amazon.com/images/I/71FXHAM+jWL._SX679_.jpg" },
    { id: "2e", name: "Acer [SmartChoice Aspire Lite AMD Ryzen 5-5625U Processor, 16 GB/512 GB, Full HD, 15.6/39.62 cm, Windows 11 Home, Steel Gray, 1.59 kg, AL15-41, Metal Body, Thin and Light Laptop", price: 33990, rating: 4.0, image: "https://m.media-amazon.com/images/I/61k0gpxQwCL._SX679_.jpg" },
    { id: "2f", name: "Dell 15 Thin & Light Laptop, 13th Generation Intel Core i3-1305U Processor, 8GB DDR4 + 512GB SSD, 15.6 (39.62cm) FHD 120Hz 250 nits Display, Windows 11 + MSO'21, 12 Month McAfee, Grey, 1.69kg", price: 34990, rating: 4.0, image: "https://m.media-amazon.com/images/I/61FyHTMLQWL._SX679_.jpg" },
    { id: "2g", name: "Lenovo IdeaPad Slim 5 Ryzen 7 7735HS (16GB RAM/512GB SSD/Integrated AMD Radeon 680M Graphics/WUXGA IPS Display/13.3 (33.7cm)/Windows 11/Office Home 2024/Backlit KB/Grey/1.15Kg), 83J2000HIN Laptop", price:61900, rating: 5.0, image: "https://m.media-amazon.com/images/I/616BhYEGRHL._SX679_.jpg" },
    { id: "2h", name: "Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Midnight", price: 82890, rating: 4.0, image: "https://m.media-amazon.com/images/I/719C6bJv8jL._SL1500_.jpg" },
    { id: "2i", name: "Samsung Galaxy Book4 (Gray, 16GB RAM, 512GB SSD) | 15.6 Full HD Screen | Intel Core i5 1335U Processor | Windows 11 Home | MS Office 2021 | Fingerprint Reader | Intel Iris XE Graphics | RJ45 LAN Port", price: 51630, rating: 4.0, image: "https://m.media-amazon.com/images/I/71TwTzVcVqL._SX679_.jpg" },
    { id: "2j", name: "HP Victus Gaming Laptop, AMD Ryzen 5 5600H, AMD 4GB Radeon RX 6500M Graphics, 15.6-inch (39.6 cm), FHD, IPS, 8GB DDR4, 512GB SSD, Backlit KB, B&O (Win 11, Blue, 2.29 kg), fb0147AX, fb0184ax", price: 47961, rating: 4.5, image: "https://m.media-amazon.com/images/I/71hC42cKbsL._SX679_.jpg" } ,
    { id: "2k", name: "Dell Inspiron 3530 13th Gen Laptop, Intel Core i3-1305U, 8GB, 512GB SSD, 15.6 (39.62cm) FHD AG 120Hz 250 nits Display, Windows 11 + MSO'21 & McAfee 15 Month, Platinum Silver, Thin & Light- 1.62kg", price: 37990, rating: 5.0, image: "https://m.media-amazon.com/images/I/61ooBHpaluL._SX679_.jpg" },
    { id: "2l", name: "Acer Aspire Lite, 13th Gen, Intel Core i3-1305U, 8GB RAM, 512GB SSD, Full HD, 15.6/39.62cm, Windows 11 Home, Steel Gray, 1.59KG, AL15-53, Metal Body, 36 WHR, Thin and Light Premium Laptop", price: 32993, rating: 4.5, image: "https://m.media-amazon.com/images/I/71o7b6YJMfL._SX679_.jpg"   }
  ],
  3:[
    { id: '3a', name: "Lenovo Yoga Slim 7 Aura Edition Intel Core Ultra 7 258V,Copilot+ AI PC(32GB RAM/1TB SSD/14(35.5cm)/WUXGA OLED AI Now/47 Tops/Windows 11/Office Home 2024/1Yr ADP/Grey/1.19Kg), 83JX001MIN AI Laptop", price: 134990, rating: 4.5, image: "https://m.media-amazon.com/images/I/81aZPvpkQ0L._SX679_.jpg" },
    { id: '3b', name: "MSI Katana 15, Intel 14th Gen. i7-14650HX, 40CM QHD 165Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/NVIDIA GeForce RTX 5060, GDDR7 8GB/Black/2.4Kg) B14WFK-262IN", price: 127990, rating: 4.0, image: "https://m.media-amazon.com/images/I/51BzYoJhPkL._SL1080_.jpg" },
  ],
  4:[
    { id: "4a", name: "GoSriKi Women's Rayon Viscose Anarkali Printed Kurta with Palazzo & Dupatta", price: 779, rating: 4.0, image: "https://m.media-amazon.com/images/I/71jF7678loL._SX679_.jpg" },
    { id: '4b', name: "DAMENSCH Men Cotton Blend Regular Constant All-Degree Shirt Full Sleeve, Pique Textured, Thermoregulating Casual, Recycled Fabric Stylish Shirts", price: 1601, rating: 3.0, image: "https://m.media-amazon.com/images/I/81wgovxstvL._SY879_.jpg" },
  ],
  5:[
    { id: "5a", name: "The Alchemist by Paulo Coelho", price: 299, rating: 4.5, image: "https://m.media-amazon.com/images/I/617lxveUjYL._AC_UY327_FMwebp_QL65_.jpg" },
    { id: "5b", name: "Atomic Habits by James Clear", price: 499, rating: 4.5, image: "https://m.media-amazon.com/images/I/81F90H7hnML._AC_UY327_FMwebp_QL65_.jpg" },
  ],
  6:[
    { id: '6a', name: "new balance Men Fc Supercomp Elite Running Shoe", price: 16838, rating: 5.0, image: "https://m.media-amazon.com/images/I/71p31D2ljLL._SY695_.jpg" },
    { id: '6b', name: "adidas Men Ultraboost 5 Running Shoe", price: 12599, rating: 4.5, image: "https://m.media-amazon.com/images/I/71UDoNN1r6L._SX695_.jpg" },
  ],
  7:[
    { id: "7a", name: "Victorinox Analogue Men's Watch (Black Dial)", price: 61830, rating: 4.5, image: "https://m.media-amazon.com/images/I/71PAbqvCAZL._SX679_.jpg" },
    { id: "7b", name: "Michael Kors Stainless Steel Women's Analog Rose Dial Rose Gold Strap Watch, Mk5799", price: 22995, rating: 4.0, image: "https://m.media-amazon.com/images/I/51WAl6Wr2DL._SL1000_.jpg" },
  ],
  8: [
    { id: "4a", name: "JLab JBuds LUX ANC Smart Active Noise Cancelling Headphones - Over Ear Wireless Headphones with Microphone, 70+ H Playtime Foldable Bluetooth Earphones with Multipoint & Customisable Sound, Graphite", price: 3999, rating: 3.5, image: "https://m.media-amazon.com/images/I/515BArLM8oL._SX679_.jpg" },
    { id: "4b", name: "boAt New Launch Rockerz 650 Pro, Touch/Swipe Controls, Dolby Audio, 80Hrs Battery, 2Mics ENx, Fast Charge, App Support, Dual Pair, Bluetooth Over Ear Headphones with Mic (Iris Black)", price: 2799, rating: 4.0, image: "https://m.media-amazon.com/images/I/61-XNG5lPBL._SX679_.jpg" }
  ],
  9:[
    { id: "5a", name: "realme Buds T110 Bluetooth Truly Wireless in Ear Earbuds with mic, AI ENC for Calls, Google Fast Pair, 38 Hours Total Playback with Fast Charging and Low Latency Gaming Mode (Punk Black)", price: 1299, rating: 5.0, image: "https://m.media-amazon.com/images/I/61LKTD-YnrL._SX679_.jpg"},
    { id: "5b", name: "Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C) ​​​​​​​(White)", price: 22990, rating: 4.0, image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg" },
  ],
  10:[
    { id: "10a", name: "Lakme Eyeconic Liquid Eye Liner, Black, Long Lasting Matte Waterproof Liner - Smudge Proof, Transfer Proof Eye Makeup for 24 hrs, 4.5 ml", price: 218, rating: 4.0, image: "https://m.media-amazon.com/images/I/71E23tpD-OL._SX679_.jpg" },
    { id: "10b", name: "Maybelline New York 48-Hour Dip In Tattoo Eye Liner - Black, Smudge-proof and Heat Resistance, Waterproof Eyeliner. Maybelline 2x Hyper-condensed Carbon Black Eyeliner | 2.1 ml", price: 299, rating: 4.0, image: "https://m.media-amazon.com/images/I/413okdPeGxL._SX679_.jpg" },
  ],
  11:[
    { id: "11a", name: "Nivia Safari Football Stud for Men, PU Synthetic Leather Upper, TPU Sole, Die-Cut EVA Sockliner, Ideal for Hard & Grassy Surfaces", price: 1320, rating: 4.0, image: "https://m.media-amazon.com/images/I/715kkAhaHSL._SY695_.jpg" },
    { id: "11b", name: " Nivia Plain Encounter Football Stockings, Micro Yarn Knee Length Stockings, for Men & Women, Football Stockings, Soccer Stockings, (Black/White) Size-M", price: 149, rating: 3.0, image: "https://m.media-amazon.com/images/I/71FE0Mob7SL._SX679_.jpg" },
  ],
  12:[
    { id: "12a", name: "Little's Junior Ring | Stackable Blocks Toys For Kids | 6 Pcs Rings Multi-Colour Kids Toys | Colorful Toddler Activity Toys | Baby Toys | Motor And Reasoning Skills", price: 179, rating: 4.5, image: "https://m.media-amazon.com/images/I/61XC4-QDkKL._SX679_.jpg" },
    { id: '12b', name: 'Novo Baby Wooden Learning Educational ABCD Board for Kids, Activity Toys for Toddlers & Preschoolers | ABCD Puzzle Set | Puzzle Toys for 2 Years Old Boys & Girls (Alphabets, Numbers & Shapes)', price: 289, rating: 3.5, image: 'https://m.media-amazon.com/images/I/71xIRwI8L3L._SX679_.jpg'}
  ],
  13:[
    { id: '13a', name: "Drools Puppy Dry Dog Food Chicken and Egg, 3kg with Free 1.2kg, Total 4.2 kg Pack", price: 789, rating: 4.5, image: "https://m.media-amazon.com/images/I/616v6VY8tlL._SX679_.jpg" },
    { id: '13b', name: "Drools Absolute Dog Supplement Treat Calcium Bone Jar - 40 Pieces (600G Pack), For All Life Stages", price: 689, rating: 5.0, image: "https://m.media-amazon.com/images/I/61EyZvs-X6S._SX679_.jpg"}
  ],
  14:[
    { id: '14a', name: "Pan 40 - Strip of 15 Tablets", price: 137, rating: 3.0, image: "https://m.media-amazon.com/images/I/91+2ghWgqcL._SX679_.jpg"},
    { id: "14b", name: "Meftal-Spas - Strip of 10 Tablets", price: 44, rating:3.5, image: "https://m.media-amazon.com/images/I/812rX1x1evL._SX679_.jpg"}
  ],
  15:[
    { id: "15a", name: "LG 7 Kg, 5 Star, Direct Drive Technology, Steam Wash, 6 Motion DD, Fully-Automatic Front Load Washing Machine (FHB1207Z2M, Allergy Care, In-Built Heater, Touch Panel, Middle Black)", price: 29990, rating: 4.5, image: "https://m.media-amazon.com/images/I/71XcZiTlQuL._SY606_.jpg"},
    { id: '15b', name: "Samsung 9 kg, 5 star, AI EcoBubble, Super Speed, Wi-Fi, Hygiene Steam with Inbuilt Heater, Digital Inverter, Fully-Automatic Front Load Washing Machine (WW90DG5U24AXTL, Inox)", price: 37990, rating: 4.5, image: "https://m.media-amazon.com/images/I/71K-2giugJL._SY606_.jpg"}
  ],
  16:[
    { id: '16a', name: "Samsung 330 L, 3 Star, Convertible 5-in-1, Digital Inverter, Frost Free Double Door, WiFi Enabled Bespoke AI Refrigerator (RT34DG5A4DBXHL, Luxe Black)", price: 39490, rating: 4.5, image: "https://m.media-amazon.com/images/I/61DIrcgNQuL._SY879_.jpg" },
    { id: '16b', name: "Whirlpool 207 L 5 Star Icemagic Pro Inverter Direct-Cool Single Door Refrigerator (230 IMPRO ROY 5S INV SAPPHIRE ABYSS-Z1, Blue)", price: 18790, rating: 3.0, image: "https://m.media-amazon.com/images/I/61M4TP9WxsL._SY879_.jpg" }
  ],
  17:[
    { id: '17a', name: "Samsung 1.5 Ton 3 Star AI Inverter Smart Split AC (WiFi, Energy Saving, Voice Control, Powerful Cooling, Copper, Digital Inverter, 4 Way swing, 5 Step Convertible, BESPOKE AI AR50F18D1LHNNA)", price: 35490, rating: 3.5, image: "https://m.media-amazon.com/images/I/518jz8du8UL._SL1500_.jpg" },
    { id: '17b', name: "Panasonic 1.5 Ton 4 Star Premium Wi-Fi Inverter Smart Split AC (Matter Enabled, Higher Airflow, Copper Condenser, 7in1 Convertible, True AI, 4-Way, PM 0.1 Filter, CS/CU-NU18AKY4WX, White)", price: 40490, rating: 4.0, image: "https://m.media-amazon.com/images/I/314pWpZA15L._SY445_SX342_QL70_FMwebp_.jpg" }
  ],
  18:[
    { id: '18a', name: "Kidbea® 100% Linen Shirt & Pant Co-ord Set for Kids | Elegant & Comfortable Summer Wear | Stylish Short-Sleeve Shirt with Bow & Comfy Shorts", price: 854, rating: 3.5, image: "https://m.media-amazon.com/images/I/51-mweuyGhL._SX679_.jpg" },
    { id: '18b', name: "Lofn Unisex-Child Cotton Clothing Sets for Baby Boys & Baby Girls Printed Kids Clothing Sets - Unisex Clothing sets Half sleeve T-Shirt & Shorts Pack Of 3 (T84OR-T70WH-18-T83CP)", price: 442, rating: 4.0, image: "https://m.media-amazon.com/images/I/61lWtjIeSTL._SX679_.jpg" }
  ],
};

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productId");

const subProductGrid = document.getElementById("subProductGrid");
const subSearch = document.getElementById("subSearch");
const categoryTitle = document.getElementById("categoryTitle");
const buyModal = document.getElementById("buyModal");
const buyDetails = document.getElementById("buyDetails");
const closeBuy = document.querySelector(".close-buy");
const confirmBuy = document.getElementById("confirmBuy");

const subCartModal = document.getElementById("subCartModal");
const subCartItems = document.getElementById("subCartItems");
const subTotalPrice = document.getElementById("subTotalPrice");
const closeSubCart = document.querySelector(".close-sub-cart");
const viewSubCartBtn = document.getElementById("viewSubCartBtn");

const subs = subProductsData[productId] || [];
let filteredSubs = [...subs];
let selectedProduct = null;
let subCart = [];

function formatPrice(price) {
  return price.toLocaleString("en-IN", { minimumFractionDigits: 2 });
}

function renderSubProducts(items) {
  subProductGrid.innerHTML = "";
  items.forEach(sp => {
    const countInCart = subCart.filter(p => p.id === sp.id).length;

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${sp.image}" alt="${sp.name}">
      <h3>${sp.name}</h3>
      <p class="meta">₹${formatPrice(sp.price)}</p>
      <p class="rating">⭐ ${sp.rating || "N/A"} / 5</p>
      <div class="buttons">
        <button class="cart-btn" data-id="${sp.id}">🛒 Cart (${countInCart})</button>
        <button class="buy-btn" data-id="${sp.id}">Buy Now</button>
      </div>
    `;
    subProductGrid.appendChild(card);
  });
}

subSearch.addEventListener("input", () => {
  filteredSubs = subs.filter(sp =>
    sp.name.toLowerCase().includes(subSearch.value.toLowerCase())
  );
  renderSubProducts(filteredSubs);
});

subProductGrid.addEventListener("click", e => {
  const id = e.target.dataset.id;

  if (e.target.classList.contains("buy-btn")) {
    selectedProduct = subs.find(sp => sp.id === id);
    if (selectedProduct) {
      buyDetails.textContent = `You are buying: ${selectedProduct.name} for ₹${formatPrice(selectedProduct.price)}`;
      buyModal.style.display = "block";
    }
  }

  if (e.target.classList.contains("cart-btn")) {
    const productToAdd = subs.find(sp => sp.id === id);
    if (productToAdd) {
      subCart.push(productToAdd);
      renderSubProducts(filteredSubs); 
    }
  }
});

viewSubCartBtn.onclick = () => {
  renderSubCart();
  subCartModal.style.display = "block";
};

closeBuy.onclick = () => {
  buyModal.style.display = "none";
  selectedProduct = null;
};

confirmBuy.onclick = () => {
  if (selectedProduct) {
    alert(`Purchase confirmed for ${selectedProduct.name} at ₹${formatPrice(selectedProduct.price)}!`);
    buyModal.style.display = "none";
    selectedProduct = null;
  }
};

closeSubCart.onclick = () => subCartModal.style.display = "none";

subCartItems.addEventListener("click", e => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    subCart.splice(index, 1);
    renderSubCart();
    renderSubProducts(filteredSubs); 
  }
});

window.onclick = e => {
  if (e.target === buyModal) {
    buyModal.style.display = "none";
    selectedProduct = null;
  }
  if (e.target === subCartModal) {
    subCartModal.style.display = "none";
  }
};

function renderSubCart() {
  subCartItems.innerHTML = "";
  let total = 0;

  subCart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} - ₹${formatPrice(item.price)}</span>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    subCartItems.appendChild(li);
    total += item.price;
  });

  subTotalPrice.textContent = `Total: ₹${formatPrice(total)}`;
}

renderSubProducts(subs);