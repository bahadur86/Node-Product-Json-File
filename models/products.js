const fs = require('fs');
const path = require("path");
const dirPath = require('../util/path')
const products = [];
const filePath = path.join(dirPath, 'data', 'products.json')

const globalReadFile = callback => {
    fs.readFile(filePath, (err, fileContent) => {
        if (err) {
            callback([]);
        } else {
            callback(JSON.parse(fileContent))
        }
    })
}

module.exports = class Product {

    constructor(newTitle) {
        this.title = newTitle
    }

    save() {
        globalReadFile(products => {
            products.push(this)
            fs.writeFile(filePath, JSON.stringify(products), (errNew) => {
                console.log(errNew)
            })
        })
    }

    static fetchAll(callback) {

        globalReadFile(callback);


    }

}