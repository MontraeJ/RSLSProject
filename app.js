"use strict"
//top level
const {Game} = require('./game');
const prompt = require('prompt-sync')();

let game = new Game();
game.gameStart();
