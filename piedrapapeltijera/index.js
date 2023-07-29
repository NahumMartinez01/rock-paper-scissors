let duracion = 0;
let playerScore = 0;
let pcScore = 0;
let draw = 0;

function getComputerChoice() {
  let random = ["paper", "rock", "scissors"];
  let nRandom = Math.floor(Math.random() * random.length);
  return random[nRandom];
}

function game() {
  while (duracion < 5) {
    duracion++;
    let playerSelection = prompt("Ingrese una opcion : rock, paper, scissors")
      .toString()
      .toLowerCase();
    playRound(playerSelection);
  }

  if (draw > pcScore && draw > playerScore) {
    console.log("El juego se empata");
  } else if (playerScore > pcScore && playerScore > draw) {
    console.log("El jugador gana la partida");
  } else {
    console.log("La maquina gana la partida");
  }
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    draw = draw + 1;
    console.log("draw");
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore = playerScore + 1;

    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  }

  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    pcScore = pcScore + 1;

    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
}

game();


const d = new Date();

