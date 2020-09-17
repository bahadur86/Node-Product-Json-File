const fs = require('fs');
const path = require("path");
const dirPath = require('../util/path')
const products = [];
const filePath = path.join(dirPath, 'data', 'products.json')

module.exports = class Product {

    constructor(newTitle) {
        this.title = newTitle
    }

    save() {
        //products.push(this);

        fs.readFile(filePath, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }

            products.push(this)
            fs.writeFile(filePath, JSON.stringify(products), (errNew) => {
                console.log(errNew)
            })
        })
    }

    static fetchAll(callback) {

        fs.readFile(filePath, (err, fileContent) => {
            if (err) {
                console.log('hello');
                callback([]);
            } else {
                callback(JSON.parse(fileContent))
            }
        })


    }

}