const suits = ["♠", "♣", "♦", "♥"];
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let visibleCard;
let hiddenCard;

const generateDeck = () => {
  const deck = [];

  suits.forEach((suit) => {
    cardValues.forEach((value) => {
      deck.push({ cardValue: value, cardSuit: suit });
    });
  });

  return deck;
};

const selectCards = () => {
  visibleCard =
    generateDeck()[Math.floor(Math.random() * generateDeck().length)];
  hiddenCard =
    generateDeck()[Math.floor(Math.random() * generateDeck().length)];
};

selectCards();
console.log(visibleCard, hiddenCard);
