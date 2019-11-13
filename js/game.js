//Dice game

let scores, roundScore, activePlayer, gameStatus;
let lastRoll;
initialize();

document.querySelector(".btn-roll").addEventListener("click", ()=> {
  if (gameStatus) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    //Display the result
    document.getElementById("dice-1").style.display = "block";
    document.getElementById("dice-2").style.display = "block";

    document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
    document.getElementById("dice-2").src = "dice-" + dice2 + ".png";
    //update the round score if the rolled number was not a 1

    if (dice1 !== 1 && dice2 !== 1) {
      roundScore += dice1 + dice2;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", ()=> {
  if (gameStatus) {
    // add current score to global score
    scores[activePlayer] += roundScore;
    //update both scores
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    let input = document.querySelector(".final-score").value;
    let winningScore;

    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }
    //check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.getElementById("dice-1").style.display = "none";
      document.getElementById("dice-2").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gameStatus = false;
    } else {
      //next player
      nextPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", initialize);

function initialize() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  (gameStatus = true),
    (document.getElementById("dice-1").style.display = "none");
  document.getElementById("dice-2").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  //setting current scores to zero when the player changes
  
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //toggling the active player

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
}
