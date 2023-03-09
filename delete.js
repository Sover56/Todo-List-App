const todoList = document.querySelector("#todo-list")
const remove = (orderParams) => {
  const deleteBtn = document.querySelector(`#delete-btn-${orderParams}`)
  deleteBtn.addEventListener("click", () => {
    const li = document.querySelector(`#li-${orderParams}`)
    todoList.removeChild(li)
    console.log(deleteBtn.id)
  })
}

export default remove