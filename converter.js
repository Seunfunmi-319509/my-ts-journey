const rateConstant = 1300
const exchKgToPounds = 2.20462

function NairatoUSD(amount) {
    return amount / rateConstant
}

const usdToNaira = (amount) =>{
    return amount * rateConstant
}

const celsiusToFahrenheit = (celsius) => {
    return ((celsius * 9 ) / 5) + 32
}

const kgToPounds = (kg) => {
    return kg * exchKgToPounds
}

console.log(celsiusToFahrenheit(0))
console.log(celsiusToFahrenheit(100))
console.log(usdToNaira(NairatoUSD(5000)))
console.log(kgToPounds(1000).toFixed())

