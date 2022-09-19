import {addtasklistener} from './components/addTask.js';
import {readTask} from './components/readTask.js';
const btn = document.querySelector("[data-form-btn]");
btn.addEventListener("click", addtasklistener);


const cal = document.querySelector("[data-form-date]");
const d = ()=>{
    const correccion=(val) =>{let i = ''; if (val < 10) i = '0'; i += val; return i;}
    const date = new Date();
    const da = date.getFullYear()+'-'+correccion(date.getMonth()+1)+'-'+correccion(date.getDate());
    // console.log(da);
    return da;
};
cal.setAttribute('min',d());
cal.setAttribute('value',d());
console.clear();

readTask();