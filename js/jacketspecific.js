import products from "./products.js";

const specContainer = document.querySelector(".product_description");

const id = new URLSearchParams(window.location.search).get("id");

products.forEach((product) => {
    if (product.id === id) {
        specContainer.innerHTML = `<div>
                                   <a href="checkot.html?id=${product.id}">
                                   <img class="card" src="${product.background_image}" alt="${product.name}"/>
                                   <h1 class="under-img">${product.name}</h1>
                                   <h2 class="under-img">${product.price}</h2>
                                   <button class="button-click">Add to cart</button>
                                   </a>
                                   <div>`;
    }
});

const productClick = document.querySelector(".button-click");

productClick.addEventListener("click", () => {
    if (!localStorage.cart) {
        localStorage.cart = JSON.stringify([id]);
    }
    let cart = JSON.parse(localStorage.cart)

    cart.push(id)
    localStorage.cart = JSON.stringify(cart)
});

