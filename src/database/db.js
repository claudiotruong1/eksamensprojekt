// fs sørger for at gemme/læse vores users.json fil til vores computer
var fs = require("fs");
const { runInThisContext } = require("vm");

const PATH = __dirname + "/../../data";
const userFile = "/users.json";

// En database der kan gemme vores users
class dataBase {
  constructor() {
    this.users = this.openFile(userFile); // vi laver en variable, som indeholer vores users.json fil
  }

  // En funktion der gemmer filer
  saveFile(fileName, contentString) {
    fs.writeFileSync(PATH + fileName, contentString); // en metoder der accepterer vores tre parametre
  }

  // En funktion der åbne filer -> vi kan se, hvilke brugere vi har
  openFile(fileName) {
    const file = fs.readFileSync(PATH + fileName); // vi definerer en variable, som læser vores users.json fil synkront
    return JSON.parse(file); // vi giver en værdi væk fra funktionen, og herefter parser den
  }
  // En funktion der kan gemme en user til en fil
  saveUser(user) {
    this.users.push(user); // vi referer til vores variabel users, og herefter "pusher" vi for tilføje et element til vores array i json filen
    this.saveFile(userFile, JSON.stringify(this.users)); // her sørger vi for, at det som vi har opdateret users med, bliver lagt i filen
  }

  deleteUser(user) {
    this.users = this.users.filter((x) => x.email != user.email);
    this.saveFile(userFile, JSON.stringify(this.users));
  }

  // vi finder vores user ud fra den email, som er registreret i vores database
  findUser(user) {
    return this.users.find((x) => user.email == x.email);
  }

  updateUser(user) {
    var keys = Object.keys(this.users);
    var usersArray = this.users;

    keys.forEach(function (objKey) {
      var objValue = usersArray[objKey];

      if (objValue.email === user.email) {
        objValue.email = prod.email;
        objValue.password = prod.password;
      }
    });

    this.saveFile(userFile, JSON.stringify(usersArray));
  }
}
module.exports = new dataBase();
