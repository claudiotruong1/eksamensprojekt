document.addEventListener("DOMContentLoaded", (event) => {
  fetch("http://localhost:7000/products/getAllProducts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      response.forEach((elem) => {
        var html = "<tr>";
        html += `<td>${elem.product}</td>`;
        html += `<td>${elem.price}</td>`;
        html += `<td>${elem.category}</td>`;
        html += `<td><img src="${elem.picture}" width="60" height="30"></td>`
        html += `<td><a href="updateProduct.html?id=${elem.id}&product=${elem.product}&price=${elem.price}&category=${elem.category}">Opdater vare</a></td>`;
        html += "</tr>";
        document.getElementById("varer").innerHTML += html;
      });
    })
    .catch(() => {
      window.alert("Noget gik galt.");
    });

  document.getElementById("products").addEventListener("submit", (event) => {
    event.preventDefault();

    const product = document.getElementById("product").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const picture = document.getElementById("picture").value;

    var id = Math.floor(Math.random() * 100000)
    
    const payload = {
      id: id.toString(), // gem id som streng
      product: product,
      price: price,
      category: category,
      picture: './product.png',
    };

    fetch("http://localhost:7000/products/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          window.alert("Tillykke! Du har netop oprettet en vare.");
          location.href = "/addProduct.html";
        }
      })
      .catch(() => {
        window.alert("Noget gik galt.");
      }); 
  });
});