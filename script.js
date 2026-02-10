
/* SEARCH FUNCTION */
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {
    const keyword = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const name = card.dataset.name;
        card.style.display = name.includes(keyword) ? "block" : "none";
    });
});

/* CART FUNCTION */
let cartCount = 0;
const cartSpan = document.querySelector(".cart span");
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartSpan.textContent = cartCount;
        alert("Produk ditambahkan ke keranjang 🛒");
    });
});
