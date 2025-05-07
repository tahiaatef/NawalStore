
// استرجاع بيانات الكارت من localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = cart.reduce((total, item) => total + item.quantity, 0); // حساب العدد الإجمالي من الكارت

// تحديث الـ Cart Count عند تحميل الصفحة
const cartCountElement = document.getElementById('cart-count');
cartCountElement.textContent = cartCount;
cartCountElement.style.display = cartCount > 0 ? 'block' : 'none';

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // جلب بيانات المنتج من localStorage
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    if (selectedProduct) {
    document.getElementById('product-image').src = selectedProduct.image;
    document.getElementById('product-name').textContent = selectedProduct.name;
    document.getElementById('product-price').textContent = `Price: ${selectedProduct.price}`;
    document.getElementById('product-description').textContent = `description: ${selectedProduct.description}`;
    document.getElementById('product-Category').textContent = `Category: ${selectedProduct.category}`;
    document.getElementById('product-Quantity').textContent =` Quantity:${selectedProduct.Quantity} `;
    } else {
        document.querySelector('.product-detail-container').innerHTML = '<h1>Product Not Found</h1>';
    }
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// إضافة المنتج إلى الكارت عند الضغط على زر Add to Cart
document.querySelector('.add-to-cart').addEventListener('click', () => {
    const existingProduct = cart.find(item => item.id === selectedProduct.id);
  
    if (existingProduct) {
      // إذا كان المنتج موجودًا بالفعل، نزيد الكمية
      existingProduct.quantity += 1;
    } else {
      // إذا كان المنتج جديدًا، نضيفه مع الكمية الافتراضية
      selectedProduct.quantity = 1;
      cart.push(selectedProduct);
    }
  
    // تحديث بيانات الكارت في localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // تحديث الـ Cart Count
    cartCount += 1;
    cartCountElement.textContent = cartCount;
    cartCountElement.style.display = 'block';
  });

// ///////////////////////////////////////// end card////////////////////////////////////////////////////////////
