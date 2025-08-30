document.addEventListener('DOMContentLoaded', () => {
    // Sample cart functionality
    const cartButtons = document.querySelectorAll('.add-to-cart');
    let cartCount = 0;

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            alert(`Added to cart! Total items: ${cartCount}`);
            // In real: Update localStorage or send to backend
        });
    });

    // Dynamic product load (placeholder for API)
    // Fetch products from JSON if expanded
});
