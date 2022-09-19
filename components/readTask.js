import {createtask} from './addTask.js';
import { uniqueDates } from '../services/date.js';
import dateElement from './dateElement.js';
export const readTask = () => {
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    const unico = uniqueDates(taskList);
    unico.forEach(i =>{
        document.querySelector("[data-list]").appendChild(dateElement(i));
        taskList.forEach(element => {
            if (moment(i,'DD/MM/YYYY').diff(moment(element.date,'DD/MM/YYYY'))===0) {
                createtask(element);
            }
        });
    })
};