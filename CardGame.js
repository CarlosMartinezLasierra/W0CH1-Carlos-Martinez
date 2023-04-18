const suits = ["spades", "diamonds", "clubs", "hearts"];
const cards = [
  { card: "2", power: 1 },
  { card: "3", power: 2 },
  { card: "4", power: 3 },
  { card: "5", power: 4 },
  { card: "6", power: 5 },
  { card: "7", power: 6 },
  { card: "8", power: 7 },
  { card: "9", power: 8 },
  { card: "10", power: 9 },
  { card: "J", power: 10 },
  { card: "Q", power: 11 },
  { card: "K", power: 12 },
  { card: "A", power: 13 },
];

let generateRandomCard = function () {
  let cardSuit = suits[Math.floor(Math.random() * suits.length)];
  let card = cards[Math.floor(Math.random() * cards.length)];
  return {
    message: card.card + " of " + cardSuit,
    power: card.power,
  };
};

let randomCard = generateRandomCard();
console.log("Tu carta es: " + randomCard.message);
console.log("Su poder es: " + randomCard.power);
let firstCard = randomCard.power;
let newCard = generateRandomCard();
console.log("Tu segunda carta es: " + newCard.message);
console.log("Su poder es: " + newCard.power);
let secondCard = newCard.power
userElection = prompt("Elige si la siguiente carta será mayor o menor escribiendo una de estos dos valores; superior || inferior").toLowerCase()

/*COMPARACION PRIMERA Y SEGUNDA CARTA
*/
let getCardTotalValue = () => {
  let result = firstCard - secondCard;
  if (userElection === "superior" && result < 0) {
    alert("Muy bien, sumas 5 puntos");
  } else if (userElection === "superior" && result > 0) {
    alert("Has fallado, pierdes 5 puntos");
  } else if (userElection === "inferior" && result > 0){
    alert("Muy bien, sumas 5 puntos");
  }else if (userElection === "inferior" && result < 0){
    alert("Has fallado, pierdes 5 puntos")
  }

    let cardSuperior = true
  }else if(result<0){
    let cardInferior = true
  }
}


let continue = true;
if alert("Deseas jugar a Card Game?") === true
if askUser === "alto"
