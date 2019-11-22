var http = require("http")
var fs = require("fs")

// Tao server - listioner la 1 callback function, dinh nghia sau khi su ly request xong thi tra ve cai gi
http.createServer(requestCalback).listen(3001);
console.log("Server running ...")

// Listener - callback function
function requestCalback(request, response) {
    // console log request url
    console.log("Request from :" + request.url)
    // Kiem tra URL la kieu GET va la tu trang chu thi tra ve HTML ./html/index.html
    if(request.method == "GET" && request.url == "/") {
        // Tra ve code request va dinh nghia kieu du lieu tra ve la html
        response.writeHead(200, {"Context-Type" : "text/html"});
        // Su dung fs module de doc file HTML 
        // Dung method pipe de doc file, doc xong tu dong va gui ve client thong qua reponse
        fs.createReadStream("./html/index.html").pipe(response);
        // Khong can ket thuc vi pipe tu dong ket thuc sau khi doc het file HTML
    } else {
        // Neu khong phai thi tra ve code 404 va message loi
        response.writeHead(404, {"Context-Type" : "text/plain"});
        // Message loi
        response.write("Error 404: File not found")
        // Ket thuc viec gui respone
        response.end();
    }
}