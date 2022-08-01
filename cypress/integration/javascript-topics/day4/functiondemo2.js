// How to give default values when you dont pass any value under function

function add(a=0, b=0, c=0){

let result = a+b+c;
return result;

}

// Calling the function without passing values
console.log(add()); // The output will be 0 (0+0+0 =  0)
console.log(add(10, 20)); // The output will be 30 (10+20+0)