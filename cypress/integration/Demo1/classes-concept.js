// 1. Creating class
class Mobile{
   
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    calling(){
        console.log("calling to friend");
    }

    playGames(){
        console.log('Playing games');
    }
}

// 2. creating/instantiate
let redmi = new Mobile('Redmi', 'Black');
 console.log(redmi.color);
 console.log(redmi.name)
 redmi.calling();