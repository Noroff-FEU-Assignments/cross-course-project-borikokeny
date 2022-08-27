const featureContainer = document.querySelector(".specific_grid2");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://www.borikokeny.one/wp-json/wc/store/products/" + id;

async function fetchProduct() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        featureContainer.innerHTML = "";

        console.log(details);

        createHtml(details);
    }
    catch(error) {
        console.log(error);
        featureContainer.innerHTML = message("error", error);
    }
}

fetchProduct();

function createHtml(details) {
    featureContainer.innerHTML = `
    <div class="img_big" style="content:url('${details.images[0].src}')"></div>
    <div class="product_description">
    <h1 class="product-name">${details.name}</h1>
    <div class="product-price">${details.prices.price}/USD</div>
    <a href="checkout.html" class="addtocart_cta">Add to cart</a> 
    <h3 class="details_1">Details</h3>
    <div class="details_2">${details.description}</div>
    </div>`;
}