class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // shuffleCards() {
  //   if (!this.cards) {
  //     return undefined;
  //   }
  //   const clonedArray = [...this.cards];
  //   this.cards = clonedArray.sort(() => Math.random() - 0.5);
  //   return this.cards;
  // }

  //Josh solution
  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
    let copyCards = [...this.cards];
    let shuffled = [];
    for (let i = 0; i < this.cards.length; i++) {
      let randomIndex = Math.floor(Math.random() * copyCards.length);
      shuffled.push(copyCards[randomIndex]);
      copyCards.splice(randomIndex, 1);
    }
    this.cards = shuffled;
    return this.cards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }


  //getters
  getPairsClicked() {
    return this.pairsClicked
  }

  getPairsGuessed() {
    return this.pairsGuessed
  }

  hasTwoCards() {
    return this.pickedCards.length === 2
  }

  getFirstCard() {
    return this.pickedCards[0]
  }

  getSecondCard() {
    return this.pickedCards[1]
  }

  addPickedCard(card) {
    this.pickedCards.push(card)
  }

  resetPickedCards() {
    //console.log(this.pickedCards);
    this.pickedCards = [];
    //console.log(this.pickedCards);
  }
}
