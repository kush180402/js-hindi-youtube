// singleton

// object literals
//Object.create


const mySym = Symbol("key1")


const JsUser = {
    name : "kushal",
    [mySym] : "mykey01",             // use square bracket for symbol.
    age : 22,
    location : "kharsia",
    email : "kushal@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"],
}

console.log(JsUser.email);  // how to access objects.
console.log(JsUser["email"]);  // two types opf access. second one is the best to access.
console.log(JsUser[mySym]);

//change the value.

JsUser.email = "kushal@chatgpt.com"
console.log(JsUser["email"]);   // change the value of the object we can use this functions.


// lock

//Object.freeze(JsUser)  // it is used for loct the object.
JsUser.name = "kushal shau"
console.log(JsUser["name"]);

console.log(JsUser);


//greeting.

JsUser.greeting = function(){
    console.log("hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);  // for greeting.
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




 


