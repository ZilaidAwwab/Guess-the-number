"use strict";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Now we are going to make the secret number a randomly generated number every time,
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// Handling the events
document.querySelector(".check").addEventListener("click", function () {
  // document.querySelector(".guess").value

  // This could also be done, other way around like
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  // This works exactly the same

  // as we are responding the event that executes after checking that is there a value in the guess box, so we need to set the condition as well for the time when there is no value in the box, so in case of empty box we will display the following.

  // When there's no input
  if (!guess) {
    // document.querySelector(".message").textContent = " ⛔ No Number";
    displayMessage(" ⛔ No Number");
  }

  // When player guesses right
  else if (guess === number) {
    // document.querySelector(".message").textContent = "Correct Number";
    displayMessage("Correct Number");

    document.querySelector(".number").textContent = number;

    // Changing the BG color on right guess
    document.querySelector("body").style.backgroundColor = "#60b347";

    // Increasing the width of the number
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > number ? `Too High` : `Too Low`;
      displayMessage(guess > number ? `Too High` : `Too Low`);
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You lost";
      displayMessage("You lost");
      document.querySelector(".score").textContent = 0;
    }
  }

  /*
  // When player guesses a high number
  else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost";
      document.querySelector(".score").textContent = 0;
    }
  }

  // When player guesses a low number
  else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  */
});

/*

Implement a game rest functionality, so that the player can make a new guess!
Tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = " Start Guessing...";
  displayMessage(" Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
