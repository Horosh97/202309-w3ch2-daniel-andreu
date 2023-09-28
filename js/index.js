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
let freezed = false;

const gameScreenElement = document.querySelector(".game-screen");
const menuScreenElement = document.querySelector(".menu-screen");
const visibleCardElement = document.querySelector(".visible-card");
const hiddenCardElement = document.querySelector(".hidden-card");
const startButtonElement = document.querySelector(".start-button");
const biggerButtonElement = document.querySelector(".bigger-button");
const smallerButtonElement = document.querySelector(".smaller-button");
const equalButtonElement = document.querySelector(".equal-button");
const newCardButtonElement = document.querySelector(".new-card-button");
const homeButtonElement = document.querySelector(".home-button");
const answerElement = document.querySelector(".answer");
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
  freezed = false;
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

const compareResults = (choice) => {
  if (compareCards() === choice) {
    answerElement.textContent = "Si! Muy bien!";
  } else {
    answerElement.textContent = "No has acertado, a la próxima!";
  }

  freezed = true;

  setTimeout(() => {
    selectCards();
    answerElement.classList.add("hidden");
    hiddenCardUpPositionElement.classList.add("hidden");
    hiddenCardMiddlePositionElement.classList.add("hidden");
    hiddenCardDownPositionElement.classList.add("hidden");
  }, 2000);
};

newCardButtonElement.addEventListener("click", (event) => {
  selectCards();
  answerElement.classList.add("hidden");
  hiddenCardUpPositionElement.classList.add("hidden");
  hiddenCardMiddlePositionElement.classList.add("hidden");
  hiddenCardDownPositionElement.classList.add("hidden");
});

biggerButtonElement.addEventListener("click", (event) => {
  if (freezed === false) {
    answerElement.classList.remove("hidden");
    hiddenCardUpPositionElement.classList.remove("hidden");
    hiddenCardMiddlePositionElement.classList.remove("hidden");
    hiddenCardDownPositionElement.classList.remove("hidden");
    compareResults("bigger");
  }
});

smallerButtonElement.addEventListener("click", (event) => {
  if (freezed === false) {
    answerElement.classList.remove("hidden");
    hiddenCardUpPositionElement.classList.remove("hidden");
    hiddenCardMiddlePositionElement.classList.remove("hidden");
    hiddenCardDownPositionElement.classList.remove("hidden");
    compareResults("smaller");
  }
});

equalButtonElement.addEventListener("click", (event) => {
  if (freezed === false) {
    answerElement.classList.remove("hidden");
    hiddenCardUpPositionElement.classList.remove("hidden");
    hiddenCardMiddlePositionElement.classList.remove("hidden");
    hiddenCardDownPositionElement.classList.remove("hidden");
    compareResults("equal");
  }
});

homeButtonElement.addEventListener("click", (event) => {
  gameScreenElement.classList.add("hidden");
  menuScreenElement.classList.remove("hidden");
});

startButtonElement.addEventListener("click", (event) => {
  gameScreenElement.classList.remove("hidden");
  menuScreenElement.classList.add("hidden");
  selectCards();
  answerElement.classList.add("hidden");
  hiddenCardUpPositionElement.classList.add("hidden");
  hiddenCardMiddlePositionElement.classList.add("hidden");
  hiddenCardDownPositionElement.classList.add("hidden");
});
