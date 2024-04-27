/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // calling the function to create deck onload
  createDeck();
  // getting the button to rerun generate card function when clicked
  document.querySelector(".btn").addEventListener("click", function() {
    generateCard();
  });
};
// creating the deck
let deck = [];
let suits = ["♦", "♣", "♥", "♠"];
let numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "K",
  "Q",
  "J",
  "A"
];
const createDeck = () => {
  for (let i = 0; i < numbers.length; i++) {
    for (let x = 0; x < suits.length; x++) {
      deck.push({ number: numbers[i], suit: suits[x] });
    }
  }
};
const generateCard = () => {
  console.log(deck);
  if (deck.length === 0) {
    createDeck();
  }

  let randomCard = deck[Math.floor(Math.random() * deck.length)];

  // Access the random card's number and suit
  let randomNumber = randomCard.number;
  let randomSuit = randomCard.suit;

  if (randomSuit === "♦" || randomSuit === "♥") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".num").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  } else {
    document.querySelector(".top").style.color = "black";
    document.querySelector(".num").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
  }
  console.log(randomNumber, randomSuit);
  for (let i = 0; i < deck.length; i++) {
    if (deck[i].number === randomNumber && deck[i].suit === randomSuit) {
      deck = deck.filter(
        card => !(card.number === randomNumber && card.suit === randomSuit)
      );
      break; // Break the loop once the card is found and removed
    }
  }
  console.log(deck.length);
  document.querySelector(".top").innerHTML = randomSuit;
  document.querySelector(".num").innerHTML = randomNumber;
  document.querySelector(".bottom").innerHTML = randomSuit;
};
