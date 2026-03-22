'use strict';

import { themeChanger } from "./themeChanger.js";
import { renderTask } from "./manageTask.js";
import { addTask } from "./addTask.js";
import {getLocalStorage} from "./storeTask.js";
import {allFilter, completedFilter, pendingFilter, highPriorityFilter,search } from "./searchAndFilter.js";



document.addEventListener('DOMContentLoaded',()=>{
    const allBtn = document.querySelector('.all-tab')

    const completedBtn = document.querySelector('.completed-tab');
    const pendingBtn = document.querySelector('.pending-tab');
    const highPriorityBtn = document.querySelector('.high-tab');
    const searchField = document.getElementById('searchInput');

    themeChanger();


    let taskData = getLocalStorage();
    
    if(taskData != null){
        renderTask(taskData);
    }

    allBtn.addEventListener('click', ()=>{
        allFilter(allBtn.value)
    })

    completedBtn.addEventListener('click', ()=>{
        completedFilter(completedBtn.value)
    })

    pendingBtn.addEventListener('click',()=>{
        pendingFilter(pendingBtn.value)
    })

    highPriorityBtn.addEventListener('click',()=>{
        highPriorityFilter(highPriorityBtn.value)
    })

    searchField.addEventListener('input',search);

    addTask();

})