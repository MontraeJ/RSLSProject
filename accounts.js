"use strict"
const prompt = require('prompt-sync')();
class User {
   constructor(){
       this.choice = null;
       this.score = 0;
   }
   picksRock(){
       this.choice = new Rock();
   }
   picksPaper(){
       this.choice = new Paper();
   }
   picksScissors(){
       this.choice = new Scissors();
   }
   picksLizard(){
       this.choice = new Lizard();
   }
   picksSpock(){
       this.choice = new Spock();
   }
}
class Human extends User {
    constructor(name){
        super();
        this.name = name;
        this.choice = '';
    }
    chooseGesture(){
        this.choice = prompt(`Enter ${this.name}'s choice here -> `)
        switch (this.choice){
             case '0':
             this.picksRock();
             break;
             case '1':
             this.picksPaper();
             break;
             case '2':
             this.picksScissors();
             break;
             case '3':
             this.picksLizard();
             break;
             case '4':
             this.picksSpock();
             break;
             default:
             console.log('')
             console.log('Whoops! Try again, you need to enter a number between 0 and 4')
             this.chooseGesture();
             break;
             }
   }
}
class AI extends User {
    constructor(){
        super();
        this.name = 'AI'; 
        this.choice = '';
    }
    chooseGesture(){
        this.choice = Math.floor(Math.random()*5)
        switch (this.choice){
             case 0:
             this.picksRock();
             break;
             case 1:
             this.picksPaper();
             break;
             case 2:
             this.picksScissors();
             break;
             case 3:
             this.picksLizard();
             break;
             case 4:
             this.picksSpock();
             break;
             }}
}
let choices = [
    'rock', 'paper', 'scissors', 'lizard', 'spock'
]
class Gesture {
    constructor(){
        this.name = '';
        this.defeats;
    }
}
class Rock extends Gesture{
    constructor(){
        super();
        this.name = choices[0];
        this.defeats = [choices[2], choices[3]];
    }
}
class Paper extends Gesture{
    constructor(){
        super();
        this.name = choices[1];
        this.defeats = [choices[0], choices[4]];
    }
}
class Scissors extends Gesture{
    constructor(){
        super();
        this.name = choices[2];
        this.defeats = [choices[1], choices[3]];
    }
}
class Lizard extends Gesture{
    constructor(){
        super();
        this.name = choices[3];
        this.defeats = [choices[4], choices[1]];
    }
}
class Spock extends Gesture{
    constructor(){
        super();
        this.name = choices[4];
        this.defeats = [choices[2], choices[0]];
    }
}
module.exports.Human = Human;
module.exports.AI = AI;


