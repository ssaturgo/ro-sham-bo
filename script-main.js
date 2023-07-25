function submitChoice(playerChoice) {
    let choices = [
        "IMG/rock.svg",
        "IMG/paper.svg",
        "IMG/scissors.svg"];

    let response = botResponse();
    let [victoryStatus, newTag] = victoryCalculator(playerChoice, response);

    document.getElementById('bot-choice').src = choices[response];
    document.getElementById('player-choice').src = choices[playerChoice];

    document.getElementById('result-text').className = newTag;
    document.getElementById('result-text').innerHTML = victoryStatus;
}

function victoryCalculator(playerChoice, botChoice) {
    // 0 rock 1 paper 2 scissors

    // check if tied
    if(playerChoice == botChoice) {
        return[ "It's a tie", 'tie'];
    }

    switch(playerChoice) {
        case '0':
            if(botChoice == 2) return ['You Won!', 'win'];
            break;
        case '1':
            if(botChoice == 0) return ['You Won!', 'win'];
            break;
        case '2':
            if(botChoice == 1) return ['You Won!', 'win'];
            break;
        default:
            return('error'); // if its not 0, 1, or 2 then return an error
    }
    return ['You Lost', 'lose'];
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}
function botResponse() {
    return randomInt(3);
}