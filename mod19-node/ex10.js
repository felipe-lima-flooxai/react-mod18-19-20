const fs = require("fs")
const files = fs.readdirSync(__dirname)

//console.log(files)

files.forEach(file => console.log(file))