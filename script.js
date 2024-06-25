

let humanScore = 0;
let computerScore = 0;

num = function (max = 3) {
    return Math.floor(Math.random() * max);
}


function getComputerChoice(){
    result = num();
    if (result == 2){
        return "камень";
    }
    else if (result == 1) {
        return "ножницы";
    }
    else {
        return "бумага"
    }
}



function getHumanChoice(){
    let humanChoice = prompt("Введи свой выбор: ", null)
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Твой выбор: " + `${humanSelection}` + "\n" +
            "Выбор компьютера: " + `${computerSelection}`
)