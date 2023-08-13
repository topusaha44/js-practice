// solve how to add two string 

const firstName = 'Topu'
const lastName = 'Saha'
const fullName = firstName + ' ' + lastName
console.log(fullName)

// solve toFixed

const num1 = 0.1
const num2 = 0.2
let sum = num1 + num2
sum = parseFloat(sum.toFixed(1))

console.log(sum)

// solve how to find odd and even number

const number = [1,2,3,4,5,6,7,8,9]

function num(params) {
    let even = []
    let odd = []
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        if (element % 2 == 0) {
            even.push(element)
        }else{
            odd.push(element)
        }
    }
    const obs = {
        evennumber : even,
        oddNumber : odd
    }
    return obs
}
const result = num(number)
console.log(result)

// understanding break and continue

const items = ['pen', 'book', 'mouse', 'sunglass', 'bottle']
for (let i = 0; i < items.length; i++) {
    const element = items[i];
    if (element == 'mouse') {
        break
    }
    console.log(element)
}

const number2 = [45, 87, 89, 56, 32, 51, 25, 33]
let busket = []
for (let i = 0; i < number2.length; i++) {
    const element = number2[i];
    if (element < 50) {
        busket.push(element)
        continue
    }
    
}
console.log(busket)

// revere way

const valu = 10

for (let i = valu; i >= 1; i--) {
    console.log(i)
    
}