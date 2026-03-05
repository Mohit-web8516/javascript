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

