

function agregarTarea(descripcion, prioridad ="media"){
 if(!descripcion || descripcion.trim() === ""){
    throw new Error("La descripcion no puede estar vacia");
 }

 const nuevaTarea = {
    id: Date.now(),
    descripcion: descripcion.trim(),prioridad,
    Creada: new Date().toISOString(),
    completada: false
 };
 return nuevaTarea;

}
module.exports = {agregarTarea};




