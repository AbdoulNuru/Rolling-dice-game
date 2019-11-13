let scores, roundScore, activePlayer, gameStatus;
let lastRoll;

document.querySelector(".btn-roll").addEventListener("click", ()=> {
  if (gameStatus) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

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
