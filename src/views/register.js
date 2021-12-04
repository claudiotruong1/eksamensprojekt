// vi anvender addEventListener for at bruge vores input til at gøre noget nyt
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
  
      // vi laver variabler til vores forskellige user inputs 
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const userId = (Math.floor(Math.random() * 100000)) // vi generere et unikt id til brugerne
  
      // vi laver en variabel, som indeholder et user objekt. Herefter vi json ved anvende {}, og derefter giver objektet en række variabler
      const user = {
        id: userId.toString(), // gemmer id som en streng
        email: email,
        password: password
      };
  
      // vi kalder på vores URL, og herefter giver den vores ønskede metode, som er "GET"
      fetch("http://localhost:7000/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // vi sender vores user videre i body som en streng således at vores server kan forstå det
      })
        .then((response) => response.json()) // vi laver et promise, som tager strengen fra serveren, og laver det til json
        .then((response) => { // vores repsonse er nu et json objekt
          if (response) { // hvis der er succesfuldt response bliver vi sendt til vores login html side
            location.href = "/login.html"; 
          }
        })
        .catch(() => { // her "fanger" vi eventuelle fejl
          window.alert("Noget gik galt."); // hvis noget går galt, fortæller vi brugeren, at noget er gået galt via en window alert
        });
    });
  });
  