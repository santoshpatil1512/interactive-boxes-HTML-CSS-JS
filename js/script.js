
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const addToCartBtn = document.querySelector('.add-to-cart');
    const totalPriceElement = document.querySelector('.total-price');
    
    // Prices for each box
    const prices = {
        box1: 10.00,
        box2: 18.00,
        box3: 24.00
    };
    
    // Box click handler
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            // Close all other boxes
            boxes.forEach(otherBox => {
                if (otherBox !== box) {
                    otherBox.classList.remove('active');
                }
            });
            
            // Toggle current box
            box.classList.toggle('active');
            
            // Update total price
            if (box.classList.contains('active')) {
                updateTotalPrice(box.id);
            } else {
                totalPriceElement.textContent = 'Total: $0.00 USD';
            }
        });
    });
    
    // Prevent select elements from triggering box collapse
    document.querySelectorAll('.option-group select').forEach(select => {
        select.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    // Update total price based on selected box
    function updateTotalPrice(boxId) {
        const price = prices[boxId];
        totalPriceElement.textContent = `Total: $${price.toFixed(2)} USD`;
    }
    
    // Add to cart button handler
    addToCartBtn.addEventListener('click', function() {
        const activeBox = document.querySelector('.box.active');
        if (activeBox) {
            alert(`Added ${activeBox.querySelector('.box-title').textContent} to cart!`);
        } else {
            alert('Please select an option first');
        }
    });
});
