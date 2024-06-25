

let humanScore = 0;
let computerScore = 0;

// Функция возвращающая рандомное значение в [0, 1, 2]
num = function (max = 3) {
    return Math.floor(Math.random() * max);
}


// Функция получающая машинный вариант через промпт и возвращающая его
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
// Функция получающая челвоеческий вариант через промпт и возвращающая его
function getHumanChoice(){
    let humanChoice = prompt("Введи свой выбор: ", null)
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}


// Функция проверяющая правильность ввода промпта со стороны пользователя
function validateUserInput(userInput) {
    try {
      let userInput = getHumanChoice();
      // Проверка на валидность данных
      if (userInput == "камень" || userInput == "бумага" || userInput == "ножницы") {
        return userInput;
      } else {
        throw new Error('Некорректный ввод данных');
      }

    } catch (error) {
      console.error(`Ошибка при валидации ввода данных: ${error}`);
      return null;
    }
  }

const humanSelection = validateUserInput();
const computerSelection = getComputerChoice();



function playRound(realHumanChoice, realComputerChoice){
    if (realHumanChoice == realComputerChoice) {
        return "Ты и компьютер выбрали" + " " + `${realHumanChoice}` + ", Ничья!\n"
        + "Ваш текущий счёт: \n" 
        + "Вы: " + `${humanScore}` + " | " + "Компьютер: " + `${computerScore}`;
    }
    else if ((realHumanChoice == "камень"  && realComputerChoice == "ножницы") 
            || ( realHumanChoice == "бумага"  && realComputerChoice == "камень")  
            || ( realHumanChoice == "ножницы" && realComputerChoice == "бумага")){
                humanScore += 1;
                return "Ты победил! Компьютер выбрал " + `${realComputerChoice}` + "\n"
                + "Ваш текущий счёт: \n" 
                + "Вы: " + `${humanScore}` + " | " + "Компьютер: " + `${computerScore}`;
    }

    else {
        computerScore += 1;
        return "Ты проиграл! Компьютер выбрал " + `${realComputerChoice}`+ "\n"
        + "Ваш текущий счёт: \n" 
        + "Вы: " + `${humanScore}` + " | " + "Компьютер: " + `${computerScore}`;
    }

}

console.log(playRound(humanSelection, computerSelection));


