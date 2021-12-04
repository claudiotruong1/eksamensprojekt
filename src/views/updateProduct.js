document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  
  const idLoaded = urlParams.get("id");
  
  //const product = document.getElementById("product");
  //const price = document.getElementById("price");
  //const category = document.getElementById("category");

  const productLoaded = urlParams.get("product");
  document.getElementById("product").value = productLoaded;
 
  const priceLoaded = urlParams.get("price");
  document.getElementById("price").value = priceLoaded;
 
  const categoryLoaded = urlParams.get("category");
  document.getElementById("category").value = categoryLoaded;

// update
  document.getElementById("update-products").addEventListener("submit", (event) => {
    event.preventDefault();

    const product = document.getElementById("product").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
      
    const payload = {
      id: idLoaded,
      product: product,
      price: price,
      category: category
    };

       fetch("http://localhost:7000/products/update", {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(payload),
       })
       //.then((response) => response.json())
       .then((response) => {
           if(response) {
               window.alert("Tillykke! Du har netop opdateret din vare.")
               location.href = "/addProduct.html";
           }
       })
       .catch(() => {
           window.alert("Error.")
       });
    });
 });
 