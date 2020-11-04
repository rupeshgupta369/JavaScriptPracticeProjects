const cards = document.querySelectorAll(".card")
console.log(cards);

//variables to track whether things are flipped or not


var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((cardPara) => cardPara.addEventListener("click", flip))

function flip() {
  // console.log("Cards Flipped");
  // console.log(this);
  this.classList.add("flip");
  // to chechk whether it is not flipped then true then enters 
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();

  }
}


function checkIt() {
  // console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}
function success() {
  // console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
}

function fail() {
  // console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset(); 
  }, 1000)

}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO SHUFFLE
(function shuffle() {
  cards.forEach((cardPara) => {
    var index = Math.floor(Math.random() * 16)
    cardPara.style.order = index;
  })
})();//wrapped in self sexcuted anonymous function or we can use shuffle method

// shuffle();