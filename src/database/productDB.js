var fs = require("fs");

const PATH =__dirname + "/../../data";
const productFile = "/products.json";

class DB {
    constructor(){
        this.products = this.openFile(productFile);
    }

    saveFile(fileName, contentString) {
        fs.writeFileSync(PATH + fileName, contentString);
    }

    openFile(fileName) {
        const file = fs.readFileSync(PATH + fileName);
        return JSON.parse(file);
    }

    saveProduct(ting) {
        this.products.push(ting);
        this.saveFile(productFile,JSON.stringify(this.products,null, 2));
    }

    deleteProduct(ting) {
        this.products = this.products.filter((x) => x.product != ting.product);
        this.saveFile(productFile, JSON.stringify(this.products));
    }

    findProduct(ting) {
        return this.products.find((x) => ting.product == x.product);
    }
}

module.exports = new DB();