var calculator = require('./calculator')

// Su dung function export thong qua ten da dinh nghia
console.log(calculator.addTwoNumber(5,2))
console.log(calculator.minusTwoNumber(5,2))
console.log(calculator.add2Number(5,2))

// Su dung function export thong qua ten da dinh nghia
var calculatorModule = require('./calculator-module')
console.log(calculatorModule.add2Number(10,2))
console.log(calculatorModule.minus2Number(10,2))
console.log(calculatorModule.times2Number(10,2))
