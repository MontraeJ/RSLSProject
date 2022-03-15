"use strict"
// keeps the different users

class user {
   constructor(name, choice){
       this.name = name;
       this.choice = choice;
   }
   picksRock(){
       this.choice = rock;
   }
   picksPaper(){
       this.choice = paper;
   }
   picksScissors(){
       this.choice = scissors;
   }
   picksLizard(){
       this.choice = lizard;
   }
   picksSpock(){
       this.choice = spock;
   }
};




let choices = [
    'rock', 'paper', 'scissors', 'lizard', 'spock'
]

module.exports.user = user;
module.exports.choices = choices;