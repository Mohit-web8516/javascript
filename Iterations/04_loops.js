const coding = ["js","c++","java","python"]

// coding.forEach(   function (item){
//     console.log(item);
// })



///////////////////////Using arrow function

// coding.forEach((item) => {
//    console.log(item);
// })


// /////////////////////////////
// coding.forEach((item, index, arr) =>{
//     console.log(item, index, arr);
// })

///////////////////////////////////
const myCoding = [{

    languageName : " javascript",
    languageFileName: "js"
}, {

    languageName : " java",
    languageFileName: "java"
},
{

    languageName : " pythyon",
    languageFileName: "py"
}
    
]
myCoding.forEach((item) => {
    console.log(item.languageFileName);
    console.log(item.languageName);
})