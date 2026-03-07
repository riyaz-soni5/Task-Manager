import { renderTask } from "./manageTask.js";
import { getLocalStorage } from "./storeTask.js";


function allFilter(){
    let currentTask = getLocalStorage();

    renderTask(currentTask)
}
function completedFilter(){
    let currentTask = getLocalStorage();

    let completeTask = currentTask.filter((task)=> task.status == "completed")??[];

    renderTask(completeTask);
}
function pendingFilter(){
    let currentTask = getLocalStorage();
    
    let pendingTask = currentTask.filter((task)=> task.status == "pending")??[];

    renderTask(pendingTask);
}

function highPriorityFilter(){
    let currentTask = getLocalStorage();
    
    let highPriorityTask = currentTask.filter((task)=> task.priority == "High Priority")??[];


    renderTask(highPriorityTask);
}


function search(e){
    let currentTask = getLocalStorage();


    let matchSearch = currentTask.filter((task)=>{
        if(task.title.includes(e.target.value)){
            return 1;
        }
        else if(task.priority.includes(e.target.value)){
            return 1;
        }
        else 0
    })


    renderTask(matchSearch)


}


export { allFilter,completedFilter, highPriorityFilter, pendingFilter, search}