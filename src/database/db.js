var fs = require("fs");
const { runInThisContext } = require("vm");

const PATH = __dirname + "/../../data";
const userFile = "/users.json";

class dataBase {
  constructor() {
    this.users = this.openFile(userFile);
  }

  saveFile(fileName, contentString) {
    fs.writeFileSync(PATH + fileName, contentString);
  }

  openFile(fileName) {
    const file = fs.readFileSync(PATH + fileName);
    return JSON.parse(file);
  }

  saveUser(user) {
    this.users.push(user);
    this.saveFile(userFile, JSON.stringify(this.users));
  }

  deleteUser(user) {
    this.users = this.users.filter((x) => x.email != user.email);
    this.saveFile(userFile, JSON.stringify(this.users));
  }

  findUser(user) {
    return this.users.find((x) => user.email == x.email);
  }

  updateUser(user) {

    var keys = Object.keys(this.users);
    var usersArray = this.users

    keys.forEach(function(objKey){
        var objValue = usersArray[objKey]

        if(objValue.email === user.email) {
            objValue.email = prod.email
            objValue.password = prod.password
        }
    })

    this.saveFile(userFile, JSON.stringify(usersArray));
  }
}
module.exports = new dataBase();