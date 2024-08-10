function sayMyName() {
    console.log("k");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");   
}

//sayMyName()   //basics.

//function addTwonumbers(number1, number2){  // parameters.
//    console.log(number1 + number2);
//}

//addTwonumbers(3,4)     // 7   // arguments.
//addTwonumbers(3,"4")    // 34


function addTwonumber(number1, number2){
    //let result = number1 + number2
    //return result

    return number1 + number2
}
//const result = addTwonumber(3,5)
//console.log("result:", result);

//method


/*function loginUserMessage(username){
    if(username=== undefined){      // also we can write => !username.
        console.log("please enter a username");
        return
    }


    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage());  //undefined.*/




/*function loginUserMessage(username = "sam"){
    if(username=== undefined){     
        console.log("please enter a username");
        return
    }


    return `${username} just logged in`
}
console.log(loginUserMessage("kushal"));*/





// FOR PROJECT.

function calculateCartPrice(num1){
    return num1
}
//console.log(calculateCartPrice(200,300,400))   // in this we can take only one value.

//anoher

function calculateCartPrice(...num1){       //...=> rest operator and also spread operator.
    return num1
}
//console.log(calculateCartPrice(200,300,400))   





const user ={
    username:"hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}

//handleObject(user)    // method 1

// method 2

handleObject({    
    username:"kushal",
    price:399,
})

// another.
const myNewArray =[200,400,100,600,700]

function returnSecondValue(getArray){
    return getArray[3]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));













