
export function getLocalStorage(){
    return JSON.parse(localStorage.getItem("task"))??[];
}

export function saveToLocalStorage(arr){
    localStorage.setItem("task", JSON.stringify(arr));
}