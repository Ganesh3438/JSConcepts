// ---> What is Object?
// Object is nothing but collection of data.

// In javascript the objects are little different.

// Let say for example I am holding some data like

// let person = {

//  fName : "Mohan",
//     loc: "Viskahapatnam",
//     mobile: 70138072,
//     status: false,
//     address: {
//         area: "Urvasi",
//         city: "Viskahapatnam",
//         pincode: 530008
//     }

// }

// // How to read the properties for person object is:
// // console.log(person)
// // console.log(typeof(person));
// // console.log(person.fName)   // Mohan
// console.log(person.address.area) // Urvasi
// console.log(person.address["area"]) // Urvasi

// 2. What is functions?
// --> Functions are set of statements that re-group together.
// . The purpose of function is to reuse 

// . How to write/create function?
// Syntax: function {

// }

// The above syntax is anonymous function. (It means no name for the function)

// . Creating function with name please find the below syntax:

// Syntax:  function emi() {

// }

// Note: In the above syntax emi will be the name of the function.

// Note: The above function are created called non parameter function.

// ---> How to create parameterized function?
// Syntax: function add(a, b){

// console.log(a + b);

// }

// Note: Now if you want to call the "add" function with in the program. Please find the below piece of code for your reference.

// add(10, 20);

// --> Function expression concepts.
// Note: Javascripts says you can also function can store into one variable.

// Syntax: let x = function add() {

// }

// Note: If you are using function expressions then we can create anonymous function(It means without giving function name)

// Ex: let x = function {

// }

// --> Arrow function:
// Note: Arrow and normal functions both are same.

// Syntax: let x = () =>{
        
//         }

// Interview Question: function sum(a, ...b){

// }

// ... means variable arguments.

// -> Variable arguments means let say for example I am passing sum(10,20,30,40,50)

// 10 will go into variable a and rest of the values(20,30,40,50) will be in b


// ---> In javascript what ever we create it is object. For example

// Object --> Object
// function --> Object
// Array ---> Object

// Note: Any data type which is not primitive will be Object.

// ---> Example for functions
// function add(){
//     console.log('Result is 20');

// }

// add()  // Result is 20

// console.log(add()); // Result is 20 undefined

// // Note: If your function is returning something then we can write in console.log(), If not it will return undefined

// // console.log(typeof add())

// ---> Example 2:
// function add(a, b, c){

//     let result = a+b+c;
//     return result;

// }

// // Calling the function add 
// // In the below piece of code we are calling the function without passing the parameter. What will be the output for below piece of line?
// console.log(add());  // The output will be NaN
// console.log(add(10,20,30)); // The output will be 60


// Example 3: 

// // How to give default values when you dont pass any value under function

// function add(a=0, b=0, c=0){

// let result = a+b+c;
// return result;

// }

// // Calling the function without passing values
// console.log(add()); // The output will be 0 (0+0+0 =  0)
// console.log(add(10, 20)); // The output will be 30 (10+20+0)











