let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function convertToWord(letter) {
    if (letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    return "Scissor"

}

// function getRandomInt(max){ 1
//     return Math.floor(Math.random() * max)
// }

function getComputerChoice(){
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices [randomNumber]
    // console.log(getRandomInt(3)) 1
}

function win(userChoice, computerChoice) {
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    // result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!" THIS IS ES5
    const smallUserWord = "user".fontsize(3).sup()
    const smallCompWord = "comp".fontsize(3).sup()
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!` //THIS IS ES6 JAVASCRIPT VER 6
    document.getElementById(userChoice).classList.add('green-glow')
    // setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')}, 500)ES6 javascript
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 500)
}

// setTimeout(function() { console.log("hello")} , 3000) TO SET TIME OUT FOR ANIMATION

function lose(userChoice, computerChoice) {
    computerScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const smallUserWord = "user".fontsize(3).sup()
    const smallCompWord = "comp".fontsize(3).sup()
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses ${convertToWord(computerChoice)}${smallCompWord}. You lose!`
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')}, 500)
}
function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup()
    const smallCompWord = "comp".fontsize(3).sup()
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equal ${convertToWord(computerChoice)}${smallCompWord}. Draw!` 
    document.getElementById(userChoice).classList.add('grey-glow')
    setTimeout(function() { document.getElementById(userChoice).classList.remove('grey-glow')}, 500)
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice)
            break
    }
    // const name = "david" *same as switch function
    // if(name === "david") {
    //     console.log('hello')
    // } else if (name === "mirul"){
    //     console.log('bukan')
    // }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r")
    })

    paper_div.addEventListener('click', function() {
        game("p")
    })

    scissor_div.addEventListener('click', function() {
        game("s")
    })
}
main();