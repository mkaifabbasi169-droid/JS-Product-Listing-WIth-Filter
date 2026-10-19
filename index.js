
const shoes = [
    
    {
        id: 1,
        brand: "Nike",
        name: "Air Max Plus",
        price: 190,
        color: "black",
        size: [8, 9, 10],
        imageUrl: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e12155a5-466a-4d3a-ac6c-4e3e03aeea4b/NIKE+V5+RNR+RIPSTOP.png",
        productUrl: "https://www.nike.com/"
    },
    {
        id: 2,
        brand: "Nike",
        name: "Air Force 1",
        price: 115,
        color: "white",
        size: [7, 8, 9, 10],
        imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=700&q=85",
        productUrl: "https://www.nike.com/"
    },
    {
        id: 3,
        brand: "Nike",
        name: "Air Max Running",
        price: 130,
        color: "red",
        size: [8, 9, 11],
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
        productUrl: "https://www.nike.com/"
    },

    // ADIDAS SHOES
    {
        id: 4,
        brand: "Adidas",
        name: "Campus 00s",
        price: 110,
        color: "green",
        size: [7, 8, 9, 10],
        imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=85",
        productUrl: "https://www.adidas.com/"
    },
    {
        id: 5,
        brand: "Adidas",
        name: "Samba OG",
        price: 100,
        color: "black",
        size: [8, 9, 10, 11],
        imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=700&q=85",
        productUrl: "https://www.adidas.com/"
    },
    {
        id: 6,
        brand: "Adidas",
        name: "Ultraboost",
        price: 150,
        color: "blue",
        size: [7, 9, 10],
        imageUrl: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=85",
        productUrl: "https://www.adidas.com/"
    },

    
    {
        id: 7,
        brand: "Vans",
        name: "Old Skool",
        price: 75,
        color: "red",
        size: [7, 8, 9, 10],
        imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=85",
        productUrl: "https://www.vans.com/"
    },
    {
        id: 8,
        brand: "Vans",
        name: "Sk8-Hi",
        price: 85,
        color: "black",
        size: [8, 9, 10, 11],
        imageUrl: "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=700&q=85",
        productUrl: "https://www.vans.com/"
    },
    {
        id: 9,
        brand: "Vans",
        name: "Classic Canvas",
        price: 60,
        color: "blue",
        size: [7, 8, 10],
        imageUrl: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=85",
        productUrl: "https://www.vans.com/"
    },

    
    {
        id: 10,
        brand: "New Balance",
        name: "574 Core",
        price: 99.99,
        color: "blue",
        size: [7, 8, 9, 10],
        imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=85",
        productUrl: "https://www.newbalance.com/"
    },
    {
        id: 11,
        brand: "New Balance",
        name: "327 Sneakers",
        price: 120,
        color: "green",
        size: [8, 9, 10, 11],
        imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=85",
        productUrl: "https://www.newbalance.com/"
    },
    {
        id: 12,
        brand: "New Balance",
        name: "9060 Sneakers",
        price: 160,
        color: "red",
        size: [7, 8, 9, 11],
        imageUrl: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=85",
        productUrl: "https://www.newbalance.com/"
    }
];

const showRow = document.getElementById("show-rows");
const brandSelect = document.getElementById("brand");
const colorSelect = document.getElementById("color");
const sizeSelect = document.getElementById("size");
const priceSelect = document.getElementById("price");
const resultCount = document.getElementById("result-count");
const noResults = document.getElementById("no-results");
const resetButton = document.getElementById("reset-button");

function renderShoes(shoesToShow) {
    showRow.innerHTML = "";

    resultCount.textContent = `${shoesToShow.length} shoes found`;

    noResults.classList.toggle("d-none", shoesToShow.length !== 0);

    shoesToShow.forEach((shoe) => {
        const colorCode = shoe.color.toLowerCase();

        const shoeHTML = `
            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                <div class="card shoe-card">

                    <a href="${shoe.productUrl}"
                       target="_blank"
                       rel="noopener noreferrer">

                        <img
                            src="${shoe.imageUrl}"
                            class="shoe-image"
                            alt="${shoe.brand} ${shoe.name}"
                            loading="lazy"
                            onerror="this.onerror=null;this.src='https://placehold.co/600x400/f1f1f1/333333?text=Shoe+Image';"
                        >
                    </a>

                    <div class="card-body">
                        <h5 class="shoe-name">${shoe.name}</h5>

                        <p class="shoe-brand">${shoe.brand}</p>

                        <p class="shoe-price">
                            $${shoe.price.toFixed(2)}
                        </p>

                        <p class="shoe-color">
                            Color:
                            <span style="color:${colorCode}">
                                ${shoe.color.charAt(0).toUpperCase() + shoe.color.slice(1)}
                            </span>
                        </p>

                        <p class="shoe-size">
                            Available sizes: ${shoe.size.join(", ")}
                        </p>

                        <a
                            href="${shoe.productUrl}"
                            class="product-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Product →
                        </a>
                    </div>

                </div>
            </div>
        `;

        showRow.insertAdjacentHTML("beforeend", shoeHTML);
    });
}

function filterShoes() {
    const selectedBrand = brandSelect.value;
    const selectedColor = colorSelect.value;
    const selectedSize = sizeSelect.value;
    const selectedPrice = priceSelect.value;

    let filteredShoes = shoes.filter((shoe) => {
        const brandMatch =
            selectedBrand === "" || shoe.brand === selectedBrand;

        const colorMatch =
            selectedColor === "" ||
            shoe.color.toLowerCase() === selectedColor.toLowerCase();

        const sizeMatch =
            selectedSize === "" ||
            shoe.size.includes(Number(selectedSize));

        return brandMatch && colorMatch && sizeMatch;
    });

    if (selectedPrice === "low") {
        filteredShoes.sort((a, b) => a.price - b.price);
    }

    if (selectedPrice === "high") {
        filteredShoes.sort((a, b) => b.price - a.price);
    }

    renderShoes(filteredShoes);
}

brandSelect.addEventListener("change", filterShoes);
colorSelect.addEventListener("change", filterShoes);
sizeSelect.addEventListener("change", filterShoes);
priceSelect.addEventListener("change", filterShoes);

resetButton.addEventListener("click", () => {
    brandSelect.value = "";
    colorSelect.value = "";
    sizeSelect.value = "";
    priceSelect.value = "";

    filterShoes();
});

renderShoes(shoes);
