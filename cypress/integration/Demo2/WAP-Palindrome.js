var name = "mom";
		
var temp= "";

for(var i=name.length-1; i>=0; i--) {
    
    var ch= name.charAt(i);
    temp = temp + ch;
}

if(temp==name) {
   console.log('It is a palindrome')
}else {
    console.log('It is not an palindrome')
}


// function checkPalindrome(string){
//     var name = string
		
//     var temp= "";
    
//     for(var i=name.length-1; i>=0; i--) {
        
//         var ch= name.charAt(i);
//         temp = temp + ch;
//     }
    
//     if(temp==name) {
//        console.log('It is a palindrome')
//     }else {
//         console.log('It is not an palindrome')
//     }
// }

// checkPalindrome('mom')