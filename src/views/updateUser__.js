function updateUser(){
    var currentEmail = localStorage.getItem("user");
    currentEmail = JSON.parse(currentEmail)
    
    var email = document.getElementById("newEmail").value;
    var password = document.getElementById("newPassword").value
}

const updateUser = {email: email, password: password, currentEmail: currentEmail.email};
const update = {email: email, password: password};

fetch("http://localhost:7000/users/update", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(updateUser),
})
.then((reponse) => reponse.json())
.then((reponse) => {
    if(reponse) {
        localStorage.setItem("user", JSON.stringify(update))
        location.href = "/index.html";
    }
    })
    .catch(() => {
        window.alert("Der skete en fejl.");
});