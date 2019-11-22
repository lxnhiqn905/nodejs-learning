// Dung fs - filesystem
// Read/Write file
var fs = require("fs")
var path = require("path")

// Ghi ra file output.txt
fs.writeFileSync("./output.txt", "This is output")

// Thuc hanh voi module path
var localPath = "/home/nhilx/nodejs/tuhoc-nodejs/8. lamviecvoifile/input.txt"
// Normalize file pat => Lam cho path tuong thich voi nhieu OS khac nhau
console.log("Normalize path: " + path.normalize(localPath))
// Lay base name - Ten file, khong co duong dan
console.log("Base name: " + path.basename(localPath))
// Lay ten thu muc
console.log("Dir name: " + path.dirname(localPath))
// Lay Exetension file name
console.log("Exetension name: " + path.extname(localPath))

// Dung Global value - La cac bien ma Nodejs cung cap san
console.log("__dirname " + __dirname)
console.log("__filename " + __filename)
