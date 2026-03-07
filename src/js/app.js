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

    allBtn.addEventListener('click',allFilter)

    completedBtn.addEventListener('click',completedFilter)

    pendingBtn.addEventListener('click',pendingFilter)

    highPriorityBtn.addEventListener('click',highPriorityFilter)

    searchField.addEventListener('input',search);

    addTask();

})