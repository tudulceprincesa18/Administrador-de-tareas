const numerito = document.getElementById('numerito');
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const año = document.getElementById('año');

//contenedor de tareas 
const tareas = document.getElementById('contenedorTareas');

const setDate = () => {
        const date = new Date();
        numerito.textContent = date.toLocaleString('Es', {day: 'numeric'});
        dia.textContent = date.toLocaleString('Es', {weekday: 'long'});
        mes.textContent = date.toLocaleString('Es', {month: 'short'});
        año.textContent = date.toLocaleString('Es', {year: 'numeric'});
};

const nuevo = event =>{
       event.preventDefault();
       const { value } = event.target.ingresarTarea;
       if(!value) return;
       const tarea = document.createElement('div');
       tarea.classList.add('tarea', 'botonOrdenar');
       tarea.addEventListener('click', cambiarEstado)
       tarea.textContent = value;
       tareas.prepend(tarea);
       event.target.reset();
};

const cambiarEstado = event => {
       event.target.classList.toggle('hecho');
};

const ordenar = () => {
     const hecho = [];
     const porHacer = [];
     tareas.childNodes.forEach( el => {
            el.classList.contains('hecho') ? hecho.push(el) : porHacer.push(el)
        })
     return [...porHacer, ...hecho];
}

const ordenarTareas = () => {
    ordenar().forEach(el => tareas.appendChild(el))
}

setDate();