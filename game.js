"use strict"

const prompt = require('prompt-sync')();
const {User} = require('./accounts');
const {choices} = require('./accounts');
// created AI user using mat.floor.random to pick randomly between the choices
// create a function for the user to pick between the choices
// create a function that compares the two choices
// keep score

class Game {
     
     constructor (){
          this.playerOne = new User(prompt("Please enter player one's name"))
          this.playerTwo = new User (prompt("Please enter player two's name"))
     }
     instructions (){
          console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock.');
          console.log('The Best of 3 games wins!');
          console.log('Rules');
          console.log();
     }
     gameStart(){
          this.instructions();
     }
     chooseGesture(){
       //   this.playerOne.choice = 
     }
     // Use to pick between AI and human for player two
     // pickPlayers (){ 
     // }

}








module.exports.Game = Game;

