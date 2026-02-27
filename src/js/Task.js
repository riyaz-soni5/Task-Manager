class Task{
    #status;
    constructor(title,priority,date){
        this.title =title;
        this.priority = priority;
        this.date = date;
        this.#status = "pending";
    }

    get Status(){
        return this.#status
    }

    set Status(value){
        this.#status = value;
    }
}

export {Task};