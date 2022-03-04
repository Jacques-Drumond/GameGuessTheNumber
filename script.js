let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);



// When no number is entered
  if (!guess) {
    document.querySelector(".message").textContent = "🚫  No number!";



// When player wins
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "✅  You got it!!";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = "#60b347"
    document.querySelector('.number').style.width = "30rem"
    if(score > highscore){
    highscore = score
    document.querySelector(".highscore").textContent = highscore;

    }

// When guess is too high
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬆️  Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
        document.querySelector(".message").textContent = "You lost the game ❌❗️";
        document.querySelector('body').style.backgroundColor = "#ff0000"
        document.querySelector(".score").textContent = 0;
    }   


// When guess is too low
  } else if (guess < randomNumber) {
    document.querySelector(".score").textContent = score;
    if (score > 1) {
        document.querySelector(".message").textContent = "⬆️  Too Low";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
          document.querySelector(".message").textContent = "You lost the game ❌❗️";
          document.querySelector('body').style.backgroundColor = "#ff0000"
          document.querySelector(".score").textContent = 0;
      }   
  }
});


document.querySelector(".again").addEventListener("click", function(){
    document.querySelector('body').style.backgroundColor = "#222"
    score = 20;
    document.querySelector(".score").textContent = score;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = ''
    document.querySelector('.number').style.width = "15rem"
})