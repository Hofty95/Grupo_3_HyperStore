const fs = require("fs");
const path = require("path")

module.exports = {
    readJson : (json) => { return JSON.parse(fs.readFileSync(path.resolve(__dirname,json)))},
    writeJson : (json, array) => { return fs.writeFileSync(path.resolve(__dirname, json), JSON.stringify(array, null ,3), "utf-8")}
}