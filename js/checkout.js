import products from "./products"; 

const addToCart = document.querySelector(".review-fillup"); 

const id = new URLSearchParams(window.location.search).get("id");

products.forEach((product) => {
    if (product.id === id) {
        addToCart.innerHTML = `<div>
                                   <img src="${product.background_image}" alt="${product.name}"/>
                                   <h1>${product.name}</h1>
                                   <h2>${product.price}</h2>
                                   <div>`;
    }
});
