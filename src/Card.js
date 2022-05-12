class Card {
  constructor(id = Date.now(), question, answers, correctAnswer ) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };
  reconstructFromObject(object) {
    this.id = object.id;
    this.question = object.question;
    this.answers = object.answers;
    this.correctAnswer = object.correctAnswer;
  }
};


module.exports = Card;
