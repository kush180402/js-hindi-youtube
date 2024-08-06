  // Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);  // object.


let myCreatedDate = new Date("01-14-23")
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getDate());
console.log(newDate.getMonth());


// `${newDate.getDay()} and the time`
newDate.toLocaleString('default',{
  weekday: "long",

}

)

