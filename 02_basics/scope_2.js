function one(){
    const username = "john"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()
if (true){
    const username = " johnnifer"
    if(username === " johnnifer"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++


console.log(addone(5)); //at this declaration it give answer 
function addone(num){
    return num + 1
}

addTwo(5) //at this declaration it will not give answer
const addTwo = function(num){
    return num + 2
}
