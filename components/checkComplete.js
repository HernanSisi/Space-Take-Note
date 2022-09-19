const checkcomplete = (complete, id) => {
    const i = document.createElement("i");
    if (complete) {
        i.classList.add("fas");
        i.classList.add("completeIcon");
    } else {
        i.classList.add("far");
    }
    i.classList.add("fa-check-square");
    i.classList.add("icon");
    i.addEventListener('click', (event) => completetask(event, id));
    return i;
};
const completetask = (event, id) => {
    const element = event.target;
    element.classList.toggle("far");
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    const task = JSON.parse(localStorage.getItem('task'));
    task[task.findIndex(item=>item.id===id)]['complete'] = !task[task.findIndex(item=>item.id===id)]['complete']
    localStorage.setItem("task", JSON.stringify(task));
};
export default checkcomplete;
