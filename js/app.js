/////////////start  Slider //////////////////////////////////////////
const images = document.querySelectorAll('.slider-image');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let currentIndex = 0;

function updateSlider() {
    images.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none';
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    updateSlider();
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    updateSlider();
});

nextBtn.addEventListener('click', showNextImage);


setInterval(showNextImage, 3000);

updateSlider();
// ////////////////////////////end slider////////////////////////////////

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Data for products 
const products = [ 
    { id: 1, name: "Casual Suit blue", category: "clothes", price: "$100", image: "./imgs/kajwal-1.jpg", Quantity: "50", description: "Rianmond Men's Solid Short Sleeve Walking Suit 3 Colors" },
    { id: 2, name: "Casual Suit brown", category: "clothes", price: "$100", image: "./imgs/kajwal-2.jpg", Quantity: "30", description: "Rianmond Men's Solid Short Sleeve Walking Suit 1 Color" },
    { id: 3, name: "Casual Suit green", category: "clothes", price: "$100", image: "./imgs/kajwal-3.jpg", Quantity: "40", description: "Rianmond Men's Solid Short Sleeve Walking Suit 1 Color" },
    { id: 4, name: "Men's Shirt gray", category: "clothes", price: "$70", image: "./imgs/kajwal-4.jpg", Quantity: "20", description: "A lightweight, breathable shirt with a unique crinkled texture and a relaxed, comfortable fit. Designed with a lapel collar and button-down front for effortless everyday style." },
    { id: 5, name: "Classic Shoes brown", category: "shoes", price: "$60", image: "./imgs/accessories-1.jpg", Quantity: "25", description: "A classic men's leather dress shoe with a refined shape, closed lacing, and a smooth polished finish, perfect for formal occasions and professional settings." },
    { id: 6, name: "Classic Shoes black", category: "shoes", price: "$60", image: "./imgs/accessories-2.jpg", Quantity: "15", description: "A classic men's leather dress shoe with a refined shape, closed lacing, and a smooth polished finish, perfect for formal occasions and professional settings." },
    { id: 7, name: "Loafers Shoes black", category: "shoes", price: "$70", image: "./imgs/accessories-3.jpg", Quantity: "35", description: "A classic men's leather dress shoe with a refined shape, closed lacing, and a smooth polished finish, perfect for formal occasions and professional settings." },
    { id: 8, name: "Pocket Shirt black", category: "makeup", price: "$80", image: "./imgs/classic-1.jpg", Quantity: "100", description: "Stay effortlessly stylish with this relaxed-fit long-sleeve shirt, crafted for comfort and versatility. Made from lightweight, breathable fabric — perfect for layering or wearing on its own." },
    { id: 9, name: "Pocket Shirt white", category: "makeup", price: "$80", image: "./imgs/classic-2.jpg", Quantity: "80", description: "Stay effortlessly stylish with this relaxed-fit long-sleeve shirt, crafted for comfort and versatility. Made from lightweight, breathable fabric — perfect for layering or wearing on its own." },
    { id: 10, name: "Pocket Shirt beige", category: "makeup", price: "$80", image: "./imgs/classic-3.jpg", Quantity: "60", description: "Stay effortlessly stylish with this relaxed-fit long-sleeve shirt, crafted for comfort and versatility. Made from lightweight, breathable fabric — perfect for layering or wearing on its own." },
    { id: 11, name: "Wool Blazer black", category: "makeup", price: "$120", image: "./imgs/classic-4.jpg", Quantity: "90", description: "This is a single-breasted, two-button blazer with notch lapels and patch pockets, styled in a smart-casual design suitable for both formal and semi-formal occasions." },
    { id: 12, name: "Men's Shirt blue", category: "clothes", price: "$70", image: "./imgs/kajwal-5.jpg", Quantity: "10", description: "A lightweight, breathable shirt with a unique crinkled texture and a relaxed, comfortable fit. Designed with a lapel collar and button-down front for effortless everyday style." },
    { id: 13, name: "Men's Shirt pistachio", category: "clothes", price: "$70", image: "./imgs/kajwal-6.jpg", Quantity: "60", description: "A lightweight, breathable shirt with a unique crinkled texture and a relaxed, comfortable fit. Designed with a lapel collar and button-down front for effortless everyday style." },
    { id: 14, name: "Men's Shirt light-green", category: "clothes", price: "$70", image: "./imgs/kajwal-7.jpg", Quantity: "80", description: "A lightweight, breathable shirt with a unique crinkled texture and a relaxed, comfortable fit. Designed with a lapel collar and button-down front for effortless everyday style." },
    { id: 15, name: "Wool Blazer havan", category: "makeup", price: "$120", image: "./imgs/classic-5.jpg", Quantity: "50", description: "This is a single-breasted, two-button blazer with notch lapels and patch pockets, styled in a smart-casual design suitable for both formal and semi-formal occasions." },
    { id: 16, name: "Loafers Shoes brown", category: "shoes", price: "$70", image: "./imgs/accessories-4.jpg", Quantity: "20", description: "A classic men's leather dress shoe with a refined shape, closed lacing, and a smooth polished finish, perfect for formal occasions and professional settings." },
    { id: 17, name: "Men's Shirt baby-pink", category: "clothes", price: "$70", image: "./imgs/kajwal-8.jpg", Quantity: "40", description: "A lightweight, breathable shirt with a unique crinkled texture and a relaxed, comfortable fit. Designed with a lapel collar and button-down front for effortless everyday style." },
    { id: 18, name: "Wool Blazer gray", category: "makeup", price: "$120", image: "./imgs/classic-6.jpg", Quantity: "30", description: "This is a single-breasted, two-button blazer with notch lapels and patch pockets, styled in a smart-casual design suitable for both formal and semi-formal occasions." },
    { id: 19, name: "Polo Shirt&Wide Leg Pant off-white", category: "clothes", price: "$180", image: "./imgs/kajwal-9.jpg", Quantity: "50", description: "A breathable, lightweight knit polo made for effortless summer style. Soft textured fabric with a relaxed fit and open collar for a vintage-inspired, casual look." },
    { id: 20, name: "Polo Shirt navy", category: "clothes", price: "$90", image: "./imgs/kajwal-10.jpg", Quantity: "200", description: "Add a vintage touch to your wardrobe with this thickened polo shirt, designed for both warmth and standout style. Featuring a structured lapel collar and button-up front, it blends retro charm with modern comfort" },
    { id: 21, name: "Polo Shirt white", category: "clothes", price: "$90", image: "./imgs/kajwal-11.jpg", Quantity: "30", description: "Add a vintage touch to your wardrobe with this thickened polo shirt, designed for both warmth and standout style. Featuring a structured lapel collar and button-up front, it blends retro charm with modern comfort" },
    { id: 22, name: "Polo Shirt black", category: "clothes", price: "$90", image: "./imgs/kajwal-12.jpg", Quantity: "60", description: "Add a vintage touch to your wardrobe with this thickened polo shirt, designed for both warmth and standout style. Featuring a structured lapel collar and button-up front, it blends retro charm with modern comfort" },
    { id: 23, name: "Polo Shirt gray", category: "clothes", price: "$90", image: "./imgs/kajwal-13.jpg", Quantity: "25", description: "Add a vintage touch to your wardrobe with this thickened polo shirt, designed for both warmth and standout style. Featuring a structured lapel collar and button-up front, it blends retro charm with modern comfort" },
    { id: 24, name: "Casual Jaket white", category: "clothes", price: "$90", image: "./imgs/kajwal-14.jpg", Quantity: "15", description: "This is a lightweight zip-up bomber jacket with a shirt-style collar, ribbed cuffs and hem, and zippered side pockets, ideal for casual or smart-casual wear." },
    { id: 25, name: "Classic Shoes black", category: "shoes", price: "$60", image: "./imgs/accessories-5.jpg", Quantity: "20", description: "A classic men's leather dress shoe with a refined shape, closed lacing, and a smooth polished finish, perfect for formal occasions and professional settings." },
    { id: 26, name: "Watch brown&black", category: "shoes", price: "$100", image: "./imgs/accessories-6.jpg", Quantity: "35", description: "Elevate your everyday style with this timeless Leather Brown Watch. Designed for the modern man who values both elegance and function, this watch features a sleek stainless steel case paired with a rich brown genuine leather strap for a classic, versatile look. The minimalist dial adds a touch of sophistication, making it the perfect accessory for both formal and casual occasions. Whether you're at the office or out for the weekend, this watch ensures you stay on time — in style." },
    { id: 27, name: "Watch brown&white", category: "shoes", price: "$100", image: "./imgs/accessories-7.jpg", Quantity: "50", description: "Elevate your everyday style with this timeless Leather Brown Watch. Designed for the modern man who values both elegance and function, this watch features a sleek stainless steel case paired with a rich brown genuine leather strap for a classic, versatile look. The minimalist dial adds a touch of sophistication, making it the perfect accessory for both formal and casual occasions. Whether you're at the office or out for the weekend, this watch ensures you stay on time — in style." },
    { id: 28, name: "Wide Vintage Men's belt brown", category: "shoes", price: "$50", image: "./imgs/accessories-8.jpg", Quantity: "10", description: "Add a timeless touch to your outfit with this Wide Vintage Men's Belt — a perfect blend of rugged style and classic elegance. Crafted from premium genuine leather, this belt features a wide design that offers both durability and bold presence. The aged finish and vintage metal buckle enhance its retro charm, making it an ideal accessory for both casual and smart-casual looks. Whether paired with jeans or chinos, this belt delivers unmatched style and comfort for the modern gentleman." },
    { id: 29, name: "Business Suit beige", category: "makeup", price: "$240", image: "./imgs/classic-7.jpg", Quantity: "40", description: "A sleek and modern camel suit designed for sharp, confident looks. Made from a lightweight wool blend for all-day comfort and breathability." },
    { id: 30, name: "Business Suit navy", category: "makeup", price: "$220", image: "./imgs/classic-8.jpg", Quantity: "70", description: "A classic men's suit featuring a tailored fit, notch lapel blazer with two buttons, matching trousers, and structured shoulders, suitable for business or formal events." },
    { id: 31, name: "Business Suit gray", category: "makeup", price: "$260", image: "./imgs/classic-9.jpg", Quantity: "90", description: "A classic men's suit featuring a tailored fit, notch lapel blazer with two buttons, matching trousers, and structured shoulders, suitable for business or formal events." },
    { id: 32, name: "Business Suit baby-blue", category: "makeup", price: "$250", image: "./imgs/classic-10.png", Quantity: "100", description: "A classic men's suit designed for formal occasions, featuring a sharp tailored fit, structured blazer with peak or notch lapels, and coordinating trousers, offering an elegant and sophisticated look." },
    { id: 33, name: "Casual Jacket green", category: "clothes", price: "$110", image: "./imgs/kajwal-15.jpg", Quantity: "25", description: "This is a lightweight zip-up bomber jacket with a shirt-style collar, ribbed cuffs and hem, and zippered side pockets, ideal for casual or smart-casual wear." },
    { id: 34, name: "Casual Jacket gray", category: "clothes", price: "$110", image: "./imgs/kajwal-16.jpg", Quantity: "45", description: "This is a lightweight zip-up bomber jacket with a shirt-style collar, ribbed cuffs and hem, and zippered side pockets, ideal for casual or smart-casual wear." },
    { id: 35, name: "Wide Vintage Men's belt white", category: "shoes", price: "$50", image: "./imgs/accessories-9.jpg", Quantity: "30", description: "Add a timeless touch to your outfit with this Wide Vintage Men's Belt — a perfect blend of rugged style and classic elegance. Crafted from premium genuine leather, this belt features a wide design that offers both durability and bold presence. The aged finish and vintage metal buckle enhance its retro charm, making it an ideal accessory for both casual and smart-casual looks. Whether paired with jeans or chinos, this belt delivers unmatched style and comfort for the modern gentleman." },
    { id: 36, name: "Watch black&white", category: "shoes", price: "$130", image: "./imgs/accessories-10 (1).png", Quantity: "60", description: "Elevate your everyday style with this timeless Leather Brown Watch. Designed for the modern man who values both elegance and function, this watch features a sleek stainless steel case paired with a rich brown genuine leather strap for a classic, versatile look. The minimalist dial adds a touch of sophistication, making it the perfect accessory for both formal and casual occasions. Whether you're at the office or out for the weekend, this watch ensures you stay on time — in style." },
    { id: 37, name: "Business Suit white", category: "makeup", price: "$240", image: "./imgs/classic-11.png", Quantity: "80", description: "A classic men's suit featuring a tailored fit, notch lapel blazer with two buttons, matching trousers, and structured shoulders, suitable for business or formal events." },
    { id: 38, name: "Business Suit gray", category: "makeup", price: "$230", image: "./imgs/classic-12.png", Quantity: "70", description: "A classic men's suit featuring a tailored fit, notch lapel blazer with two buttons, matching trousers, and structured shoulders, suitable for business or formal events." },
    { id: 39, name: "Watch black&black", category: "shoes", price: "$130", image: "./imgs/accessories-10 (2).png", Quantity: "25", description: "Elevate your everyday style with this timeless Leather Brown Watch. Designed for the modern man who values both elegance and function, this watch features a sleek stainless steel case paired with a rich brown genuine leather strap for a classic, versatile look. The minimalist dial adds a touch of sophistication, making it the perfect accessory for both formal and casual occasions. Whether you're at the office or out for the weekend, this watch ensures you stay on time — in style." },
    { id: 40, name: "Casual Jacket black", category: "clothes", price: "$110", image: "./imgs/kajwal-17.jpg", Quantity: "35", description: "This is a lightweight zip-up bomber jacket with a shirt-style collar, ribbed cuffs and hem, and zippered side pockets, ideal for casual or smart-casual wear." }
    ];
  // //////////////////////////////cart count///////////////////////////////////////////////////////////// 
  let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0; 
  const cartCountElement = document.getElementById('cart-count'); 
  if (cartCount > 0) { 
    cartCountElement.style.display = "block"; 
    cartCountElement.textContent = cartCount; 
  } 
