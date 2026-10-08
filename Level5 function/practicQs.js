//create a function to roll a dice and always display the value of the dice (1 to 6).

function rollDice() {
    let rand = math.floor(math.random() * 6) + 1;
    console.log(rand);


}
rollDice();