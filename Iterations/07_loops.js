const myNums = [10, 20, 30, 40];

// const myTotal = myNums.reduce(function(acc, currval)
// {
//     console.log(`acc: ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0 )

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0) //100

console.log(myTotal);


const shoppingCart =[
{
   itemName : "js course",
   price : 2999
},
{
   itemName : "GEN-AI course",
   price : 3999
},
{
   itemName : "python programming course",
   price : 599
},
{
   itemName : "web dev course",
   price : 12999
},
]

const priceToPay = shoppingCart.reduce((acc ,item)=> acc + item.price, 0)

console.log(priceToPay);
