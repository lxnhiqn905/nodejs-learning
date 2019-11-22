// Test for lastedFilmName
// lastedFilmName duoc hieu nhu la 1 bien toan cuc duoc export, duoc set gia tri o nhung file js ma import no
console.log("Index file...")

var film = require("./film")
console.log("Film name " + film.lastedFilmName) // La rong, vi dang set gia tri rong
var alex = require("./alex")
console.log("Film name " + film.lastedFilmName) // Alex Films, vi duoc set gia tri boi alex.js
var alicia = require("./alicia")
console.log("Film name " + film.lastedFilmName) // Alicia Films, vi duoc set gia tri boi alicia.js
