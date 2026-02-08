// const name = "john"
// const repoCount = 30

// console.log(name  +   repoCount  +" value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//second way to define string

const gameName = new String('johnic-roy')
console.log(gameName);

// console.log(gameName[3]);

// console.log(gameName.__proto__);

// console.log(gameName.length); 
// console.log(gameName.toUpperCase()); 

console.log(gameName.charAt(2));

console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8 , 4)
console.log(anotherString);


const newStringOne = "     johnny       "
// console.log(newStringOne);
// console.log(newStringOne.trim()); 
// console.log(newStringOne.trimStart()); 
// console.log(newStringOne.trimEnd()); 

const url = "https://john.com/john%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('john')) //tells about the value present or not!

console.log(gameName.split('-'));
