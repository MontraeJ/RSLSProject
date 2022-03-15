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
class Game {
     
     constructor (){
          this.playerOne = new User(prompt("Please enter player one's name "));   
          this.playerTwo = new User (prompt("Please enter player two's name "));
     }
     start(){
          this.intro();
          this.chooseNumberOfPlayers();
          this.instructions();
          this.listGestureOptions();
          this.chooseGesture();
          this.chooseGestureTwo();
          console.log(this.playerOne);
          console.log(this.playerTwo);
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
               this.playerOne.choice ='rock';
               break;
               case '1':
               this.playerOne.choice ='paper';
               break;
               case '2':
               this.playerOne.choice ='sciccors';
               break;
               case '3':
               this.playerOne.choice ='lizard';
               break;
               case '4':
               this.playerOne.choice ='spock';
               break;
               }
     }
     chooseGestureTwo(){
          this.playerTwo.choice = prompt(`Enter ${this.playerTwo.name}'s choice here `)
          switch (this.playerTwo.choice){
               case '0':
               this.playerTwo.choice ='rock';
               break;
               case '1':
               this.playerTwo.choice ='paper';
               break;
               case '2':
               this.playerTwo.choice ='sciccors';
               break;
               case '3':
               this.playerTwo.choice ='lizard';
               break;
               case '4':
               this.playerTwo.choice ='spock';
               break;
               }
     }

     // Use to pick between AI and human for player two
     // pickPlayers (){ 
     // }

} 








module.exports.Game = Game;