// /////////////////////category//////////////////////////
  const renderProducts = (category) => { 

    const productList = document.getElementById('product-list'); 
    productList.innerHTML = "";  
  

    const filteredProducts = category === "all" ? products : products.filter(product => product.category === category); 
  
    
    filteredProducts.forEach(product => { 

        const productCard = document.createElement('div'); 
        productCard.classList.add('product-card'); 
  
        productCard.innerHTML =  
          ` <img src="${product.image}" alt="${product.name}"> 
            <h4>${product.name}</h4> 
            <p>${product.price}</p> 
            <div class="button-containerr"> 
            <button class="add-to-cart">Add to Cart</button> 
            <button class="View-Details">View Details</button> 
            </div>`
            ; 
      
      
      productList.appendChild(productCard); 

      /////////////////  move to page view detail ///////////////////////////
      const viewDetailsButtons = document.querySelectorAll('.View-Details'); 
      viewDetailsButtons.forEach((button, index) => { 
      button.addEventListener('click', () => {  
      const productData = products[index]; 
      localStorage.setItem('selectedProduct', JSON.stringify(productData)); 
      window.location.href = './product-details.html'; 
      }); 
      }); 
}); 
// ////////////////////////////add to cart /////////////////////////////////
    const addToCartButtons = document.querySelectorAll('.add-to-cart'); 

    addToCartButtons.forEach(button => { 
    button.addEventListener('click', (event) => { 
      const productId = parseInt(event.target.closest('.product-card').dataset.id); 
      const product = products.find(p => p.id === productId); 

    
    let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0; 
    cartCount++; 
    localStorage.setItem('cartCount', cartCount); 

    
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; 
    cartItems.push(product); 
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); 

  
    const cartCountElement = document.getElementById('cart-count'); 
    cartCountElement.style.display = "block"; 
    cartCountElement.textContent = cartCount; 

    console.log("Product added to cart:", product); 
  }); 
  }); 

}; 

