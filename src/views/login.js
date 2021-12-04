document.addEventListener("DOMContentLoaded", (event) => {
    const user = localStorage.getItem("user"); // vi ønsker at vi vores item fra vores key, som er user
    if (user) { // hvis der findes en user 
      location.href = "/"; // bliver vi sendt til index html siden
    }
  
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const user = {
        email: email,
        password: password,
      };
  
      fetch("http://localhost:7000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {

            localStorage.setItem("user", JSON.stringify(user)); // vi laver en ny række i locastorage, som indeholder to argumenter, som er hhv. key ("user") og value (vores json objekt). 
            location.href = `/?email=${email}`;
          } else {
            window.alert("Ugyldig e-mailadresse eller adgangskode."); // hvis brugeren skriver noget forkert, udfører vi en window alert at oplysningerne er forkerte
          }
        })
        .catch(() => { // her "fanger" vi eventuelle fejl
          window.alert("Noget gik galt."); // hvis noget går galt, fortæller vi brugeren, at noget er gået galt via en window alert
        });
    });
  });
  