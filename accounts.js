"use strict"
// keeps the different users
const prompt = require('prompt-sync')();

class User {
   constructor(name){
       this.name = name;
       this.choice = null;
       this.score = 0;
   }
   picksRock(){
       this.choice = 'rock';
   }
   picksPaper(){
       this.choice = 'paper';
   }
   picksScissors(){
       this.choice = 'scissors';
   }
   picksLizard(){
       this.choice = 'lizard';
   }
   picksSpock(){
       this.choice = 'spock';
   }
};




let choices = [
    'rock', 'paper', 'scissors', 'lizard', 'spock'
]

module.exports.User = User;
module.exports.choices = choices;