// Event listeners for category buttons 
  const categoryButtons = document.querySelectorAll('.category-btn'); 
  categoryButtons.forEach(button => { 
    button.addEventListener('click', () => { 
      const category = button.dataset.category; 
      renderProducts(category); 
  }); 
  }); 

// Default display (All products) 
  renderProducts('all'); 

/////////// log in ///////////////////////////////////////////////////////////// 
document.addEventListener('DOMContentLoaded', () => { 
    const loginBtn = document.getElementById('login-btn'); 
    const userInfo = document.getElementById('user-info'); 

    const username = localStorage.getItem('username'); 

    if (username) { 
        userInfo.innerHTML =  
          ` <span>  Welcome  ${username}   </span> 
            <button id="logout-btn">Log Out</button> `
        ; 

        document.getElementById('logout-btn').addEventListener('click', () => { 
            localStorage.removeItem('username'); 
            window.location.reload();  
        }); 
    } else { 
        loginBtn.addEventListener('click', () => { 
            window.location.href = '../login.html'; 
        }); 
    } 
});  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// ////////////////add product to cart ///////////////////////////////////////////////////////////////////// 
// عند إضافة منتج إلى الكارت: 
const addToCart = (product) => { 
  let cart = JSON.parse(localStorage.getItem("cart")) || []; 
   
  // تحقق إذا كان المنتج موجودًا بالفعل 
  const existingProduct = cart.find(item => item.id === product.id); 
   
  if (existingProduct) { 
    existingProduct.quantity += 1; // زيادة الكمية إذا كان المنتج موجودًا 
  } else { 
    cart.push({ ...product, quantity: 1 }); // إضافة المنتج الجديد 
  } 
   
  localStorage.setItem("cart", JSON.stringify(cart)); // تحديث الكارت في LocalStorage 

  // const cartCountElement = document.getElementById("cart-count"); 
  // cartCountElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0); 

  // تحديث cartCount في الـ localStorage
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);  
  localStorage.setItem("cartCount", cartCount); 
   
  updateCartCount(); // تحديث الـ Count في الهيدر 
}; 
// /////////////////////////////////////////////// 
// إضافة الأحداث للأزرار 
const addToCartButtons = document.querySelectorAll('.add-to-cart'); 
addToCartButtons.forEach((button, index) => { 
  button.addEventListener('click', () => { 
    addToCart(products[index]); // تمرير المنتج إلى دالة Add to Cart 
    alert("Product added to cart!"); 
  }); 
}); 
