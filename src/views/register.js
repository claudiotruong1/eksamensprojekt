document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const userId = (Math.floor(Math.random() * 100000))
  
      const user = {
        id: userId.toString(),
        email: email,
        password: password
      };
  
      fetch("http://localhost:7000/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            location.href = "/login.html";
          }
        })
        .catch(() => {
          window.alert("Noget gik galt.");
        });
    });
  });
  