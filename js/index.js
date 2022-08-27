const baseUrl = "https://borikokeny.one/wp-json/wc/store/products";

const productCont = document.querySelector(".newproducts");

async function getProducts(url){

    const response = await fetch(url);

    const products = await response.json();

    products.forEach(function(product){
        productCont.innerHTML += `
        <a href="featured.html?id=${product.id}" class="newproducts">
        <h2>${product.name}</h2>
        <div class="product-image" style="content:url('${product.images[0].src}')"></div>
        </a>`;
    })
}

getProducts(baseUrl);