function fruit(fruit,weight,price){
    let fruitType = fruit;
    let weightPerKilo = weight / 1000;
    let pricePerKilo = price;
    let moneyNeeded = pricePerKilo * weightPerKilo;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightPerKilo.toFixed(2)} kilograms ${fruitType}.`);
}
fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)
