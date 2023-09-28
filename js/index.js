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

const visibleCardElement = document.querySelector(".visible-card");
const hiddenCardElement = document.querySelector(".hidden-card");
const biggerButtonElement = document.querySelector(".bigger-button");
const smallerButtonElement = document.querySelector(".smaller-button");
const newCardButtonElement = document.querySelector(".new-card-button");
const homeButtonElement = document.querySelector(".home-button");
const visibleCardUpPositionElement =
  visibleCardElement.querySelector(".position-up");
const visibleCardMiddlePositionElement =
  visibleCardElement.querySelector(".position-middle");
const visibleCardDownPositionElement =
  visibleCardElement.querySelector(".position-down");
const hiddenCardUpPositionElement =
  hiddenCardElement.querySelector(".position-up");
const hiddenCardMiddlePositionElement =
  hiddenCardElement.querySelector(".position-middle");
const hiddenCardDownPositionElement =
  hiddenCardElement.querySelector(".position-down");

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
  visibleCardUpPositionElement.textContent = visibleCard.cardSuit;
  visibleCardMiddlePositionElement.textContent = visibleCard.cardName;
  visibleCardDownPositionElement.textContent = visibleCard.cardSuit;
  hiddenCardUpPositionElement.textContent = hiddenCard.cardSuit;
  hiddenCardMiddlePositionElement.textContent = hiddenCard.cardName;
  hiddenCardDownPositionElement.textContent = hiddenCard.cardSuit;
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

newCardButtonElement.addEventListener("click", (event) => {
  selectCards();
});
