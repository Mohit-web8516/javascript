//// singleton
//object.create
/// object literals

const mySum = Symbol("key1")
 
const JsUser = {
    name: "john",
    "full name": "john robert",
    [mySum]: "myKey1",
    age:  11,
    loction : "america",
    email :  "johnyrogbert@gmail.com",
    isLoggedIn : false,
    lastLogininDays : ["tuesday","friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySum])
// JsUser.email = "lollipop@google.com"
// Object.freeze(JsUser)
// JsUser.email= "lollipop@microsoft.com"
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("hello Js user");
}
JsUser.greetingTwo= function(){
    console.log(`hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());