// find the square of a number
function square(n){
    return n * n ;
}

// find the cube of a number
function cube(n){
    return n * n * n;
}

// find the sum of anything of two numbers

function sunOfSomething(a,b,callback){
    console.log(callback)
    let var2 = callback(b); 
    let var1 = callback(a); 

    return var1+var2;
}

// print the sum of square of two numbers
console.log(sunOfSomething(2,2,square));  // passing a function as callback


// print the sum of cube of two numbers
console.log(sunOfSomething(2,2,cube));
