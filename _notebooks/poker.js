
class card{
    constructor(_value, _suit){
        this.value = _value
        this.suit = _suit
    }
}

class Player{
    constructor(_username, _chips, _hand, _weight, _rank){
    this.username = _username;
    this.chips = _chips;
    this.hand = _hand;
    this.weight = _weight;
    this.rank = _rank;
    this.hand = [];

    }
    show_hand(){
        for(let i = 0; i < this.hand.length(); i++){
            console.log(this.hand[i]);
        }
    }
    make_hand(_value, _suit){
        this.hand.push(new card(_value, _suit))
    }
}
let players = [];

if (betting = False){
    for (let i = 0; i < people.length(); i++){
        players.push(new Player(people[i], chips, weight[i], handrank[i]))
    }
    for (let i = 0; i < players.length(); i++){
        players[i].make_hand(player_hand_value[i], player_hand_suit[i])
    }
}
function winner(players, winner_index){
    console.log(players[winner_index].username)
}


//value.forEach((num1, index) => {
//    const num2 = m[index];
//    console.log(num1, num2);
//  });
//players.push(new Player('name', 'chips', 'hand', 'weight', 'rank'))