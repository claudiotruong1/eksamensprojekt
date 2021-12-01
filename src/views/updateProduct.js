document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  
  const idLoaded = urlParams.get("id");
  
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
// slet nedenstående
    const params = new URL (location.href).searchParams;
    const urlId = params.get("id");
    const urlProduct = params.get("product");
    const urlPrice = params.get("price");
// slet nedenstående 
  //  id.value = urlId
   // product.value = urlProduct
  //  price.value = urlPrice
    

    // document.getElementById("update-products").addEventListener("submit", (event) => {
     // event.preventDefault();



      //slet nedenstående
     // const currentProduct = product.value
     // const currentPrice = price.value

    const payload = {
      id: idLoaded,
      product: product,
      price: price,
      category: category

    };

    
/*
       const payload = {
           "id": urlId,
           "product": currentProduct,
           "price": currentPrice
       }
       */

       fetch("http://localhost:8005/products/update", {
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
 // });

 // gem denne