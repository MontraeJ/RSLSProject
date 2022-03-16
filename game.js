"use strict"
const prompt = require('prompt-sync')();
const {Human} = require('./accounts');
const {AI} = require('./accounts');
const {choices} = require('./accounts');
class Game {  
     constructor (){
          this.numOfPlayers = null;
          this.playerOne = null;
          this.playerTwo = null;
          this.gameCount = 1;
     }
     start(){
          this.intro();
          this.chooseNumberOfPlayers();
          this.instructions();
          this.listGestureOptions();
          this.playerOne.chooseGesture();
          this.playerTwo.chooseGesture();
          this.checkForWinner();
          this.displayWinner();
     }
     intro(){  
          console.log(''); 
          console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock.');
          console.log('');
     }
     instructions(){  
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
          console.log('How many people are playing?');
          this.numOfPlayers = prompt('Use the number keys to select either "1" or "2" ');
          if (this.numOfPlayers === '2' || this.numOfPlayers === '1') {
               this.settingPlayers();
          }else if (this.numOfPlayers !== ('1' || '2')){
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
          } else {this.playerTwo.score++;}
          this.displayPlayerSelections();
          this.displayScores();
          this.gameCount++;
          if (this.gameCount <4){
          this.playerOne.chooseGesture();
          this.playerTwo.chooseGesture();
          this.checkForWinner();
          }else if (this.gameCount >= 4){
               if (this.playerOne.score === this.playerTwo.score){
                    console.log('')
                    console.log('Tie Game!')
                    console.log('Play again to settle the score')
                    console.log('')
                    this.gameCount = 1;
                    this.playerOne.score = 0;
                    this.playerTwo.score = 0;
                    this.playerOne.chooseGesture();
                    this.playerTwo.chooseGesture();
                    this.checkForWinner();
               }      
          }
     } 
     settingPlayers(){
          if (this.numOfPlayers === '2'){
               console.log('Two Player mode selected');
               this.playerOne = new Human(prompt("Please enter player one's name ")); 
               this.playerTwo = new Human(prompt("Please enter player two's name "));
               console.log(''); 
               console.log('Good Luck!');  
          } else if (this.numOfPlayers === '1'){
               console.log('Single Player mode selected');
               this.playerOne = new Human(prompt("Please enter player one's name "));
               console.log(''); 
               console.log(`Good Luck ${this.playerOne.name}!`);
               this.playerTwo = new AI('AI');  
          } 
     }
     displayScores(){
          console.log(`${this.playerOne.name}'s score -> ${this.playerOne.score}`);
          console.log(`${this.playerTwo.name}'s score -> ${this.playerTwo.score}`);
     }
     displayWinner(){
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
     displayPlayerSelections(){
          console.log('')
          console.log(`${this.playerOne.name}'s choice was -> ${this.playerOne.choice}`)
          console.log(`${this.playerTwo.name}'s choice was -> ${this.playerTwo.choice}`)
          console.log('')
     }
}
module.exports.Game = Game;

