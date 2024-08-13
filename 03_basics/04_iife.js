// Immediately Invoked Function Expression (IIFE)

//function chai(){
//    console.log(`DB CONNECTED`);
//}
//chai()

//another
(function chai(){
    console.log(`DB CONNECTED`); //() laga ke output. global scope ke pollution ko bachane ke liye hm iife ka use karte hai.
})(); // semicolon is v v imp between two ()().

(function aurcode(){
    console.log(`DB CONNECTED TWO`);   // named iife.
})();

( ()=>{
    console.log(`DB CONNECTED TWO`);  // simple iife.
})();


( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);  // unnammed iife.
})("kushal");
 
