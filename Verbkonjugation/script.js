function rollDice() {
    var dice1Result = Math.floor(Math.random() * 6) + 1;
    var dice2Result = Math.floor(Math.random() * 6) + 1;
    var resultElement = document.querySelector('.score');

    var dice2Color = getDiceColorName(dice2Result);

    resultElement.textContent =  dice1Result + ' - ' + dice2Color;
}



function getDiceColorName(diceResult) {
    switch (diceResult) {
        case 1:
            return 'Weiss';
        case 2:
            return 'Gelb';
        case 3:
            return 'Orange';
        case 4:
            return 'Blau';
        case 5:
            return 'Grün';
        case 6:
            return 'Schwarz';
        default:
            return '';
    }
}

function getDice(diceResult) {
    switch (diceResult) {
        case 1:
            return 'Weiss';
        case 2:
            return 'Gelb';
        case 3:
            return 'Orange';
        case 4:
            return 'Blau';
        case 5:
            return 'Grün';
        case 6:
            return 'Schwarz';
        default:
            return '';
    }
}

