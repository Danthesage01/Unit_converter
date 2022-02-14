let input = Math.floor(Math.random() * 1000) + 1
let number = document.getElementById("number")
number.textContent = input
let result = document.getElementById("result-one")
let result2 = document.getElementById("result-two")
const result3 = document.getElementById("result-three")
const feet = 3.28084
const meter = 0.3048
const gallon = 0.264172
const liter = 3.785411784
const kilogram = 0.45359237
const pound = 2.2046226218
const meterToFeet = input * feet
const feetToMeter = input * meter
const literToGallon = input * gallon
const gallonToLiter = input * liter
const kilogramToPound = input * pound
const poundToKilogram = input * kilogram

console.log(kilogramToPound)
console.log(poundToKilogram)

result.textContent = `${input} meters = ${meterToFeet.toFixed(3)} feet | 
                        ${input} feet = ${feetToMeter.toFixed(3)} meters`
result2.textContent = `${input} liters = ${literToGallon.toFixed(3)} gallons | 
                        ${input} gallons = ${gallonToLiter.toFixed(3)} liters`
result3.textContent = `${input} Kilos = ${kilogramToPound.toFixed(3)} pounds | 
                        ${input} pounds = ${poundToKilogram.toFixed(3)} kilos`

