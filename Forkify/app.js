var recipeName = document.querySelector("input")
function searchRecipe(){
    var recipeNamevalue = recipeName.value
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipeNamevalue}`)
    .then(function(res){
        return res.json()
    }).then(function(res){
        console.log(res)
        var {data} = res
        var {recipes} = data
        var itemList = recipes.map(function(obj){
             return `
        <li onclick="itemDetail(this)" class="List" id="${obj.id}">
            <div id="DishImg"><img src="${obj.image_url}" alt=""></div>
            <div id="nameDiscrip">
                <div id="dishName"><h1>${obj.title}</h1></div>
                <div id="dishDisrip"><p>${obj.publisher}</p></div>
            </div>
        </li>`;
}).join("");
        document.querySelector("#recipeList").innerHTML = itemList
        
    }).catch()   
   
}
function itemDetail(elem){
    var id = elem.id
    console.log(id)
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
    .then(function(res){
        return res.json()
    }).then(function(res){
        console.log(res)
        var {data} = res
        var {recipe} = data
        document.querySelector("#recipeDetails").innerHTML =
        `<div id="dishImage"><img src="${recipe.image_url}" alt=""></div>
                <div id="recipename">${recipe.title}</div>
                <div id="timeServing">
                    <div id="time"><i class="fa-regular fa-clock"></i>${recipe.cooking_time}MINUTES</div>
                    <div id="serving"><i class="fa-solid fa-people-line"></i>${recipe.servings}PERSON</div>
                    <div id="save"><i class="fa-regular fa-bookmark"></i></div>
                </div>
                <h1 class="heading">RECIPE INGREDIENTS</h1>
                <ul id="ingredients"></ul>`;
        var {ingredients} = recipe
        var li = ingredients.map(function(elem){
            return `<li><i class="fa-solid fa-check"></i>${elem.quantity} ${elem.description} ${elem.unit}</li>`

        }).join("")
        document.querySelector("#ingredients").innerHTML = li
        

    }).catch()
}
