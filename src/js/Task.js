class Task{
    constructor(title,priority,date){
        this.title =title;
        this.priority = priority;
        this.date = date;
        this.status = "pending";
    }

    editTask(newTitle,newPriority){
        this.title = newTitle;
        this.priority = newPriority;
    }


    
}

export {Task};