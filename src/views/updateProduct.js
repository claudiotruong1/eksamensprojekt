document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);


  
  const idLoaded = urlParams.get("id");
  
  const productLoaded = urlParams.get("product");
  document.getElementById("product").value = productLoaded;
 
  const priceLoaded = urlParams.get("price");
  document.getElementById("price").value = priceLoaded;
 
  const categoryLoaded = urlParams.get("category");
  document.getElementById("category").value = categoryLoaded;

  document.getElementById("update").addEventListener("submit", (event) => {
    event.preventDefault();


    const product = document.getElementById("product").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;

    /*
    const urlId     = params.get('id');
    const urlProduct = params.get('product');
    const urlPrice = params.get('price');

    product.value = urlProduct
    price.value = urlPrice
    */

    document.getElementById("update").addEventListener("submit", (event) => {
      event.preventDefault();

    const payload = {
      id: idLoaded,
      product: product,
      price: price,
      category: category

    };

      // let currentProduct = product.value
      // let currentPrice = price.value
/*
       const payload = {
           "id": urlId,
           "product": currentProduct,
           "price": currentPrice
       }
       */

       fetch("http://localhost:5005/products/update", {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(payload),
       })
       //.then((response) => response.json())
       .then((response) => {
           if(response) {
               window.alert("Congrats!")
               location.href = "/addProduct.html";
           }
       })
       .catch(() => {
           window.alert("Error.")
       });
    });
  });
  });