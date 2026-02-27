'use strict';

import { themeChanger } from "./themeChanger.js";
import { Task } from "./Task.js";
import { displayTaskDiv } from "./generateTaskDiv.js";



let taskCollection = [];


document.addEventListener('DOMContentLoaded',()=>{
    
    themeChanger();


    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();

        let taskTittle = document.getElementById("task-title");
        let taskPriority = document.getElementById("priority");
        let taskDate = new Date().toLocaleDateString();

        const NewTask = new Task(taskTittle.value,taskPriority.value,taskDate);


        taskCollection.push(NewTask);
        

        displayTaskDiv(taskCollection[taskCollection.length-1]);
        clearForm(taskTittle, taskPriority)
    })





    function clearForm(title,priority){
        title.value = '';
        priority.value = '';
    }

})