let tareas = [];
 
function inicializar(){
  tareas = [];
 }

 function guardarTarea(tarea){
    tareas.push(tarea);
 }

function obtenerTareas(){
    return tareas;
}

module.exports ={
    inicializar,
    guardarTarea,
    obtenerTareas

};