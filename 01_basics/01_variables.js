const accountId = 144553
let accountEmail = "kushallsahu1316@gmail.com"
var accountPassword ="12345"
accountCity = "jaipur"
let accountState;

//accountId = 2// not allowed
accountEmail =" cs20.kushalsahu@gmail.com"
accountPassword ="21212121"
accountCity = "raipur"


console.log(accountId); 
/*
prefer not to use var
because of issue in block scope andfunctional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);