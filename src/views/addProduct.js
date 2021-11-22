document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("products").addEventListener("submit", (event) => {
        event.preventDefault();

        const product = document.getElementById("product").value
        const price = document.getElementById("price").value
        const category = document.getElementById("category").value

        const payload = {
            "product": product,
            "price": price,
            "category": category
        }

        fetch("http://localhost:5000/products/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
        })
        .then((response) => response.json())
        .then((response) => {
            if(response) {
                location.href = "/addProduct.html";
            }
        })
        .catch(() => {
            window.alert("Noget gik galt.")

        });
    });
});