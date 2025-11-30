var number = 0

let imgSrc = document.querySelector("img")
let name = document.querySelector("#name")
let designation = document.querySelector("#designation")
let para = document.querySelector("#para")
var dataArry =[
    {
        imgSrc : "assets/Ahmad.jpeg" ,
        name : "Ahmad",
        designation: "Developer",
        para : "Hi , My name is Ahmad and I am Full Stack Developer"
    }
    ,
    {
        imgSrc : "assets/Arsalan.jpeg" ,
        name : "Arsalan",
        designation: "Sales Manager",
        para : "Hi , My name is Arsalan and I am Sales manager"
    }
    ,
    {
        imgSrc : "assets/Bilal.jpeg" ,
        name : "Bilal",
        designation: "Import Manager",
        para : "Hi , My name is Bilal and I am Import Manager"
    }
    ,
    {
        imgSrc : "assets/Mannan.jpeg" ,
        name : "Mannan",
        designation: "Accounts Manager",
        para : "Hi , My name is Mannan and I am Accounts Manager"
    }
]
para.textContent = dataArry[number].para
designation.textContent = dataArry[number].designation
name.textContent = dataArry[number].name
imgSrc.src = dataArry[number].imgSrc

document.querySelector("#next").addEventListener("click",function () {
if(number == 3 ){
    number = 0
} else {
    number++
}
para.textContent = dataArry[number].para
designation.textContent = dataArry[number].designation
name.textContent = dataArry[number].name
imgSrc.src = dataArry[number].imgSrc
})

document.querySelector("#previous").addEventListener("click",function () {
if(number == 0){
    number = 3
}else{
    number--
}
para.textContent = dataArry[number].para
designation.textContent = dataArry[number].designation
name.textContent = dataArry[number].name
imgSrc.src = dataArry[number].imgSrc
})