var fs = require("fs");

const PATH =__dirname + "/../../data";
const productFile = "/products.json";

class dataBase {
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

    updateProduct(prod) {

        var keys = Object.keys(this.products);
        var prodsArray = this.products

        keys.forEach(function(objKey){
            var objValue = prodsArray[objKey]

            if(objValue.id === prod.id) {
                objValue.product = prod.product
                objValue.price = prod.price
            }
        })

        this.saveFile(productFile, JSON.stringify(prodsArray));
    }

    getProducts() {
        return this.products
    }
};



module.exports = new dataBase();