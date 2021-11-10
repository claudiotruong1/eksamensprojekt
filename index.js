var makeInput = document.getElementById("make");
var modelInput = document.getElementById("model");
var colorInput = document.getElementById("color");


// check locak storage for car data

var carInfo = JSON.parse(localStorage.getItem("carInfo"));

if (carInfo) {
    makeInput.value = carInfo.make;
    model.value = carInfo.model;
    colorInput.value = carInfo.color
}




// docuemnt: we are quering the dom for at få vores user-form 
// vi tager getElementById, som er vores id for vores overdnet form i html 
// Herefter lytter vi til vores submit event 
//event.preventDefault bruger vi, da vi ikke ønsker, at siden skal reloade, som er default browser behavior, og derfor prevente vi dette, så siden ikke reloader. 
// Han kalder det for: Update form values using the car data

document
    .getElementById("car-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();


    /*
Fremgangsmåden nu er, at vi skal få vores værdier fra vores "user-form"-inputs altså form-id'et fra HTML og dens input. 
Derefter skal vi tjekke om de er valide og fungerer optimalt, og at brugeren har indtastet noget input.
Og til sidst skal vi opbevare inputet i Local storage, hvor vi bruger den teknik, som bliver beskrevet i starten af videoen. 
Når det fungerer, laver vi vores opdatering, som fungerer ved at hver gang siden loader, tjekker vi Local storage for user data, og derefter opdatere værdierne i user-form.
 */


// get values from the form inputs
 var make = makeInput.value.trim();
 var model = modelInput.value.trim();
 var color = colorInput.value.trim();

// if values are valid 
if (!make || !model || !color) {
    return;
}

// save them in local storage

var carInfo = {
    make: make,
    model: model,
    color: color
};

localStorage.setItem("carInfo", JSON.stringify(carInfo));

});