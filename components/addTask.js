import checkcomplete from './checkComplete.js';
import trashtask from './deleteIcon.js';
import { readTask } from './readTask.js';
export const addtasklistener = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    if (input.value != "") {
        const calendar = document.querySelector("[data-form-date]");
        const date = moment(calendar.value).format('DD/MM/YYYY');
        const val = input.value;
        const taskList = JSON.parse(localStorage.getItem('task')) || [];
        const complete = false;
        taskList.push({
            val,
            date,
            complete,
            id: uuid.v4()
        });
        localStorage.setItem("task", JSON.stringify(taskList));
        input.value = '';
        document.querySelector("[data-list]").innerHTML = '';
        readTask();
    }
}

const taskvalue = (val) => {
    const i = document.createElement("span");
    i.textContent = val;
    i.classList.add("task");
    return i;
};

export const createtask = ({ val, date, complete, id}) => {
    const j = document.createElement("div");
    j.appendChild(checkcomplete(complete, id));
    j.appendChild(taskvalue(val));
    const i = document.createElement("li");
    i.classList.add("card");
    i.appendChild(j);
    i.appendChild(trashtask(id));
    document.querySelector("[data-list]").appendChild(i);
};