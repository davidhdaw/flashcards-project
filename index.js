const Card = require('./src/Card');
const Deck = require('./src/Deck');
const Game = require('./src/Game');
const Round = require('./src/Round');
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;

console.log('Your project is running...');
const newGame = new Game();
newGame.start()
