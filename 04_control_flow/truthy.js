const userEmail = []

if (userEmail){
    console.log("got user email");
    
}else {
    console.log("dont have user email");
    
}


// falsy values
// false, 0, -0, bigint, 0n, "", null, undefined, NaN.

// truthy values
// "0",'false', " ", [], {}, function(){}.

//if (userEmail.length === 0){
//    console.log("Array is empty");
    
//}

const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
      console.log("Object is empty");
      
}



// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10      //  ?? null, undefined ko print na karke number ko print karta hai.
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

//console.log(val1);



//Terniary Operator.
// comndition ?true :false

const iceTeaPrice = 70
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80")



