var str = "Hi welcome to javascript to users....";
var str1 = ' Great to learn all these thinsg. Wow......';
console.log(str.length);

console.log('Lower case:'+ " "+  str.toLowerCase()) // hi welcometo javascript

console.log('Upper case:'+ " "+ str.toUpperCase())  // HI WELCOME TO JAVASCRIPT

console.log('Includes usage:'+ " "+ str.includes('Hi')); // true

console.log('Start-with:'+ " "+ str.startsWith('Hi'))  // true

console.log('ends-with:'+ " "+ str.endsWith('javascript'))  // true

console.log('Search:'+ " "+ str.search('welcome'))  // 3

console.log('match:'+ " "+ str.match(/to/g)) // to to 

console.log('indexOf:'+ " "+ str.indexOf('to')) // 11

console.log('lastIndexOf:'+ " "+ str.lastIndexOf('to')) // 25

console.log('replace:'+ " "+ str.replace('javascript', 'java')) //  Hi welcome to java to users

console.log('trim:'+ " "+ str.trim('javascript')) //  Hi welcome to javascript to users

console.log('charAt:'+ " "+ str.charAt(3)) //  w

console.log('concat:'+ " "+str.concat(str1)) //  Hi welcome to javascript to users.... Great to learn all these thinsg. Wow......

console.log('concat two strings with manual approach:'+ " "+ str + str1) //  Hi welcome to javascript to users

console.log('split:'+" "+ str.split('i')) //  H, welcome to javascr,pt to users.... whenever it find i replace with ,

console.log('repeat:'+" "+ str.repeat('4')) // it will repeat the string with 4 times

console.log('split:'+" "+ str.slice(3, 10)) //  welcome

console.log('substring:'+" "+ str.substring(2, 8)) //  welco

var a = 10;
var b = a.toString()
console.log(typeof b) // string 

var x = 2;
var y = "2";
console.log(x==y)

console.log(x===y) // === checks type of the value as well


