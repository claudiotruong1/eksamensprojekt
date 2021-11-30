var fs = require("fs");

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
}
module.exports = new dataBase();