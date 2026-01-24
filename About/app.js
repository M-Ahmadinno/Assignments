var historyData = "I'm baby wolf pickled schlitz try hard normcore marfa man bun mumblecare vice pop-up XOXO lomo kombucha glossier bicycle rights. Umarni kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
var visionData = " The scene features a winding wooden boardwalk that guides the eye through a valley filled with dry, golden-brown alpine grasses towards a large, snow-capped mountain peak in the distance. The surrounding mountains are rugged and steep, creating an awe-inspiring natural setting. "
var GoalsData = "Sustainability and Safety: Ensuring the experience is sustainable and safe for all visitors. This includes reducing the number of safety incidents and search and rescue operations. Protecting the fragile environment and reducing erosion caused by foot traffic. The boardwalks and upgraded surfaces are specifically designed to guide walkers and minimize damage to delicate alpine vegetation. "
function showData(elem){
    document.querySelector("#goals").style.border = ""
    document.querySelector("#vision").style.border = ""
    document.querySelector("#history").style.border = ""
    if(elem.id ==="history"){
       document.querySelector("#showData").style.display = "block"
       document.querySelector("#history").style.border = "2px solid black"
       document.querySelector("#showData").textContent = historyData
    }else if (elem.id ==="vision"){
       document.querySelector("#showData").style.display = "block"
       document.querySelector("#vision").style.border = "2px solid #6ea0e2"
       document.querySelector("#showData").textContent = visionData
    }else if(elem.id ==="goals"){
       document.querySelector("#showData").style.display = "block"
       document.querySelector("#goals").style.border = "2px solid #4f5255"
       document.querySelector("#showData").textContent = GoalsData
    }
}