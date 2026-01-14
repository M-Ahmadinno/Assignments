var ramNumber = Math.ceil(Math.random()*20)
console.log(ramNumber)
var score = 20
var scoreUI = document.querySelector("#score")
var highscore = 0
var highscoreUI = document.querySelector("#highscore")
var myText = document.querySelector("#myText")
function check () {
    var myGuess = document.querySelector("input").value
    if (ramNumber == myGuess ){
         myText.textContent = "You Win"
        scoreUI.textContent = 20
        highscore = score
        highscoreUI.textContent = highscore
    }else{
        const difference = ramNumber - myGuess
        if(difference < 0 ){
          if(difference == -1 || difference == -2 ){
             myText.textContent = "Your Guess is High,But very close"
           }else{
             myText.textContent =  "Your Guess is High"
           }
        }else{
          if(difference == 1 || difference == 2 ){
            myText.textContent =  "Your Guess is Low,But very close" 
          }else{
            myText.textContent = "Your Guess is Low" 
          }
        }
        score--
        scoreUI.textContent = score
    }
}
function again() {
  location.reload();
}