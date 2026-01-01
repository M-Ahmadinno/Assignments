var ramNumber = Math.ceil(Math.random()*20)
console.log(ramNumber)
var score = 20
var scoreUI = document.querySelector("#score")
var highscore = 0
var highscoreUI = document.querySelector("#highscore")
var myText = document.querySelector("#myText")
function check () {
    var myGuess = document.querySelector("input")
    if (ramNumber == myGuess.value ){
         myText.textContent = "You Win"
        scoreUI.textContent = 20
        highscore = score
        highscoreUI.textContent = highscore
    }else{
        score--
        scoreUI.textContent = score
        if(myGuess.value > ramNumber){
          myText.textContent = "Your Guess is High"
        }else{
          myText.textContent = "Your Guess is Low"  
        }
    }
}
function again() {
  location.reload();
}