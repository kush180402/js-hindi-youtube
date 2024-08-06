const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));  //for .00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString());  // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); //for indian rupeee count 10,00,000




//*************maths*************** *//

console.log(Math);
console.log(Math.abs(-4)); // convet - value into a plus + value

                          // round used for roundfiger like.
console.log(Math.round(4.3)); // 4.3 => 4 roundfiger me
console.log(Math.round(4.6));  // 4.6 => 5 roundfiger me


                         // In this ceil its always goes for high value.
console.log(Math.ceil(4.2));   // like 4.2 => 5

console.log(Math.floor(4.2)); // its goes for lower value like 4.2 => 4.


console.log(Math.min(4,3,6,8));  // for find low value.
console.log(Math.max(4,5,6,7));  // for find max value.


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);


const min = 10   // used in game
const max = 20

console.log(Math.floor(Math.random() *(max - min + 1)) + min)  // min value 10 hoga esme uuse niche ni aayega value //


