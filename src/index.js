//document.addEventListener("DOMContentLoaded", () => {
  // your code here
//});
/*
//From ChatGPT
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("new-task-description");
    const taskDescription = input.value;
  
    
    /*
    if (taskDescription.trim() !== "") { 
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `${taskDescription} <button class="delete-button">Delete</button>`;
      taskList.appendChild(taskItem);
      input.value = ""; // Clear input field after adding task
    } else {
      alert("Please enter a task description."); // Notify user if input is empty
    }
  });
  */

/*  
  taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-button")) {
      event.target.parentElement.remove(); // Remove task when delete button is clicked
    }
  });
  
});
})

*/

/*
//Shane's Version
document.addEventListener("DOMContentLoaded", () => {
  const newTaskDescription = document.getElementById("new-task-description");
  const theList = document.getElementById("tasks");
  const createTaskForm = document.getElementById("create-task-form");

  createTaskForm.addEventListener("submit", createNewTask);

  function createNewTask(event) {
    event.preventDefault();
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
    createButton(newTask);
    theList.appendChild(newTask);
    event.target.reset();
  }

  function createButton(task) {
    const btn = document.createElement("button");
    btn.innerText = "X";
    task.appendChild(btn);
    btn.addEventListener("click", deleteTask);
  }

  function deleteTask(e) {
    const selectedTask = e.target.parentElement;
    theList.removeChild(selectedTask);
  }
});
*/

//Teacher's soultion

//save task list as cont
const tasklist = document.getElementById('tasks')

//save form as const or save inpu/submit
const form = document.getElementById('create-task-form')
const formValue = document.getElementById('new-task-description')

//after submitting the form
//user needs to interact with page to submit form, therefore... addEventListener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
  let newTask = formValue.value
  //rely on form...
  newTak = e.target["new-task-description"].value
  //put task in list
  let newLi = document.createElement('li')
  tasklist.append(newLi)
})
  //save task description (i.e. user imput)
  //put task in list
