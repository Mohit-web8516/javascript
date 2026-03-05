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
const obj = { name: "Mohit", age: 21 };
console.log(Object.keys(obj));   // ["name", "age"]
console.log(Object.values(obj)); // ["Mohit", 21]

// Prototype example
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hello, I am ${this.name}`;
};

const p1 = new Person("Mohit");
console.log(p1.greet()); // Hello, I am Mohit

