import { readTask } from './readTask.js';

const trashtask = (id) => {
    const i = document.createElement("i");
    i.classList.add("fas");
    i.classList.add("fa-trash-alt");
    i.classList.add("trashIcon");
    i.classList.add("icon");
    i.addEventListener('click',() => deletetask(id));
    return i;
};
const deletetask = (id) =>{
    const task = JSON.parse(localStorage.getItem('task'));
    task.splice(task.findIndex(item=>item.id===id),1);
    localStorage.setItem("task", JSON.stringify(task));
    document.querySelector("[data-list]").innerHTML = '';
    readTask();
};

export default trashtask;
