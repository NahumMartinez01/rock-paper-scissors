const btnPaper = document.getElementById("paper");
const btnRock = document.getElementById("rock");
const btnScissors = document.getElementById("scissors");
const scoreContainer = document.querySelector(".result");
const userImg = document.getElementById("img-user");
const pcImg = document.getElementById("img-pc");
const result = document.createElement("p");
const player = document.querySelector(".player");
const buttons = document.querySelectorAll('.btn-pc');
const scorePc = document.querySelector(".machine");
const scoreUser = document.createElement("p");
const scoreMachine = document.createElement("p");
let playerScore = 0;
let pcScore = 0;
let draw = 0;
let currentIndex = 0;
function getGoldenColor() {
  return '#FFD700'; // Dorado claro en formato hexadecimal
}

function getGoldenColor() {
  return '#FFD700'; 
}


function animateGoldenColor(button) {
  const goldenColor = getGoldenColor();
  button.style.backgroundColor = goldenColor;

 
  setTimeout(() => {
    button.style.backgroundColor = '#444'; // Color de fondo gris
  }, 700);
}


function animateButtonsOneByOne() {
  const currentButton = buttons[currentIndex];
  animateGoldenColor(currentButton);
  currentIndex = (currentIndex + 1) % buttons.length;
}



function startAnimation() {
  intervalId = setInterval(animateButtonsOneByOne, 700); 
}

// Función para detener la animación
function stopAnimation() {
  clearInterval(intervalId);
}






btnPaper.addEventListener("click", (e) => {
  const playerSelection = e.target.id;
  game(playerSelection);
});

btnRock.addEventListener("click", (e) => {
  const playerSelection = e.target.id;
  game(playerSelection);
});

btnScissors.addEventListener("click", (e) => {
  const playerSelection = e.target.id;
  game(playerSelection);
});

function getComputerChoice() {
  let random = ["paper", "rock", "scissors"];
  let nRandom = Math.floor(Math.random() * random.length);
  
  return random[nRandom];
}

function game(selection) {
  userImg.src = `img/${selection}.svg`;

  result.classList.add("text-result");
  result.textContent = "Escogiendo...";


  startAnimation()


  const choising = setInterval(() => {
   
    let computerSelection = getComputerChoice();
    pcImg.classList.toggle("vibrate");
    pcImg.src = `img/${computerSelection}.svg`;
    pcImg.classList.toggle("img-pc");
    
  }, 800);

  setTimeout(() => {
    clearInterval(choising);
    
    result.textContent = "";

    console.log(playerScore, "  ", pcScore, "  ", draw);

    let computerSelection = getComputerChoice();
    playRound(selection, computerSelection);

    pcImg.src = `img/${computerSelection}.svg`;

    stopAnimation()

    scoreUser.textContent = playerScore;
    scoreUser.classList.add("score-u");
    scoreMachine.textContent = pcScore;
    scoreMachine.classList.add("score-u");


    if (playerScore === 5) {
      result.textContent = "El Jugador Gana".toUpperCase();
    }
    if (pcScore === 5) {
      result.textContent = "La maquina gana".toUpperCase();
    } else if (draw === 5) {
      result.textContent = "Es un empate".toUpperCase();
    }
  }, 2000);

  player.appendChild(scoreUser);
  scorePc.appendChild(scoreMachine);
  scoreContainer.appendChild(result);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return (draw = draw + 1);
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors")
      return (playerScore = playerScore + 1);
    if (computerSelection === "paper") return (pcScore = pcScore + 1);
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") return (playerScore = playerScore + 1);
    if (computerSelection === "scissors") return (pcScore = pcScore + 1);
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") return (playerScore = playerScore + 1);
    if (computerSelection === "rock") return (pcScore = pcScore + 1);
  }
}
