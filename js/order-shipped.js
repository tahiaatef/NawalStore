// order-shipped.js
document.addEventListener('DOMContentLoaded', () => {
    const backToHomeButton = document.getElementById('back-to-home-btn');

    // مسح الكارت من localStorage بعد إتمام الشراء
    localStorage.removeItem('cart');

    backToHomeButton.addEventListener('click', () => {
        window.location.href = 'home.html'; // العودة إلى الصفحة الرئيسية
    });
});
