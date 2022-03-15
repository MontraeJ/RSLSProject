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
let gameCount = 0;
class Game {
     
     constructor (){
          this.playerOne = new User(prompt("Please enter player one's name "));   
          this.playerTwo = new User (prompt("Please enter player two's name "));
          this.AI = new User('AI');
     }
     start(){
          this.intro();
          this.chooseNumberOfPlayers();
          this.chooseGestureAI();
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
          numOfPlayers = prompt('How many people are playing? 1 or 2?');
          if (numOfPlayers === '2'){
               this.twoPlayerMode();
          } else if (numOfPlayers === '1'){
               this.singlePlayerMode();
          }
     }
     listGestureOptions(){
          console.log('Choose 0 for ROCK');
          console.log('Choose 1 for PAPER');
          console.log('Choose 2 for SCISSORS');
          console.log('Choose 3 for LIZARD');
          console.log('Choose 4 for SPOCK');
     }
     chooseGesture(){
          this.playerOne.choice = prompt(`Enter ${this.playerOne.name}'s choice here -> `)
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
          this.playerTwo.choice = prompt(`Enter ${this.playerTwo.name}'s choice here -> `)
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
               case 0:
               this.AI.picksRock();
               break;
               case 1:
               this.AI.picksPaper();
               break;
               case 2:
               this.AI.picksScissors();
               break;
               case 3:
               this.AI.picksLizard();
               break;
               case 4:
               this.AI.picksSpock();
               break;
               }
          }
     checkForWinner(){
          //need to account for ties
          if ((this.playerOne.choice === choices[0]) && (this.playerTwo.choice === choices[2] || this.playerTwo.choice === choices[3])){
               this.playerOne.score++;
          } else if ((this.playerOne.choice === choices[1]) && (this.playerTwo.choice === choices[0] || this.playerTwo.choice === choices[4])){
               this.playerOne.score++;
          } else if ((this.playerOne.choice === choices[2]) && (this.playerTwo.choice === choices[1] || this.playerTwo.choice === choices[3])){
               this.playerOne.score++;
          } else if ((this.playerOne.choice === choices[3]) && (this.playerTwo.choice === choices[4] || this.playerTwo.choice === choices[1])){
               this.playerOne.score++;
          } else if ((this.playerOne.choice === choices[4]) && (this.playerTwo.choice === choices[2] || this.playerTwo.choice === choices[0])){
               this.playerOne.score++;
          } else if(this.playerOne.choice === this.playerTwo.choice){
               this.playerOne.score++;
               this.playerTwo.score++;
          } else {this.playerTwo.score++;}
          this.displayScoresTwoPlayers();
          gameCount++;
          if (gameCount <3){
          this.chooseGesture();
          this.chooseGestureTwo();
          this.checkForWinner();
          }else if (gameCount >= 3){
               if (this.playerOne.score < this.playerTwo.score){
                    console.log(`${this.playerTwo.name} Wins!`)
               } else if (this.playerOne.score > this.playerTwo.score){
                    console.log(`${this.playerOne.name} Wins!`)
               }
          }
     } 
     twoPlayerMode(){
          this.instructions();
          this.listGestureOptions();
          this.chooseGesture();
          this.chooseGestureTwo();
          this.checkForWinner();
     }
     singlePlayerMode(){
          this.instructions();
          this.listGestureOptions();
          this.chooseGesture();
          this.chooseGestureAI();
          // need to rework to account for the checkForWinner only works for two player mode 
          this.checkForWinner();
     }
     displayScoresSinglePlayer(){
          console.log(`${this.playerOne.name}'s score -> ${this.playerOne.score}`);
          console.log(`${this.AI.name}'s score -> ${this.AI.score}`); 
     }
     displayScoresTwoPlayers(){
          console.log(`${this.playerOne.name}'s score -> ${this.playerOne.score}`);
          console.log(`${this.playerTwo.name}'s score -> ${this.playerTwo.score}`);
     }
     

}








module.exports.Game = Game;

