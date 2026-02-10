//  function myname(){
//     console.log("R");
//     console.log("O");
//     console.log("B");
//     console.log("E");
//     console.log("R");
//     console.log("T");
// }
// myname()


function addTwoNumbers(number1, number2){
  
    let result = number1 + number2
    return result
} 

const result =  addTwoNumbers(3, 5)   

// console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("huzar"))
console.log(loginUserMessage("john"))