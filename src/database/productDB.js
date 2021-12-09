// fs sørger for at gemme/læse vores products.json fil til vores computer
var fs = require("fs");

const PATH = __dirname + "/../../data";
const productFile = "/products.json";

// En database der kan gemme vores users
class dataBase {
  constructor() {
    this.products = this.openFile(productFile); // vi laver en variable, som indeholer vores users.json fil
  }
  // En funktion der gemmer filer
  saveFile(fileName, contentString) {
    fs.writeFileSync(PATH + fileName, contentString); // en metoder der accepterer vores tre parametre
  }
  // En funktion der åbne filer -> vi kan se, hvilke produkter, der er oprettet
  openFile(fileName) {
    const file = fs.readFileSync(PATH + fileName); // vi definerer en variable, som læser vores products.json fil synkront
    return JSON.parse(file); // vi giver en værdi væk fra funktionen, og herefter parser den
  }
  // En funktion der kan gemme en user til en fil
  saveProduct(ting) {
    this.products.push(ting); // vi referer til vores variabel users, og herefter "pusher" vi for tilføje et element til vores array i json filen
    this.saveFile(productFile, JSON.stringify(this.products, null, 2)); // her sørger vi for, at det som vi har opdateret products med, bliver lagt i filen
  }

  deleteProduct(ting) {
    this.products = this.products.filter((x) => x.product != ting.product);
    this.saveFile(productFile, JSON.stringify(this.products));
  }

  // vi finder vores user ud fra den email, som er registreret i vores database
  findProduct(ting) {
    return this.products.find((x) => ting.product == x.product);
  }
  // vi laver en funktion, som kan opdatere en brugers produkter
  updateProduct(prod) {
    var keys = Object.keys(this.products); // vi laver en variabel, som kan returnere et array, som indeholder elementer, som er strenge, og som svarer til de parametre vi har i vores objekt
    var prodsArray = this.products;

    keys.forEach(function (objKey) {
      // et foreach loop
      var objValue = prodsArray[objKey];

      if (objValue.id === prod.id) {
        objValue.product = prod.product;
        objValue.price = prod.price;
        objValue.category = prod.category;
      }
    });

    this.saveFile(productFile, JSON.stringify(prodsArray));
  }

  getProducts() {
    return this.products;
  }

  getSpecificProducts(cat) {
    var keys = Object.keys(this.products);
    var prodsArray = this.products;
    var matches = [];

    keys.forEach(function (objKey) {
      var objValue = prodsArray[objKey];

      if (objValue.category === cat) {
        matches.push(objValue);
      }
    });

    return matches;
  }
}

module.exports = new dataBase();
