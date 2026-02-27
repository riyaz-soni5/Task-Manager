
function displayTaskDiv(newtask){

    const taskContainer = document.querySelector('.task-container');


    const div = TaskDiv(newtask.title,newtask.priority,newtask.date);
    taskContainer.appendChild(div);

    



    function TaskDiv(title,priority,date){
        let divWraper = document.createElement('div');
        let taskTitleDiv = document.createElement('div');
        let taskPriority = document.createElement('div');
        let taskDate = document.createElement('div');

        taskTitleDiv.classList.add("row-start-1", "task-title");
        taskPriority.classList.add("row-start-2", "task-priority");
        taskDate.classList.add("row-start-3", "col-start-1", "task-date")

        taskTitleDiv.innerText = title;
        taskPriority.innerText = priority;
        taskDate.innerText = date;

        divWraper.append(taskTitleDiv,taskPriority,taskDate)

        return divWraper
    }
}


export {displayTaskDiv}
