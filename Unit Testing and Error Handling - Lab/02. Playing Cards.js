function cardMaker(face,suit) {
    let validFaces = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {
        S : '♠',
        H : '♥',
        D : '♦',
        C : '♣',
    };
    if(face != face.toUpperCase() || suit != suit.toUpperCase()){
        throw new Error('Error');
    }
    if(!validFaces.includes(face) || !suits[suit]){
        throw new Error('Error');
    }
    let card = {
        face,
        suit,
        toString() {
            console.log(this.face + suits[this.suit]);
        }
    };
    return card;
}
// let card = cardMaker('A', 'S');
// card.toString();
// let card = cardMaker('10', 'H');
// card.toString();
let card = cardMaker('1', 'C');
card.toString();
module.exports = cardMaker;