function getLocation (){
    navigator.geolocation.getCurrentPosition(
    function(success){
     console.log(success,"success")
     const { coords } = success;
     const {latitude,longitude} = coords
     console.log(latitude,longitude)
     countryNameFoo(latitude,longitude)
    }, 
    function(error){
     console.log(error)  
    });
}
function countryNameFoo(latitude,longitude){
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    .then(
        function(res){
            return res.json()
        }
    )
    .then(
        function(res){
            console.log(res)
        }
    )
    .catch();
}
getLocation()