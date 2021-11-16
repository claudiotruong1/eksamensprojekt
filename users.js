// imports
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


const PORT = 8001;
app.listen(PORT, () => {
    console.log(`Serveren lytter på port ${PORT}`)
});
// opret bruger 
let users = [];


// test profil

let usertest = {
    userId: 1,
    fornavn: "test",
    efternavn: "test test",
    brugerNavn: "test test test",
    password: "kodetest123"

}

users.push(usertest)

app.get('/liste_af_bruger', (req, res) => {
    res.status(200).json(users)
})


app.post('/opret_bruger', (req, res) => {
    const newUser = {
        userId: users.length + 1,
        fornavn: req.body.fornavn,
        efternavn: req.body.efternavn,
        brugerNavn: req.body.brugerNavn,
        password: req.body.password,
       
    };

    users.push(newUser)
    res.status(201).json(users);
});

// delete bruger 

app.delete('/slet_bruger/:userId', (req,res) => {
    let found = users.find(function(fornavn) {
        return fornavn.userId === parseInt(req.params.userId);
    });
    if(found) {
        let targetindex = users.indexOf(found);
        users.splice(targetindex,1);
        res.status(200).json(users);
    } else 
    res.status(404)
});

// vi tillader brugere at opdatere sin profil

app.patch('/opdater_bruger', (req,res) => {
    let update = users.find(function(fornavn) {
        return fornavn.userId === parseInt(req.params.fornavn)
    }) 
})


module.exports=express