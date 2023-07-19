const cardMaker = require('./02. Playing Cards');
function cardsPrinter(arrOfCards) {
   
    let cards = arrOfCards.map(cardMaker);
    console.log(cards);
    
    
   
}
cardsPrinter(['AS', '10D', 'KH', '2C']);