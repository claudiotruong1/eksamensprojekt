// vi anvender addEventListener for at bruge vores input til at gøre noget nyt
document.addEventListener("DOMContentLoaded", (event) => {
    
    // vi kalder på vores URL, og herefter giver den vores ønskede metode, som er "GET"
  fetch("http://localhost:7000/products/getAllProducts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json", 
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      response.forEach((elem) => { // For-each løkke som lægger indsætter vores produkt variable, og lægger nye variable til så snart den findet et 
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

    // vi tager fat i vores form fra html filen, og herefter reagerer på vores submit
  document.getElementById("products").addEventListener("submit", (event) => {
    event.preventDefault(); // den stopper html siden med at genindlæse

    const product = document.getElementById("product").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const picture = document.getElementById("picture").value;

    var id = Math.floor(Math.random() * 100000) // vi genererer et unikt id med et unikt nummer
    
    const payload = {
      id: id.toString(), // gemmer id som en streng
      product: product,
      price: price,
      category: category,
      picture: './product.png',
    };

    fetch("http://localhost:7000/products/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Vi fortæller serveren, at vores body er en json
      },
      body: JSON.stringify(payload), //vi omdanner payload til en streng
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