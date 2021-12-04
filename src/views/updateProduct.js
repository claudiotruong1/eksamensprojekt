document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search); // vi laver en variabel, som indeholder de parsede søgeparametre

  const idLoaded = urlParams.get("id");

  const productLoaded = urlParams.get("product"); // vi laver en variabel, der returnerer den første værdi, der er knyttet til produkter
  document.getElementById("product").value = productLoaded;

  const priceLoaded = urlParams.get("price");
  document.getElementById("price").value = priceLoaded;

  const categoryLoaded = urlParams.get("category");
  document.getElementById("category").value = categoryLoaded;

  document
    .getElementById("update-products")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const product = document.getElementById("product").value;
      const price = document.getElementById("price").value;
      const category = document.getElementById("category").value;

      const payload = {
        id: idLoaded,
        product: product,
        price: price,
        category: category,
      };

      fetch("http://localhost:7000/products/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response) {
            window.alert("Tillykke! Du har netop opdateret din vare.");
            location.href = "/addProduct.html";
          }
        })
        .catch(() => {
          window.alert("Error.");
        });
    });
});
