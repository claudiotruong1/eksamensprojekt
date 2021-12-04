document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search); // vi laver en variabel, som indeholder de parsede søgeparametre
  const emailLoaded = urlParams.get("email");


  document.getElementById("update-products").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;
      
    const payload = {
      email: email, 
      password: password
    };

       fetch("http://localhost:7000/users/update", {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(payload),
       })
       .then((response) => {
           if(response) {
               window.alert("Congrats!")
               location.href = "/index.html";
           }
       })
       .catch(() => {
           window.alert("Error.")
       });
    });
 });
 