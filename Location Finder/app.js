document.querySelector("#findBtn").addEventListener("click",getLocation)
function getLocation (){
    navigator.geolocation.getCurrentPosition(
    function(success){
     console.log(success,"success")
     const { coords } = success;
     const {latitude,longitude} = coords
     console.log(latitude,longitude)
     countryNameFoo(latitude,longitude)
     document.querySelector("#map").innerHTML=` <iframe
  width="300"
  height="150"
  style="border:0;"
  loading="lazy"
  allowfullscreen
  src="https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed">
</iframe>`
    }, 
    function(error){
     console.log(error)  
    });
}
function countryNameFoo(lat,long){
    fetch(`https://geocode.xyz/${lat},${long}?geoit=json&auth=172274200473401811666x42342`)
       .then(response => response.json()).then(function(response){
        console.log(response)
        const {country} = response
        countryDetailsFoo(country)
       })
}
function countryDetailsFoo(countryName){
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(function(result){
        return result.json()
    })
    .then(function(result){
    console.log(result)
    document.querySelector("#name").textContent = result[0].name.common
    document.querySelector("#box").style.height = "700px"
    document.querySelector("#flag").src = result[0].flags.png
    })
}

