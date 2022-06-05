import products from "./products.js";

const productContainer = document.querySelector(".featured2");

products.forEach((product) => {
    productContainer.innerHTML += `<div>
                                   <a class="product-click" href="jacketspecific.html?id=${product.id}">
                                    <img class="card" src="${product.background_image}" alt="${product.name}"/>
                                    <h2 class="under-img">${product.name}</h2>
                                    <p class="under-img">${product.price}</p>
                                   </a>
                                   </div>`;
});
