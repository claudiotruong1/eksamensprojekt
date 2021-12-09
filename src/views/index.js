document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user");
  if (!user) {
    // hvis brugeren ikke findes
    location.href = "/login.html"; // bliver man sendt tilbage til login html siden, da vedkommende ikke er logget ind
  }
  // vi finder vores "delete" form, og herefter for xx
  document.getElementById("delete").addEventListener("submit", (event) => {a
    // vi laver en arrow function
    event.preventDefault(); // xx

    const user = JSON.parse(localStorage.getItem("user")); // vi henter den user, som er logget ind, og herefter laver vi det om til et json objekt for at vi kan håndtere det i JavaScript

    fetch("http://localhost:7000/users/delete", {
      // vi kalder på vores endpoint fra vores user-route.js fil
      method: "DELETE", // vi angiver vores metode
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.removeItem("user"); // hvis vores repsonse lykkedes sletter vi brugeren fra localstorage
          location.href = "/login.html";
        }
      })
      .catch(() => {
        window.alert("Noget gik galt.");
      });
  });

  document.getElementById("logoutUser").addEventListener("submit", (event) => {
    event.preventDefault();

    if (user) {
      localStorage.removeItem("user");
      location.href = "/login.html";
    }
  });

  document.getElementById("opdater").addEventListener("click", (event) => {
    //event.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const emailLoaded = urlParams.get("email");

    console.log(emailLoaded);
    location.href = `/updateUser.html?email=${emailLoaded}`;
  });
});
