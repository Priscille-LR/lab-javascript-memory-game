const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

let memoryGame = new MemoryGame(cards);

//console.log(cards);
//console.log(memoryGame.shuffleCards());

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", (event) => {
      //console.log(event.currentTarget);
      //1st option
      card.classList.add("turned");
      //2nd option
      // const parentNode = event.currentTarget
      // const back = parentNode.childNodes[1]
      // const front = parentNode.childNodes[3]
      // front.classList.toggle('turned')
      // console.log('front', front)
      // toggle(back)
      // toggle(front)
      
      //add card to picked cards array
      memoryGame.addPickedCard(card.getAttribute("data-card-name"))

      if (memoryGame.hasTwoCards() && memoryGame.checkIfPair(memoryGame.getFirstCard(), memoryGame.getSecondCard())) {
        if (memoryGame.checkIfFinished()) {
          alert("Congrats, you won!")
        } else {
          const turnedCards = document.querySelectorAll(".turned")
          //console.log(turnedCards);
          turnedCards.forEach((card) => card.classList.add("blocked")); //if the 2 picked cards are the same, they get class 'blocked'
        }
        memoryGame.resetPickedCards(); 
      } else if (memoryGame.hasTwoCards() && !memoryGame.checkIfPair(memoryGame.getFirstCard(), memoryGame.getSecondCard())) {
        setTimeout(resetTurnedCards, 1000);
      }

      //update score panel
      document.getElementById("pairs-clicked").innerHTML = memoryGame.getPairsClicked()
      document.getElementById("pairs-guessed").innerHTML = memoryGame.getPairsGuessed()
    });
  });
});


//turn back cards that arent blocked
function resetTurnedCards() {
  const turnedCards = document.querySelectorAll('.turned')
  const blockedCards = [...document.querySelectorAll('.blocked')]; //transform nodeList into array
  //console.log(blockedCards)

  turnedCards.forEach(card => {
    if(!blockedCards.includes(card)){
      card.classList.remove("turned")
    }
  })
  memoryGame.resetPickedCards(); //reset bc picked cards can't ever hold more than two cards
}