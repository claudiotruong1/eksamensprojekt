var objPeople = [
    {
        username: "Claudio",
        password: "Truong"
    },
    {
        username: "Mikkel",
        password: "Mikkelsen"
    },
    {
        username: "Knud",
        password: "Knudsen"
    }
]


function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
   
    for (i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + " is logged in!!!")
            return
        }
    }
    console.log("incorrect username or password")
}