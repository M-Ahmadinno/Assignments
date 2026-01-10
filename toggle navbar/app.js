document.querySelector("#hamBurger").addEventListener("click",function(){
    document.querySelector(".cancelbtn").classList.toggle("active")
    document.querySelector(".row1").classList.toggle("hide1")
    document.querySelector(".row2").classList.toggle("hide2")
    document.querySelector(".row3").classList.toggle("hide3")
    document.querySelector(".afterHamBurgerList").classList.toggle("activeafterHamBurgerList")
})