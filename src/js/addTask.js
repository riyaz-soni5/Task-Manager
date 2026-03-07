import { Task } from "./Task.js";
import { getLocalStorage, saveToLocalStorage } from "./storeTask.js";
import { renderTask } from "./manageTask.js";


function addTask(){

    document.querySelector('form').addEventListener('submit',(e)=>{
            e.preventDefault();
    
            let taskTittle = document.getElementById("task-title");
            let taskPriority = document.getElementById("priority");
            let taskDate = new Date().toLocaleDateString();
    
            const newTask = new Task(taskTittle.value,taskPriority.value,taskDate);

            let taskData = getLocalStorage();

            taskData.push(newTask)

            saveToLocalStorage(taskData);
            renderTask(taskData)
            
            clearForm(taskTittle, taskPriority)
        })


}

function clearForm(title,priority){
        title.value = '';
        priority.value = 'Low Priority';
    }

export {addTask}
