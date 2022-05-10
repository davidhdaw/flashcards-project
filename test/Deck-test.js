const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  const fullDeck = new Deck([card1, card2, card3]);
  const shortDeck = new Deck([card1, card2]);
  const cardArray = [card1, card2, card3];

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });
  it('should be an instance of Deck', () => {
    expect(fullDeck).to.be.an.instanceof(Deck);
  });
  it('should take in cards and store them in a deck', () => {
    expect(fullDeck.cards[0]).to.equal(card1);
    expect(fullDeck.cards[1]).to.equal(card2);
    expect(fullDeck.cards[2]).to.equal(card3);
  });
  it('should be able to tell you the number of cards in the deck', () => {
    expect(fullDeck.countCards()).to.equal(3);
    expect(shortDeck.countCards()).to.equal(2);
  });
});
