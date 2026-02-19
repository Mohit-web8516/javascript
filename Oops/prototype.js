// let myName = "Robert     "
// let mychannel = "coffee    "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.john = function(){
    console.log(`john is present in all objects`);
}

Array.prototype.Heyjohn = function(){
    console.log(`john says hello`);
}

// heroPower.john()
// myHeros.john()
// myHeros.Heyjohn()
// heroPower.Heyjohn()

// inheritance

const User = {
    name: "tea",
    email: "tea@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "tea and coffee    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"john".trueLength()
"coffee".trueLength()