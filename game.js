"use strict"

const prompt = require('prompt-sync')();
const {User} = require('./accounts');
const {choices} = require('./accounts');
// created AI user using mat.floor.random to pick randomly between the choices
// create a function for the user to pick between the choices
// create a function that compares the two choices
// keep score
let numOfPlayers;
let playerOne;
let playerTwo;
let AI;
class Game {
     
     constructor (){
          this.playerOne = new User(prompt("Please enter player one's name "));   
          this.playerTwo = new User (prompt("Please enter player two's name "));
          this.AI = new User('AI');
     }
     start(){
          this.intro();
          this.chooseNumberOfPlayers();
          this.instructions();
          this.listGestureOptions();
          this.chooseGesture();
          this.chooseGestureTwo();
          this.chooseGestureAI();
          console.log(this.playerOne);
          console.log(this.playerTwo);
          console.log(this.AI);
     }
     intro(){   
          console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock.');
          console.log('');
     }
     instructions(){
          console.log(''); 
          console.log('Good Luck!');  
          console.log('The Best of 3 games wins');
          console.log('');
          console.log('Rules');
          console.log('Scissors cuts Paper');
          console.log('Paper covers Rock');
          console.log('Rock crushes Lizard');
          console.log('Lizard poisons Spock');
          console.log('Spock smashes scissors');
          console.log('Scissors decapitates Lizard');
          console.log('Lizard eats Paper');
          console.log('Paper disproves Spock');
          console.log('Spock vaporizes Rock');
          console.log('Rock crushes Scissors');
          console.log('');
     }
     chooseNumberOfPlayers(){
          numOfPlayers = prompt('How many people are playing?');
     }
     listGestureOptions(){
          console.log('Choose 0 for ROCK');
          console.log('Choose 1 for PAPER');
          console.log('Choose 2 for SCISSORS');
          console.log('Choose 3 for LIZARD');
          console.log('Choose 4 for SPOCK');
     }
     chooseGesture(){
          this.playerOne.choice = prompt(`Enter ${this.playerOne.name}'s choice here `)
          switch (this.playerOne.choice){
               case '0':
               this.playerOne.picksRock();
               break;
               case '1':
               this.playerOne.picksPaper();
               break;
               case '2':
               this.playerOne.picksScissors();
               break;
               case '3':
               this.playerOne.picksLizard();
               break;
               case '4':
               this.playerOne.picksSpock();
               break;
               }
     }
     chooseGestureTwo(){
          this.playerTwo.choice = prompt(`Enter ${this.playerTwo.name}'s choice here `)
          switch (this.playerTwo.choice){
               case '0':
               this.playerTwo.picksRock();
               break;
               case '1':
               this.playerTwo.picksPaper();
               break;
               case '2':
               this.playerTwo.picksScissors();
               break;
               case '3':
               this.playerTwo.picksLizard();
               break;
               case '4':
               this.playerTwo.picksSpock();
               break;
               }     
     }
     chooseGestureAI(){
          this.AI.choice = Math.floor(Math.random()*5)
          switch (this.AI.choice){
               case 1:
               this.AI.picksRock();
               break;
               case 2:
               this.AI.picksPaper();
               break;
               case 3:
               this.AI.picksScissors();
               break;
               case 4:
               this.AI.picksLizard();
               break;
               case 5:
               this.AI.picksSpock();
               break;
               }
          }
     checkForWinner(){

     }

     // Use to pick between AI and human for player two
     // pickPlayers (){ 
     // }

} 








module.exports.Game = Game;

