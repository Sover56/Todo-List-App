const update = (orderParams) => {
  const editBtn = document.querySelector(`#edit-btn-${orderParams}`)
  editBtn.addEventListener("click", () => {
    editBtn.disabled = true
    console.log("edit button clicked")
    const oldChild = document.getElementById(`item-${orderParams}`)
    const newInput = document.createElement("input")
    newInput.value = oldChild.innerHTML

    oldChild.replaceChild(newInput, oldChild.childNodes[0])
    

    newInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        oldChild.innerHTML = newInput.value
        editBtn.disabled = false
      }
    })
  })
}

export default update