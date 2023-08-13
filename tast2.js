// get odd sum of an array

const number = oddNumSum([12, 65, 45, 78, 32, 45, 9])

function oddNumSum(number) {
    const oddNum = []
    let sum = 0
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element % 2 == 1) {
            oddNum.push(element)
        }
    }
    for (let i = 0; i < oddNum.length; i++) {
        const element = oddNum[i];
        sum = sum + element
        
    }
    return sum
}
console.log(number)

// factorial

function factorial(num) {
    let factorial = 1
    for (let i = num; i >= 1; i--) {
        factorial = factorial * i
    }
    return factorial
}

const factorialnum = factorial(4)
console.log(factorialnum)

// what does includess and indexof do / startwith / endwith / split / Math / Swap

const lyrics = 'Tumi bondu kala paki ami jeno ki'
const search = 'kaLa'
const oneLine = lyrics.toLowerCase().includes(search.toLowerCase())
console.log(oneLine)

// indexof

if (lyrics.indexOf('kala') !== -1) {
    console.log('found')
}else{
    console.log('not found')
}

// startwith / endwith
console.log(lyrics.startsWith('tumi'))

const fileName = 'book.pdf'
console.log(fileName.endsWith('pdf'))

// split

const lyrics1 = 'Tumi bondu kala. paki ami jeno ki'
const part = lyrics1.split(' ')
const sen = lyrics1.split('.')
const char = lyrics1.split('')
console.log(part,sen,char)

// Math
// pow
const math = Math.pow(2,5)
console.log('pow',math)

// abs
const valu1 = 25
const valu2 = 42
const gap = Math.abs(valu1 - valu2)
if(gap > 5){
    console.log('hmm')
}else{
    console.log('No')
}

// random
for (let i = 0; i <= 10; i++) {
   const random = Math.round(Math.random()*6)
    console.log('Random',random)
}

// 3 way to swap

let swap1 = 10;
let swap2 = 15;
// 1st
// let temp = swap1
// swap1 = swap2
// swap2 = temp
// console.log(swap1,swap2)

// 2nd
// [swap1,swap2] = [swap2, swap1];
// console.log(swap1,swap2)

// 3rd
// swap1 = swap1 + swap2
// swap2 = swap1 - swap2
// swap1 = swap1 - swap2
// console.log(swap1,swap2)

// Largest element of an array

const mark = Largest([11, 13, 44, 55, 77, 88, 94])
console.log('Largest',mark)
function Largest(mark) {
    let max = mark[0]
    for (let i = 0; i < mark.length; i++) {
        const element = mark[i];
        if (element > max) {
            max = element
        }
        
    }
    return max
}

// Reverse a string

const text = reverseText('Doing some thing to achive something')
console.log(text)
function reverseText(text) {
    let reverse1 = ''
    for (let i = text.length-1 ; i >= 0 ; i--) {
        const element = text[i];
       reverse1 = reverse1 + element 
    }
    return reverse1
}

// average of an array

const num = name([1,2,3,4,5,6,7,8,9])
function name(params) {
    let sum = 0
    const average = params.length
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        sum = sum+ element
        
    }
    return sum / average
}
console.log(num)