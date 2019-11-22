// Export theo tung function
// create by lxnhinq905
function add2Number(a,b) {
    return a+b;
}

function minus2Number(a,b) {
    return a-b;
}

function times2Number(a,b) {
    return a*b;
}

// Exports cho tung function - ten function export va ten function trong module co the giong nhau
module.exports.addTwoNumber = add2Number;
module.exports.minusTwoNumber = minus2Number;
module.exports.add2Number = add2Number; // Ket qua giong nhu addTwoNumber

// Cung co the exports theo cac duoi day
/*
module.exports = {
    addTwoNumber : add2Number,
     minusTwoNumber : minus2Number,
     add2Number : add2Number
}
*/