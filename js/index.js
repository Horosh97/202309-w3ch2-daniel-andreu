const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const suits = ["picas", "tréboles", "corazones", "diamantes"];

const generateDeck = () => {
  const deck = [];
  values.forEach((value) => {
    suits.forEach((suit) => {
      deck.push({ cardValue: value, cardSuit: suit });
    });
  });
  return deck;
};
