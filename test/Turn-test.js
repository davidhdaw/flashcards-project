const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('object', card);
  const wrongTurn = new Turn('array', card);

//   beforeEach( () => {
//   turn = new Turn('object', card);
//   wrongTurn = new Turn('array', card);
// });
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });
  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });
  it('should be able to return your guess', () => {
    expect(turn.returnGuess()).to.equal('object');
  });
  it('should be able to return your card', () => {
    expect(turn.returnCard()).to.equal(card);
  });
  it('should be able to evaluate if you gave a correct answer', () => {
    expect(turn.evaluateGuess()).to.equal(true);
    expect(wrongTurn.evaluateGuess()).to.equal(false);
  });
  it('should give feedback on your guess', () => {
    expect(turn.giveFeedback()).to.equal('correct!');
    expect(wrongTurn.giveFeedback()).to.equal('incorrect!');
  });
});
