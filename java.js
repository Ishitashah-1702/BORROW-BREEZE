const slides = document.querySelectorAll('.image-slider .slide');
let currentSlide = 0;

// Function to show the specified slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none'; // Show only the current slide
    });
}

// Show the first slide initially
showSlide(currentSlide);

// Event listeners for "Next" and "Previous" buttons
document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length; // Go to the next slide, looping back to the first
    showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Go to the previous slide, looping back to the last
    showSlide(currentSlide);
});

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const cartBody = document.getElementById("cart-body");
    const cartSubtotal = document.getElementById("cart-subtotal");
    const cartTotal = document.getElementById("cart-total");
    const shippingFee = 85; // Fixed shipping cost

    // Function to update totals
    function updateCartTotal() {
        let total = 0;
        document.querySelectorAll(".cart-item").forEach((row) => {
            const price = parseFloat(row.querySelector(".cart-price").textContent);
            const quantity = row.querySelector(".cart-quantity").value;
            const subtotal = price * quantity;

            // Update row subtotal
            row.querySelector(".cart-subtotal").textContent = subtotal;

            // Update total
            total += subtotal;
        });

        // Update displayed totals
        cartSubtotal.textContent = total + " rs";
        cartTotal.textContent = (total + shippingFee) + " rs";
    }

    // Handle quantity change
    document.querySelectorAll(".cart-quantity").forEach((input) => {
        input.addEventListener("change", function () {
            if (this.value < 1) this.value = 1; // Prevent negative values
            updateCartTotal();
        });
    });

    // Handle item removal
    document.querySelectorAll(".remove-item").forEach((button) => {
        button.addEventListener("click", function () {
            this.closest(".cart-item").remove();
            updateCartTotal();
        });
    });

    // Initial update
    updateCartTotal();
});
