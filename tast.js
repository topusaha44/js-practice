// some fun
function add(a, b, c, d) {
    var resu = ((a + b) * c) - d
    return resu
}
var final = add(2, 5, 2, 2)
console.log(final)

// slice and splice

const num = [1, 2, 3, 4, 5, 6, 7]
const copyPart = num.slice(1,4)
console.log(copyPart)

const  num2 = [1, 2, 3, 4, 5, 6, 7]
num2.splice(3,3,7,8,9)
console.log(num2)

// Declare multiple object

const shoppingCart = {
    bool : 1,
    pen : 6,
    sunglass : 9,
}

const keys = Object.keys(shoppingCart)
const value = Object.values(shoppingCart)
let kk = []
for (let i = 0; i < keys.length; i++) {
    const element = keys[i];
    kk.push(element)
}
console.log(kk)

// simple function

function add(nu1, nu2) {
    const sum = nu1 +nu2
    return sum
}
const resu1 = add(12,6)
const resu2 = add(12,8)
const fin = resu1 + resu2
console.log(fin)

function bringCake(money) {
    const cakePrice = 10;
    const quantity = money / cakePrice
    return quantity
}
 
const cake = bringCake(100)
console.log('Eating Cake', cake)

// inchtoFoot

function inchtoFoot(inch) {
    var foot = inch /12
    return foot
}
const topuFoot = inchtoFoot(154)
const output = parseFloat(topuFoot.toFixed(1))
console.log(output)

// kg to gram
function kgToGram(kg) {
    const gram = kg * 1000
    return gram
}
const kg = kgToGram(4)
console.log('Gram', kg)

// Miles to Kilometers

function milesToKilo(miles) {
    const kilometers = miles * 3.21868
    return kilometers
}

const kilometers = milesToKilo(7)
console.log(kilometers)

// leap Year\

// program to check leap year three conditions to find out the leap year

function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

checkLeapYear(2000);


