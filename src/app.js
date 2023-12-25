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
  // for (let number in numbers) {
  //   for (let suit in suits) {
  //     deck.push({ num: number, cardSuit: suit });
  //   }
  // }
  for (let i = 0; i < numbers.length; i++) {
    for (let x = 0; x < suits.length; x++) {
      deck.push({ num: numbers[i], cardSuit: suits[x] });
    }
  }
};
const generateCard = () => {
  console.log(deck);
  if (deck.length === 0) {
    createDeck();
  }

  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];

  if (randomSuit === "♦" || randomSuit === "♥") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".num").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  } else {
    document.querySelector(".top").style.color = "black";
    document.querySelector(".num").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
  }

  // for (let i = 0; i < deck.length; i++) {
  //   if (deck[i].num === randomNumbers && deck[i].cardSuit === randomSuit) {
  //     // deck = deck.filter(
  //     //   card => card.num !== randomNumbers && card.cardSuit !== randomSuit
  //     // );
  //     deck = deck.filter(
  //       card => card.num !== randomNumbers && card.cardSuit !== randomSuit
  //     );
  //   }
  // }
  for (let i = 0; i < deck.length; i++) {
    if (deck[i].num === randomNumbers && deck[i].cardSuit === randomSuit) {
      deck = deck.filter(
        card => !(card.num === randomNumbers && card.cardSuit === randomSuit)
      );
      break; // Break the loop once the card is found and removed
    }
  }
  console.log(deck.length);
  document.querySelector(".top").innerHTML = randomSuit;
  document.querySelector(".num").innerHTML = randomNumbers;
  document.querySelector(".bottom").innerHTML = randomSuit;
};
