// import http
var http = require("http")

// tao server
// Input cho createServer la 1 listener - callback function - Nghia la nhan duoc request thi tra ve cai gi, cai gi do duoc dinh nghia o request callback
// Listern at 3001
http.createServer(requestCallback).listen(3001);
console.log("Server running ...")


// Dinh nghia callback function
// Input la request va respone
function requestCallback(request, respone) {
    // Server nhan request thi ghi ra URL
    console.log("Request from " + request.url);
    // Set gi do vao respone tra loiw
    respone.writeHead(200, {"Context-Type": "text/plain"})
    respone.write("This is respone from server")
    respone.end()
}
