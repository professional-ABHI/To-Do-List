function addTask(){
    let newtask = document.createElement("li")
    document.getElementById("tasklist").appendChild(newtask)
    newtask.textContent = document.getElementById("inputTask").value
   document.getElementById("inputTask").value=""
   deleteTask(newtask)
}
function deleteTask(newtask){
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent="Delete"
    newtask.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
    newtask.remove()
    }

}