// Immediately Invoked Function Expressions(IIFE)

(function tea(){
    console.log(`DB CONNECTED`); //added parenthesis //to avoide global variables pollution

})(); // here semi colon is imp to end the function

//OR
( function decode ()  {
    //named iife
    console.log(`DB CONNECTED TWO `);
} )();


//OR

( (name)  => {
    //unnamed iife
    console.log(`DB CONNECTED TWO  ${name}`);
} )('john')
