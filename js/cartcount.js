// ////////////////////////////////////////////////////////////////////
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = totalItems;
    cartCountElement.style.display = totalItems > 0 ? 'block' : 'none';
  };

  updateCartCount()
  