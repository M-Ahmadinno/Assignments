var counter = 0

var counterUI = document.querySelector("#counterUI")

document.querySelector("#btnDECREASE").addEventListener("click", function () {
    console.log(counterUI) 
    counter--
    
   counterUI.textContent = `${counter}`
})

document.querySelector("#btnINCREASE").addEventListener("click", function (){
    counter++
    counterUI.textContent = `${counter}`
})

document.querySelector("#btnRESET").addEventListener("click",function(){
    counter = 0
    counterUI.textContent = `${counter}`
})