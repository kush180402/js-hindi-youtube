//const tinderUser = new Object()  // singletern object.
const tinderUser = {}   // non- singletern object.

tinderUser.id = "123abc"
tinderUser.name = "kushal sahu"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "kushal@123.com",
    fullname: {
        userfullname:{
            firstname: "kushal",
            lastname: "sahu",
        }
    }

}

//console.log(regularUser.fullname.userfullname.lastname);  // we can access.


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

//const obj3 ={obj1, obj2}
//console.log(obj3);

//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);    // This is good method // object.assign.

const obj3 = {...obj1, ...obj2}
//console.log(obj3);         // MOST use ... spread method.


const user = [
    {
        id: 1,
        email: "kushal@gmail.com"
         
    },
    {
        id: 1,
        email: "kushal@gmail.com"
         
    },
    {
        id: 1,
        email: "kushal@gmail.com"
         
    },
]


user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // for calling the all keys.
console.log(Object.values(tinderUser));  // for calling the all values.
console.log(Object.entries(tinderUser));  // for calling the both with string.


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check karta hai ki wha hai ki nahi.






