function testDebbuger(){
    var x = 10;
    x = x + 2; 
    x = x + 3;
    debugger
    aCallbackFunction(function() {
        console.log("Finished!")
    })
}

// callback function
function aCallbackFunction(callback) {
    debugger
    console.log("In aCallbackFunction...")
    setTimeout(callback, 2000)
}

// Testing
testDebbuger()

// Run node inspect index.js
// Continue : c
// Next : n
// List source code - 5 dong xung quanh debugger: list(5)
// View value: repl -> ten bien
// Cancel: Ctrl + C