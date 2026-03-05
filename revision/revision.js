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
