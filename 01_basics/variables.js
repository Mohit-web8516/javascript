const accountId = 12334
let accountEmail = "john@yahoo.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 //not allowed

accountEmail = "hc@bs.com"
accountPassword = "1212344"
accountCity = "noida"
/*
Prefder not to use var 
because of issue in block scope and functional scope 
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])