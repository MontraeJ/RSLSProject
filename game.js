"use strict"

//TODO list:
//Incorporate inheratance

const prompt = require('prompt-sync')();
const {User} = require('./accounts');
const {choices} = require('./accounts');
let numOfPlayers;
let playerOne;
let playerTwo;
let AI;
let gameCount = 0;
class Game {
     
     constructor (){
          this.AI = new User('AI');
     }
     start(){
          this.intro();
          this.chooseNumberOfPlayers();
     }
     intro(){  
          console.log(''); 
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
          }else if (numOfPlayers !== ('1' || '2')){
               console.log('');
               console.log('Must select either "1" or "2"');
               console.log('');
               this.chooseNumberOfPlayers();
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
               default:
               console.log('')
               console.log('Whoops! Try again, you need to enter a number between 0 and 4')
               this.chooseGesture();
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
               default:
               console.log('')
               console.log('Whoops! Try again, you need to enter a number between 0 and 4')
               this.chooseGestureTwo();
               break;
               }     
               console.log('')
               console.log(`${this.playerOne.name}'s choice was -> ${this.playerOne.choice}`)
               console.log(`${this.playerTwo.name}'s choice was -> ${this.playerTwo.choice}`)
               console.log('')
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
               console.log('')
               console.log(`${this.playerOne.name}'s choice was -> ${this.playerOne.choice}`)
               console.log(`${this.AI.name}'s choice was -> ${this.AI.choice}`)
               console.log('')
          }
     checkForWinner(){
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
               if (this.playerOne.score === this.playerTwo.score){
                    console.log('')
                    console.log('Tie Game!')
                    console.log('Play again to settle the score')
                    console.log('')
                    gameCount = 0;
                    this.playerOne.score = 0;
                    this.playerTwo.score = 0;
                    this.chooseGesture();
                    this.chooseGestureTwo();
                    this.checkForWinner();
               }
             
          }
     } 
     checkForWinnerSinglePlayer(){
           if ((this.playerOne.choice === choices[0]) && (this.AI.choice === choices[2] || this.AI.choice === choices[3])){
               this.playerOne.score++;
          } else if ((this.playerOne.choice === choices[1]) && (this.AI.choice === choices[0] || this.AI.choice === choices[4])){
               this.playerOne.score++;
          } else if ((this.playerOne.choice === choices[2]) && (this.AI.choice === choices[1] || this.AI.choice === choices[3])){
               this.playerOne.score++;
          } else if ((this.playerOne.choice === choices[3]) && (this.AI.choice === choices[4] || this.AI.choice === choices[1])){
               this.playerOne.score++;
          } else if ((this.playerOne.choice === choices[4]) && (this.AI.choice === choices[2] || this.AI.choice === choices[0])){
               this.playerOne.score++;
          } else if(this.playerOne.choice === this.AI.choice){
               this.playerOne.score++;
               this.AI.score++;
          } else {this.AI.score++;}
          this.displayScoresSinglePlayer();
          gameCount++;
          if (gameCount <3){
          this.chooseGesture();
          this.chooseGestureAI();
          this.checkForWinnerSinglePlayer();
          }else if (gameCount >= 3){
               if (this.playerOne.score === this.AI.score){
                    console.log('')
                    console.log('Tie Game!')
                    console.log('Play again to settle the score')
                    console.log('')
                    gameCount = 0;
                    this.chooseGesture();
                    this.chooseGestureAI();
                    this.checkForWinnerSinglePlayer();
               }
               
          }
     }
     twoPlayerMode(){
          console.log('Two Player mode selected');
          this.playerOne = new User(prompt("Please enter player one's name ")); 
          this.playerTwo = new User (prompt("Please enter player two's name "));
          this.instructions();
          this.listGestureOptions();
          this.chooseGesture();
          this.chooseGestureTwo();
          this.checkForWinner();
          this.displayWinnerTP();
     }
     singlePlayerMode(){
          console.log('Single Player mode selected')
          
          this.playerOne = new User(prompt("Please enter player one's name ")); 
          this.instructions();
          this.listGestureOptions();
          this.chooseGesture();
          this.chooseGestureAI();
          this.checkForWinnerSinglePlayer();
          this.displayWinnerSP();
     }
     displayScoresSinglePlayer(){
          console.log(`${this.playerOne.name}'s score -> ${this.playerOne.score}`);
          console.log(`${this.AI.name}'s score -> ${this.AI.score}`); 
     }
     displayScoresTwoPlayers(){
          console.log(`${this.playerOne.name}'s score -> ${this.playerOne.score}`);
          console.log(`${this.playerTwo.name}'s score -> ${this.playerTwo.score}`);
     }
     displayWinnerSP(){
          if (this.playerOne.score < this.AI.score){
               console.log(` Sorry ${this.AI.name} WINS`)
          } else if (this.playerOne.score > this.AI.score){
               console.log(`${this.playerOne.name} WINS!`)
          }
     }
     displayWinnerTP(){
          if (this.playerOne.score < this.playerTwo.score){
               console.log('')
               console.log(`${this.playerTwo.name} WINS!`)
               console.log('')
          } else if (this.playerOne.score > this.playerTwo.score){
               console.log('')
               console.log(`${this.playerOne.name} WINS!`)
               console.log('')
          }
     }
}

module.exports.Game = Game;

