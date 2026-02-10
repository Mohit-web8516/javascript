const user = {
    username: " johnny",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} ,  welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "jennifer"
// user.welcomeMessage()

// console.log(this);

// function tea(){
//     let username = "relox"
//     console.log(this.username); //can't use this inside function

// }

// tea()


/////////////////
// const red = function () {
//     let username = "weaker"
//     console.log(this.username);
// }

const red = () => {
    let username = "weaker"
    console.log(this);
}
// red()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

////////////////////////////////////////////
// const addTwo = (num1, num2) =>  num1 + num2 
// const addTwo = (num1, num2) =>  (num1 + num2) //while use () ,no need of return
const addTwo = (num1, num2) => ({username: "jordan"})

console.log(addTwo(3, 4))



///////////////////////////////////////
