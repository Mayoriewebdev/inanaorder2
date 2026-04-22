const cards = document.querySelectorAll('.product-card');
const totalImg = document.getElementById('totalPriceImg');

cards.forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove active from all
        cards.forEach(c => c.classList.remove('active'));

        // Add active to clicked one
        this.classList.add('active');

        // Get image from data attribute
        const newImage = this.getAttribute('data-price');

        // Change bottom image
        totalImg.src = newImage;
    });
});
