import update from "./update.js"
import remove from "./delete.js"
const todoInput = document.getElementById("todo-input")
const todoList = document.querySelector("#todo-list")
const addBtn = document.querySelector("#add-btn")
let order = 1

addBtn.addEventListener("click", ()=>{
  if (todoInput.value) {
    const todoItem = document.createElement("li");
    todoItem.id = `li-${order}`
    todoItem.innerHTML = `
      <div>
      <div id="span-div"><span id="item-${order}">${todoInput.value}</span></div>
      <div id="middle-div"></div>
      <div id="buttons-div">
      <button type="button" id="edit-btn-${order}">Edit</button>
      <button type="button" id="delete-btn-${order}">Delete</button>
      </div>
      </div>     
    `   
    todoList.appendChild(todoItem);
    console.log("Clicked add button")
    todoInput.value = ""

    update (order)
    remove (order)
    order++

  }
}) 

todoInput.addEventListener("keydown", (e)=>{
  if(e.key=== "Enter") {
    if (todoInput.value) {
      const todoItem = document.createElement("li");
      todoItem.id = `li-${order}`
      todoItem.innerHTML = `
        <div id="span-div"><span id="item-${order}">${todoInput.value}</span></div>
        <div id="middle-div"></div>
        <div id="buttons-div">
        <button type="button" id="edit-btn-${order}">Edit</button>
        <button type="button" id="delete-btn-${order}">Delete</button>
        </div>
      `     
      todoList.appendChild(todoItem);
      console.log("Clicked add button")
      todoInput.value = ""
  
      update (order)
      remove (order)
      order++
    }
  }
  
}) 