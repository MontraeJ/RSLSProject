"use strict"
const prompt = require('prompt-sync')();
class User {
   constructor(){
       this.choice = null;
       this.score = 0;
   }
   picksRock(){
       this.choice = choices[0];
   }
   picksPaper(){
       this.choice = choices[1];
   }
   picksScissors(){
       this.choice = choices[2];
   }
   picksLizard(){
       this.choice = choices[3];
   }
   picksSpock(){
       this.choice = choices[4];
   }
};
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
module.exports.User = User;
module.exports.choices = choices;
module.exports.Human = Human;
module.exports.AI = AI;