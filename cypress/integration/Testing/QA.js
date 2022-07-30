var domain = "java";

var set = new Set();

var sb = new String();

for(var i=0; i<domain.length; i++){

    var ch = domain.charAt(i);
    

    if(set!=(ch)){
        sb = set.add(ch);
        
    }

}

console.log(sb)

