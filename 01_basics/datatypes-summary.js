// Two types of datatypes
// primitives and non-primitives

// 7 Types : String, Number, Boolean, Null, undefined, Symbol, BigInt.


// Reference (Non primitive)

// Array, Object, Function.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 9743298742397n  //  for bigInt


const heros = ["shaktiman", "naagraj", "doga"]
let myObj ={

    name: "hitesh",
    age: 22,
}   

const myFunction = function(){
    console.log("hello world")
}
                                     //link for study in details//
console.log(typeof bigNumber);   //https://262.ecma-international.org/5.1/#sec-11.4.3//
console.log(typeof outSideTemp);

// undefined => "undefined"
// null => "object"
// boolean => "boolean"
// number => "number"
// string => "string"
// object (native and does not implement [[call]]) => "object"
// object (native or host and does implement [[call]]) => "funcion"
// object ( host and does not implement [[call]]) => implementation- defined except may not be "undefined", "boolean","number", "stringh".


// non primitive written type object



//**************************************//

// stact(Primitive),   heap(non-primitive)
   //copy                   //reference


let myYoutubename = "hiteshchaudharydotcom"

let anothername = myYoutubename
anothername ="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne ={

    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "hitesh@googel.com" 
userTwo.upi ="xyz"

console.log(userOne.email);
console.log(userTwo.email);
console.log(userTwo.upi);
console.log(userOne.upi);






   


