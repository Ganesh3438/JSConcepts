function add(a, b, c){

    let result = a+b+c;
    return result;

}

// Calling the function add 
// In the below piece of code we are calling the function without passing the parameter. What will be the output for below piece of line?
console.log(add());  // The output will be NaN

console.log(add(10,20,30)); // The output will be 60