

let players = [];
class card{
    constructor(_value, _suit){
        this.value = _value
        this.suit = _suit
    }
}

class Player{
    constructor(_username, _chips){
    this.username = _username;
    this.chips = _chips;
    this.hand = [];

    players.push(this);
    }
    draw(_deck, _draws){
        for (let i = 0; i < _draws; i++) {
            this.hand.push(deck.draw);
          }
    }
    show_hand(){
        for(let i = 0; i < this.hand.length(); i++){
            console.log(this.hand[i]);
        }
    }
    hand_value(){
        this.rank = handcalc(this.hand);
        this.weight = weightcalc(this.hand);
    }
}
class River{
    constructor(){
        this.cards = [];
    }
    draw(_deck, _draws){
        for (let i = 0; i < _draws; i++) {
            this.hand.push(deck.draw);
          }
    }
    show_hand(){
        for(let i = 0; i < this.hand.length(); i++){
            console.log(this.hand[i]);
        }
    }
}
class deck{
    constructor(_decks){
        this.cards = [];
        let suits = ['hearts', 'diamonds', 'spades', 'clubs'];
        for (let i = 0; i < (1 * _decks); i++){
            for (let o = 1; o < 14; o++){
                for (let u = 0; u < 4; u++){
                    this.cards.push(new card(o, suits[u]));
                }
            }
        }
    }
    shuffle(){
        this.cards = shuffle(this.cards);
    }
    draw(){
        let drawn_card = this.cards[0];
        (this.cards).splice(0, 1);
        return drawn_card
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
