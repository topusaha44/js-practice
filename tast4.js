// cube number

function cubeNumber(number) {
    if (typeof number !== "number") {
        return 'please give a number'
    } else if (number <= 0) {
        return "provide positive number"
    }else{
        const cube = Math.pow(number,3)
        return cube
    }
}
const result = cubeNumber(4)
console.log(result)

// Match Finder

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string' ) {
        return 'Give me a string number'
    }
    const check = string1.includes(string2)
    return check
}

const string1 = 'Peter parker'
const search = 'pet'
const output = matchFinder(string1,search)
console.log(output)

// Sort Maker

function sortMaker(arr) {
    let sortNum = []
    let kk = arr
    if (kk[0] == kk[1]) {
        return 'equal'
    }
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element <= 0) {
            return 'Invalid Input'
        }else {
            sortNum.push(element)
        }
    }
    sortNum.sort((a, b) => b - a);
    return sortNum
}

const arr = sortMaker([4,4])
console.log(arr)

// Find Address

const objBody = {
    street : 10,
    // house : '15A',
    society : "Earth Perfect"
}

function findAddress(obj) {
    if (typeof obj !== 'object') {
        return 'object needed'
    }else{
        const street = obj.street || '__'
        const house = obj.house || '__'
        const society = obj.society || '__'
        return street + ',' + house + ',' + society
    }
}
const info = findAddress(objBody)
console.log(info)

// Can Pay

function canPay(changeArray, totalDue) {
    if (Array.isArray(changeArray) && !changeArray.length) {
        console.log("This array is empty!");
    }
    let sum = 0
    for (let i = 0; i < changeArray.length; i++) {
        const element = changeArray[i];
        sum = sum + element
    }
    if (sum >= totalDue) {
        return true
    }else if (sum < totalDue){
        return false
    }
    
}

const change = canPay([1,5,5],10)
console.log(change)


// is integer or not 
function isInteger(number) {
    if (typeof number !== 'number'){
        return 'fack you give me number'
    }
    if (number % 1 === 0) {
        return true
    }else{
        return false
    }

}
console.log(isInteger(7.1))

// check the end

const fileName = isjavaScriptFile('pic.js')
console.log(fileName)
function isjavaScriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'you have to give a string'
    }
    if (fileName.toLowerCase().endsWith('Js'.toLowerCase())) {
        return true
    }
}

// mindgame

function mindgame(x) {
    if (typeof x !== 'number' || x <= 0) {
        return 'provide number and posotive number'
    }else{
        const result = (((x * 3) + 10) / 2) - 5
        return result
    }
}
console.log(mindgame(2))

// MindGame 1

function mindgame1(y) {
    if (typeof y !== 'number') {
        return 'provide number'
    }else{
        const differ = Math.abs(y - 7)
        if (differ < 7) {
            return differ
        }else{
            return y *2
        }
    }
}
console.log(mindgame1(17))

// MindGame 2
const input = mindgame2([2, -5, 7, 4, -9, -8])
console.log(input)

function mindgame2(input) {
    let goodData = []
    let badData = []
    for (const element of input) {
        if (element <= 0) {
            badData.push(element)
        }else{
            goodData.push(element)
        }
    }
    const obj = {
        GoodData: goodData,
        BadData: badData
    }
    return obj
}

// MindGame 3

function gemstoDimon(a, b, c) {
    if ((typeof a !== 'number' || a <= 0) || (typeof b !== 'number' || b <= 0) || (typeof c !== 'number' || c <= 0)) {
        return 'fack you'
    }else{
        const fr1 = 21
        const fr2 =32
        const fr3 =43
        const total = (a*fr1) + (b*fr2) + (c*fr3)
        if (total > 2000) {
            return total - 2000
        }else{
            return total
        }
    }
}
console.log(gemstoDimon(9,77,9))



const obj = {
    name: 'Topu',
    age: 23,
    email: 'topu@gmail.com'
}
function detail(obj) {
    const name = obj.name || 'nai'
    const age = obj.age || 'nai'
    const email = obj.email || 'nai'
    return 'Amer nam-' + name+', '+ 'Amer age-'+age+', '+'Amer email -'+email
}
console.log(detail(obj))

// match

const photo = 'img.png'
const extension = ['.jPg', '.png', '.git']
console.log(valid(photo,extension))
function valid(photo,extension) {
    for (let i = 0; i < extension.length; i++) {
        const element = extension[i];
        if (photo.toLowerCase().endsWith(element.toLowerCase())) {
            return 'found'
        }
    } return 'not found'
}


// match 2

const products = [
    {id: 1, name: 'Nokia phon', price: 12000},
    {id: 2, name: 'samsung Laptop', price: 30000},
    {id: 3, name: 'iphon phon', price: 17000},
    {id: 4, name: 'lenovo laptop', price: 20000},
    {id: 5, name: 'realme phon', price: 22000},
]

function match(products, search) {
    let matched = []
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product)
        }
      }
      return matched

}

const result2 = match(products, 'phon')
console.log(result2)

