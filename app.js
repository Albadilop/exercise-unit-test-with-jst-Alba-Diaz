
let oneEuroIs = {
    "USD": 1.07, 
    "JPY": 156.5, 
    "GBP": 0.87, 
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const fromDollarToYen = (valueInDollar) => {
    let valueInYen =  valueInDollar / oneEuroIs.USD * oneEuroIs.JPY  ;
    return valueInYen;
}


const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen / oneEuroIs.JPY * oneEuroIs.GBP;
    return valueInPound;

}
console.log(fromEuroToDollar(10));
console.log(fromDollarToYen(10));
console.log(fromYenToPound(1));



module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};