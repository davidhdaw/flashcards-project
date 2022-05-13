# Flashcards

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Features](#features)
- [Reflection](#reflection)
- [Future Features](#future-features)
- [Contributors](#contributors)
- [Project Specifications](#project-specifications)

### Introduction
Yo dawg I heard you liked learning JavaScript so we put a JavaScript quiz in this JavaScript project so you can learn JavaScript while you learn Javascript. All you have to do is run `node index.js` in this repo's directory for a fun little JavaScript quiz or download the original repo [here](https://github.com/turingschool-examples/flashcards-starter) and try and get it working so you can meta-learn JavaScript learning games.

### Technologies
- JavaScript

### Set Up
1.  Clone this [repository](git@github.com:davidhdaw/ideabox.git).
2. `cd` into the directory.
3. Run `node index.js`.

### Features
- Ability to play a simple quiz game within the terminal.
- Game returns if you answered a question correctly or not.
![Answering questions](/img/quizgame1.gif)
- Game tells you your percentage of correct answers once you get to the end of your questions.
![Seeing Final Score](/img/quizgame2.gif)
- Ability to alter the question set by editing data.js


### Reflection
- This project was a bit of a trust fall in terms of learning JavaScript. Many of the more complicated features of the game were included in the initial repo and the code work was mostly writing classes that could interact with the prewritten JavaScript. As a result test driven development using Mocha and Chai helped keep the code on track until it was feasible to test the game itself very late in the project.


### Future Features
- Restart the game if the player gets less than 90% of their answers correct.
- Use Date.now() to find the time in seconds a player took to answer all questions in the deck.
- Create a more robust report at the end of a game that lets players know what questions they miss.
- Make it so that when players repeat the game they are only asked the questions they missed in the previous round.

### Contributors
- [David Daw](https://github.com/davidhdaw)

### Project Specifications
- Project specs are located [here](https://frontend.turing.edu/projects/flash-cards.html).
