var editItem = null
function add(){
    var input = document.querySelector("#input")
    if(input.value.trim() === ""){
        alert("Please add item")
        return
    }
    if(editItem !== null){
        editItem.firstChild.nodeValue = input.value
        editItem = null
        input.value = ""
        return
    }
    var li = document.createElement("li")
    li.className = "item"
    li.innerHTML = `
        ${input.value}
        <span>
            <span class="edit"><i class="fa-regular fa-pen-to-square"></i></span>
            <span class="delete"><i class="fa-solid fa-trash"></i></span>
        </span>
    `
    document.querySelector("#list").appendChild(li)
    input.value = ""
}
document.addEventListener("click", function(e){
    if(e.target.closest(".edit")){
        editItem = e.target.closest("li")
        document.querySelector("#input").value =
            editItem.firstChild.nodeValue.trim()
    }
    if(e.target.closest(".delete")){
        e.target.closest("li").remove()
    }
})