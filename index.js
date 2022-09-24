// Follow along with the examples here

function say(toPrint) {
    console.log(toPrint);
}

 let number = 3;

 say(`Alright, so you'll be having the ${idSandwich(number)}! That'll be out shortly!`);

 function idSandwich(number) {
    let sandwich;
    switch (number) {
        case 1:
            sandwich = 'the Dinty Moore';
            break;
        case 2:
            sandwich = 'the Club Sandwich';
            break;
        case 3:
            sandwich = 'the Reuben';
            break;
        default:
            sandwich = `an item that's not on the menu`;
        }
    return sandwich;
    }
