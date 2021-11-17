// vi bruger fs for at informere js om at den skal kigge i vores filer 
const fs = require("fs");

// En absolut path er en path, som starter fra en rod, og den rod, har vi definerer på linje 1. Referer til dette link: https://levelup.gitconnected.com/understand-and-configure-absolute-import-paths-in-javascript-5cde3be2630d
const ABSOLUTE_PATH = _dirname + "./../../data";
const USER_FILE = "/users.json";

class DB {
    constructor(){
        this.user = this.openFile(USER_FILE);
    }
    // save file
    saveFile(fileName, contentString) {
        fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
    }

    // open file
    openFile(fileName) {
        const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
        return JSON.parse(file);
    }

    // login på database 
    saveUser(user) {
        this.user.push(user);
        this.saveFile(USER_FILE, JSON.stringify(this.user));
    }
    deleteUser(user) {
        this.user = this.user.filter((i) => i.email != user.email);
        this.saveFile(USER_FILE, JSON.stringify(this.user));
    }
    findUser(user) {
        return this.user.find((i) => user.email == i.email); 
    }

}

// singleton - cool term
module.exports = new DB();
