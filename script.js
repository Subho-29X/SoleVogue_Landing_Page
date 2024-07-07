// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add to Cart button functionality
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});

// Shop Now button functionality in Discounts section
document.querySelectorAll(".shop-now").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Navigating to shop...");
    // Add navigation logic here
  });
});

// Subscribe to Newsletter functionality
document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with email: ${email}`);
    this.reset();
  });

// Read More button functionality
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Navigating to blog post...");
    // Add navigation logic here
  });
});
