import { getLocalStorage, saveToLocalStorage } from "./storeTask.js";
import { Task } from "./Task.js";


function renderTask(data){
    
        const taskContainer = document.querySelector('.task-container');

        taskContainer.innerHTML = '';
        data.forEach((element,index) => {
            const div = makeTaskDiv(element.title,element.priority,element.date,element.status,index);
            taskContainer.appendChild(div);
        });
    }

function makeTaskDiv(title,priority,date,status,indexValue){

    let divWraper = document.createElement('div');
    let taskTitleDiv = document.createElement('div');
    let taskPriority = document.createElement('div');
    let taskDate = document.createElement('div');
    let taskActionWraper = document.createElement('div');
    let taskActionContainer  = document.createElement('div');

   let completeBtn = document.createElement('button')
   let editBtn =  document.createElement('button')
   let deleteBtn = document.createElement('button')




    taskTitleDiv.classList.add("sm:row-start-1", "task-title");
    taskPriority.classList.add("sm:row-start-2", "task-priority");
    taskDate.classList.add("sm:row-start-3", "col-start-1", "task-date")
    taskActionWraper.classList.add("sm:row-start-3","col-start-3", "col-span-2" ,"action-wraper")
    taskActionContainer.classList.add("*:border", "*:p-2" ,"flex" ,"flex-row" , "w-full", "*:w-full","**:cursor-pointer", "gap-3" ,"action-container");

    taskTitleDiv.innerText = title;
    taskPriority.innerText = priority;
    taskDate.innerText = "Created :" + date;

    if(status=="pending"){
        completeBtn.innerText = "Complete";
        completeBtn.classList.add("bg-completed")
    }
    else{
        completeBtn.innerText = "Mark Incomplete";
        completeBtn.classList.add("bg-pending")
    }

    completeBtn.classList.add("whitespace-nowrap")


    completeBtn.value = indexValue;
    completeBtn.onclick = (e)=>{
        let currentTasksData = getLocalStorage();
        const divIndex = Number(e.target.value);

        if(e.target.innerText =="Complete"){
            currentTasksData[divIndex].status = "completed";

        }
        else{
            currentTasksData[divIndex].status = "pending";
        }
        
        saveToLocalStorage(currentTasksData)
        renderTask(currentTasksData)

    }
    editBtn.innerText = 'Edit';

    editBtn.value = indexValue;

    editBtn.onclick = (e)=>{
        let currentTasksData = getLocalStorage();

        console.log("Before Edit: ", currentTasksData)

        let {title,priority}  = currentTasksData[e.target.value];

        let updateTaskInput = document.getElementById('task-title');
        let updateTaskPriority = document.getElementById('priority');
        let addSubmitBtn = document.getElementById('submit-btn');
        addSubmitBtn.classList.add('hidden');
        let updateSubmitBtn = document.getElementById('update-btn');

        updateSubmitBtn.classList.remove('hidden');

        updateTaskInput.value = title;
        updateTaskPriority.value = priority;

        updateSubmitBtn.onclick = (f)=>{
            f.preventDefault();
            currentTasksData[e.target.value].title = updateTaskInput.value;
            currentTasksData[e.target.value].priority = updateTaskPriority.value;
            saveToLocalStorage(currentTasksData);
            updateSubmitBtn.classList.add('hidden');
            addSubmitBtn.classList.remove('hidden');

            renderTask(currentTasksData);
            updateTaskInput.value = "";
            updateTaskPriority.value = "Low Priority"
        }

    }


    deleteBtn.classList.add("hover:bg-red-500")
    deleteBtn.innerText = 'Delete';
    deleteBtn.value = indexValue;
    deleteBtn.onclick = (e)=>{
        let currentTasksData = getLocalStorage();
        const divIndex = Number(e.target.value);
        currentTasksData.splice(divIndex,1);
        saveToLocalStorage(currentTasksData)
        renderTask(currentTasksData)

    };



    taskActionContainer.append(completeBtn, editBtn, deleteBtn)
    taskActionWraper.appendChild(taskActionContainer)

    divWraper.append(taskTitleDiv,taskPriority,taskDate,taskActionWraper);

    return divWraper
}

export {renderTask}
