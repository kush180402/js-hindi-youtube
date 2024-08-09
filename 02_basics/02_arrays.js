const marvel_heros =["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros);

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);  // flash.

//concat.

const allHeros =  marvel_heros.concat(dc_heros)  // concat => merge two arrays properly.
console.log(allHeros);

//spread.

const all_new_heros = [...marvel_heros, ...dc_heros]  // it is also same as concat but its spread the arrays like a glass when its broken.
console.log(all_new_heros);

// flat. it is used for spread the elements in one array.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6 , 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);



// from.
console.log(Array.isArray("Hitesh"))  // yaha aaray hai ki nahi.
console.log(Array.from("hitesh"));  // In this .from function convert the string into a array.
console.log(Array.from({name: "hitesh"})) // interesting case.



//of.

let score1 = 100
let score2 = 200     // convert the set of elements into a arrays.
let score3 = 300

console.log(Array.of(score1, score2, score3));



