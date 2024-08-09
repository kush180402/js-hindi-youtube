// array

const myArr  = [0,1,2,3,4,5]
const myHeros =["shaktiman","naagraj"]  // example of array

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[0]);    // for calling he function through indexing number.

// Array method

myArr.push(6)         // push is used to aad a new element .
myArr.push(7)

myArr.pop()          // pop is used for remove the last element.


myArr.unshift(0)    // unshift is used for add a new element in starting.


myArr.shift()       // shift is used for shift the all element in the left.

console.log(myArr.includes(9));  //FALSE because there is no 9 value in the element.
console.log(myArr.includes(5));  // True

console.log(myArr.indexOf(9));   //-1
console.log(myArr.indexOf(3));  // 3


const newArr = myArr.join()

console.log(myArr);

console.log(typeof newArr);




console.log(myArr);  



// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

    
const myn2 = myArr.splice(1,3)
console.log("c",myArr);      //   slice() creates a new array with a portion of elements copied from the original array, 
                               //   while splice() mutates the original array itself by removing, replacing or adding elements to it.
console.log(myn2);






         



