function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        //console.log(username);

    }
        //console.log(website);
        //two()
        
    
}
//one()



if (true) {
    const username = "hitesh"
    if (username==="hitesh"){
        const website = " youtube"
        //console.log(username+website);
    }
    //console.log(website);
    
}
//console.log(website);





// ++++++++++++ interesting +++++++++++++=
console.log(addOne(5));

function addOne(num){       // There is no error.
    return num + 1
}


//console.log(addTwo);

const addTwo = function(num){    // There is error. declarations ke pahale access kr rha hon esliye.
    return num + 2

}
console.log(addTwo(5));   // but baad me karne me koi problem nai hai.


