// =========================
// CART
// =========================

let cart = [];

const cartButton = document.getElementById("cartButton");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");


// Open cart

cartButton.addEventListener("click", () => {

    cartSidebar.classList.add("active");

    overlay.classList.add("active");

});


// Close cart

function closeCartMenu() {

    cartSidebar.classList.remove("active");

    overlay.classList.remove("active");

}

closeCart.addEventListener("click", closeCartMenu);

overlay.addEventListener("click", closeCartMenu);


// =========================
// ADD TO CART
// =========================

const addButtons =
    document.querySelectorAll(".add-cart");


addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product =
            button.closest(".product-card");

        const name =
            product.dataset.name;

        const price =
            Number(product.dataset.price);


        const existing =
            cart.find(item => item.name === name);


        if (existing) {

            existing.quantity++;

        } else {

            cart.push({

                name: name,

                price: price,

                quantity: 1

            });

        }


        updateCart();

        showMessage(
            `${name} added to cart!`
        );

    });

});


// =========================
// UPDATE CART
// =========================

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    let count = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty">
                Your cart is empty.
            </p>
        `;

    }


    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        count += item.quantity;


        const element =
            document.createElement("div");

        element.className = "cart-item";


        element.innerHTML = `

            <div>

                <h4>
                    ${item.name}
                </h4>

                <p>
                    $${item.price.toFixed(2)}
                    × ${item.quantity}
                </p>

            </div>

            <button
                class="remove"
                onclick="removeItem(${index})"
            >

                <i class="fa-solid fa-trash"></i>

            </button>

        `;


        cartItems.appendChild(element);

    });


    cartCount.textContent = count;

    cartTotal.textContent =
        "$" + total.toFixed(2);

}


// Remove item

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


// =========================
// WISHLIST
// =========================

const wishlistButtons =
    document.querySelectorAll(".wishlist");


wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        const icon =
            button.querySelector("i");


        icon.classList.toggle(
            "fa-regular"
        );

        icon.classList.toggle(
            "fa-solid"
        );


        button.style.color =
            button.style.color === "rgb(255, 75, 103)"
                ? "white"
                : "#ff4b67";

    });

});


// =========================
// SEARCH
// =========================

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", () => {

    const search =
        searchInput.value.toLowerCase();


    const products =
        document.querySelectorAll(".product-card");


    products.forEach(product => {

        const name =
            product.dataset.name?.toLowerCase() || "";


        if (name.includes(search)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

});


// =========================
// NEWSLETTER
// =========================

const newsletter =
    document.getElementById("newsletterForm");


newsletter.addEventListener("submit", event => {

    event.preventDefault();

    alert(
        "Thank you for subscribing to AnimeVerse! 🎉"
    );

    newsletter.reset();

});


// =========================
// CHECKOUT
// =========================

document
    .getElementById("checkout")
    .addEventListener("click", () => {

        if (cart.length === 0) {

            alert("Your cart is empty!");

            return;

        }


        alert(
            "Checkout system coming soon! 🛒"
        );

    });