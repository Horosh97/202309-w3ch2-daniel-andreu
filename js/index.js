const suits = ["♠", "♣", "♦", "♥"];
const cardNames = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

let visibleCard;
let hiddenCard;

const generateDeck = () => {
  const deck = [];

  suits.forEach((suit) => {
    cardNames.forEach((name, position) => {
      deck.push({ cardName: name, cardSuit: suit, cardValue: position });
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

const compareCards = () => {
  if (visibleCard.cardValue < hiddenCard.cardValue) {
    return "bigger";
  } else if (visibleCard.cardValue > hiddenCard.cardValue) {
    return "smaller";
  } else {
    return "equal";
  }
};
