
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartList = document.getElementById('cart-list');
const totalAmountElement = document.getElementById('total-amount');

// تحديث الكارت
const updateCart = () => {
  cartList.innerHTML = '';
  let totalAmount = 0;

  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = 
          `<img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>Price: ${item.price}</p>
          <div class="quantity-controls">
            <button class="decrease-btn" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="increase-btn" data-index="${index}">+</button>
          </div>
          <button class="remove-btn" data-index="${index}">Remove</button>`
        ;
        totalAmount += parseFloat(item.price.replace('$', '')) * item.quantity;

        // إضافة العنصر إلى القائمة
        cartList.appendChild(cartItem);
      });

      // تحديث الإجمالي
      totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;

      // حفظ الكارت في localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // 
      // تحديث cartCount
      const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
      localStorage.setItem("cartCount", cartCount);
      updateCartCount(); // تحديث الـ Count في الهيدر
    };
    

    // حدث لزيادة الكمية
    cartList.addEventListener('click', (e) => {
      if (e.target.classList.contains('increase-btn')) {
        const index = e.target.dataset.index;
        cart[index].quantity += 1;
        localStorage.setItem('cart',JSON.stringify(cart));
        updateCart();
        updateCartCount();
      }

      // حدث لتقليل الكمية

      if (e.target.classList.contains('decrease-btn')) {
        const index = e.target.dataset.index;
        if (cart[index].quantity > 1) {
          cart[index].quantity -= 1;
        } else {
          cart.splice(index, 1); // حذف المنتج إذا كانت الكمية 1
        }
        localStorage.setItem('cart',JSON.stringify(cart));
        updateCart();
        updateCartCount();
      }

      // حدث لحذف المنتج
      if (e.target.classList.contains('remove-btn')) {
        const index = e.target.dataset.index;
        cart.splice(index, 1); // حذف المنتج من الكارت
        localStorage.setItem('cart',JSON.stringify(cart));
        updateCart();
        updateCartCount();
      }
    });

    // زر "Check Out"
    document.getElementById('checkout-btn').addEventListener('click', () => {
      // تنظيف الكارت
      localStorage.removeItem('cart');
      localStorage.removeItem('cartCount'); // إزالة count من الـ localStorage أيضًا

      // الانتقال إلى صفحة "Order Shipped"
      window.location.href = './order-shipped.html';
    });

    updateCart();


