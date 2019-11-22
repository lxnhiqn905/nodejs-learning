var http = require("http")
var fs = require("fs")
var connect = require("connect")


// Using module connect thay cho 1 callback function
requestCallback = connect();
// After received respoone. to do 2 task: task 1, task2 - 2 callback function
// Khi chay den use() thi thuc hienj function cua task 1
requestCallback.use(task1);
// Khi chay den use() thi thuc hienj function cua task 2
requestCallback.use(task2);

function task1(request, response, next) {
    console.log("Do task 1")
    next(); // Cho phep cac task tiep theo chay tiep
    // Neu khong co next() thi se waiting forever ...
}

function task2(request, response, next) {
    console.log("Do task 2")    
    next(); // Chay tiep task tiep theo de khong bi dung lai
}


// Dinh nghia 1 cho 1 router
requestCallback.use("/about", clickAbout);
// Xu ly cho router /about
function clickAbout(rquest, response) {
    console.log("Clicked to About")
    response.end();
}

// Dinh nghia 1 cho 1 router
requestCallback.use("/contact", clickContact);
// Xu ly cho router /about
function clickContact(rquest, response) {
    console.log("Clicked to Contact")
    response.end();
}

http.createServer(requestCallback).listen(3001);
console.log("Server running ...")