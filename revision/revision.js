// var: function-scoped
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (accessible outside block)
}

// let/const: block-scoped
function testLetConst() {
  if (true) {
    let y = 20;
    const z = 30;
    console.log(y, z); //  20, 30
  }
  // console.log(y); Error (not accessible)
}

///////////////////////////////////

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Closure example
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  };
}

const count = outer();
console.log(count()); // 1
console.log(count()); // 2
///////////////////////////////////////////
// Object methods
const obj = { name: "john", age: 21 };
console.log(Object.keys(obj));   // ["name", "age"]
console.log(Object.values(obj)); // ["Mohit", 21]

// Prototype example
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hello, I am ${this.name}`;
};

const p1 = new Person("john");
console.log(p1.greet()); // Hello, I am john


////////////////////////////////

// Promise
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data received!"), 1000);
});

fetchData.then(data => console.log(data)); // Data received!

// Async/Await
async function getData() {
  try {
    const result = await fetchData;
    console.log(result); // Data received!
  } catch (error) {
    console.error(error);
  }
}
getData();


/////////////////////////////////////
/////////////////////////////////////
// DOM manipulation
const heading = document.querySelector("h1");
heading.textContent = "JavaScript Revision Done!";

// Event handling
document.querySelector("button").addEventListener("click", () => {
  alert("Button clicked!");
});

//////////////////////////////////////
//////////////////////////////////////
// Template literals
const name = "Mohit";
console.log(`Hello, ${name}!`);

// Destructuring
const user = { id: 1, username: "coder" };
const { id, username } = user;
console.log(id, username); // 1, coder

// Spread operator
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]
