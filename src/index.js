
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
const form = document.querySelector('#create-task-form')

form.addEventListener('submit', (event) => {

  const newInput = document.querySelector('#new-task-description').value
  const newTask = document.querySelector('#tasks')
  const newList = document.createElement('li')

  newTask.append(newList)
  newList.innerText = newInput

  event.preventDefault()


})
});
