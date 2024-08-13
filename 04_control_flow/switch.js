/*switch (key){
    case value:

       break;

    default:
        break;
}  */

const month = 1

switch (month) {
    case 1:
        console.log("january");
        break;                      // Break case 2 ko print hone se rokta hai break ni rha toh case 2 bhi print hojayega butt default ke sath baysa nai hai.
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        
        break;
}