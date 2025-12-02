var player1Turn = true
var player2Turn = false
let player1CurrentScoreUI = document.querySelector("#player1CurrentScoreUI") 
let player2CurrentScoreUI = document.querySelector("#player2CurrentScoreUI")  
let currentScore = 0
if(player1Turn == true){
      document.querySelector("#player1").classList.add("active")
}

function rollDice (){
   if(player1Turn == true){
     var rollDice = Math.ceil(Math.random()*6)
    document.querySelector("img").src = `./assets/${rollDice}.png`
    currentScore += rollDice
    player1CurrentScoreUI.textContent = currentScore
    if(rollDice == 1){
        currentScore =0
        player1Turn = false
        player2Turn = true       
        player1CurrentScoreUI.textContent = currentScore
        document.querySelector("#player2").classList.add("active")
        document.querySelector("#player1").classList.remove("active")
   
   }}else{
    var rollDice = Math.ceil(Math.random()*6)
    document.querySelector("img").src = `./assets/${rollDice}.png`
    currentScore += rollDice
    player2CurrentScoreUI.textContent = currentScore
    if(rollDice == 1){
        currentScore =0
        player1Turn = true   
        player2Turn = false  
        player2CurrentScoreUI.textContent = currentScore
        document.querySelector("#player1").classList.add("active")
        document.querySelector("#player2").classList.remove("active")
   
   }}}
var player1TotalScoreUI = document.querySelector("#player1TotalScoreUI")
var player2TotalScoreUI = document.querySelector("#player2TotalScoreUI")
var player1TotalScore = 0
var player2TotalScore = 0

function holdDice (){
    if(player1Turn == true){
        player1TotalScore += currentScore
        player1TotalScoreUI.textContent =player1TotalScore
        currentScore =0
        player1Turn = false
        player2Turn = true       
        player1CurrentScoreUI.textContent = currentScore
        document.querySelector("#player2").classList.add("active")
        document.querySelector("#player1").classList.remove("active")
         if(Number(player1TotalScoreUI.textContent) > 50){
            alert("Player1 is a Winner")
            resetGame()
         }

}else{
        player2TotalScore += currentScore   
        player2TotalScoreUI.textContent =  player2TotalScore
        currentScore =0
        player2Turn = false  
        player1Turn = true   
        player2CurrentScoreUI.textContent = currentScore
        document.querySelector("#player1").classList.add("active")
        document.querySelector("#player2").classList.remove("active")
         if(Number(player2TotalScoreUI.textContent) > 50){
            alert("Player2 is a Winner")
            resetGame()
         }
}}

function resetGame (){
    document.querySelector("#player1").classList.add("active")
    document.querySelector("#player2").classList.remove("active")
    player1Turn = true   
    player2Turn = false
    currentScore =0
    player1CurrentScoreUI.textContent = currentScore
    player2CurrentScoreUI.textContent = currentScore
    player1TotalScore = 0
    player2TotalScore = 0
    player1TotalScoreUI.textContent =player1TotalScore
    player2TotalScoreUI.textContent =player1TotalScore
}


