const btnSeleccion = document.querySelectorAll("button");
const scoreContainer = document.querySelector(".result");
const result = document.createElement("p");

let playerScore = 0;
let pcScore = 0;
let draw = 0;

function getComputerChoice() {
  let random = ["paper", "rock", "scissors"];
  let nRandom = Math.ceil(Math.random() * random.length);
  return random[nRandom];
}

function game(selection) {
  playRound(selection);

  
  if (playerScore === 5) {
    result.textContent = "El Jugador Gana";
    disableButton()
  } else if (pcScore === 5) {
    result.textContent = "El pc gana";
    disableButton()
  } else if (draw === 5) {
    result.textContent = "Es un empate";
    disableButton()
  }

  

  scoreContainer.appendChild(result);
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    console.log("draw")
    return (draw = draw + 1);
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return (playerScore = playerScore + 1);
  }

  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    console.log(computerSelection, " ", playerSelection);
    return (pcScore = pcScore + 1);
  }
}


function disableButton(){
  btnSeleccion.forEach(btn => btn.disabled = true)
}

btnSeleccion.forEach((button) => {
  button.addEventListener("click", (e) => {
    let selection = e.target.innerText;
    game(selection);
  });
});
