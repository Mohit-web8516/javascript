// console.log (2 > 1);
// console.log (23 >= 11);
// console.log (1 <= 1);
// console.log (2 < 1);
// console.log (2 == 1);
// console.log (2 != 1);


console.log( null > 0);
console.log( null == 0);
console.log( null >= 0);
console.log( undefined < 0);
console.log( undefined > 0);
console.log( undefined == 0);

/*
the reason is that an equality check == and comparisons >, <, >=, <= work differently 

comparison convert null to a number , treating it as 0.
thats why (3) null >= 0 is true and (1) null > 0 is false.
*/


// strict check "==="

console.log("2" === 2);
