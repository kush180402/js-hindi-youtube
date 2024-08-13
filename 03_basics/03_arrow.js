const user = {
    username: "kushal",
    price: 999,

    welcomeMessage: function(){
        //console.log(`${this.username},welcome to website`);
        //console.log(this);
    }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);    // output = {} because there is no value in global.

//function chai(){
//    let username = "kushal"
//    console.log(this.username);
//}
//chai()

//const chai = function() {
//    let username = "hitesh"
//    console.log(this.username);
//}
//chai()

const chai = ()=> {
    let username = "hitesh"
    console.log(this);
}
//chai()

//const addTwo =(num1, num2) => {
//    return num1 + num2
//}
//console.log(addTwo(3,4));

//const addTwo =(num1, num2) =>  (num1 + num2) // {} me return use karna pdega but in () we dont need to use return.

const addTwo = (num1, num2) =>({username:"hitesh"})


console.log(addTwo(3,4))


    




