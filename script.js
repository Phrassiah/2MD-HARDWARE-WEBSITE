// Automatically display current year

document.getElementById("year").textContent =
    new Date().getFullYear();


// PRODUCT SEARCH

const searchInput = document.getElementById("search");

const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", function () {

    const searchValue = this.value.toLowerCase();

    products.forEach(function (product) {

        const productText = product.textContent.toLowerCase();

        if (productText.includes(searchValue)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

});


// DROPDOWN CATEGORY FILTER

const categoryLinks = document.querySelectorAll(
    ".dropdown-menu a[data-category]"
);

categoryLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const selectedCategory = this.dataset.category;

        searchInput.value = "";

        products.forEach(function (product) {

            if (product.dataset.category === selectedCategory) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });
    

});
