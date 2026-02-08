//Primitive DataTypes

// 7 types : string,number ,boolean ,null , undefined ,symbol,BigInt.

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null 
// let userEmail;

const id = Symbol ('123')
const anotherId = Symbol ('123')

console.log(id === anotherId);

// const bigNumber = 365465645648767546785n







// Reference (Non primitive datatypes)

//Array , objects , functions.

const heros = ["shaktiman","naagraj", "doga"]
let myObj = {
    name : "john",
    age: 22,
}

const myFunction = function(){
    console.log ("hello world");
}
console.log(typeof bigNumber); ///undefined
console.log(typeof myFunction); ///function
console.log(typeof anotherId); ///symbol