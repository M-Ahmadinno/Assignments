document.querySelector("#openBtn").addEventListener("click",function(){
    document.querySelector("#forColor").classList.toggle("active")
    document.querySelector("#openBtn").classList.toggle("active")
    document.querySelector("#cancelBtn").classList.toggle("active")
    document.querySelector("h1").textContent = "MODEL CONTANT"
})
document.querySelector("#cancelBtn").addEventListener("click",function(){
    document.querySelector("#forColor").classList.toggle("active")
    document.querySelector("#openBtn").classList.toggle("active")
    document.querySelector("#cancelBtn").classList.toggle("active")
    document.querySelector("h1").textContent = "MODEL PROJECT"
})