var name = "java";

var temp = "";

var set = new Set();

for(var i=0; i<name.length; i++){

 var ch = name.charAt(i);

 if(set.includes(ch) == false){
    set.add(ch);
    set.push(ch);
 }

 

}

console.log(set)