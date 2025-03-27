//Contenido de app.js 

// console.log("Hello World")

const sum = (a, b) => {
    return a + b
} 
console.log(sum(14,9))



// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//1 EUR (Euro) = 1.07 USD (US Dollar)

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
console.log(fromEuroToDollar(1));

const fromDollarToYen = (valueInDollar) => {
    let valueInYen =  valueInDollar * oneEuroIs.JPY  ;
    return valueInYen;
}
console.log(fromDollarToYen(1));

const fromYenToPound = (valueInYen) => {
    let valueInPoud = valueInYen * oneEuroIs.GBP;
    return valueInPoud;

}
console.log(fromYenToPound(1));



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };