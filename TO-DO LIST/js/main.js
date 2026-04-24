const tareas = []

function nuevaTarea(){
    const input = document.querySelector(".input")
    const contenido = input.value;


    
    //validaciones
    if (contenido === ""){
        alert("Campo Vacio")
        return //alertaError("Campo Vacio")
    }

  
    if (contenido.length > 50){
        alert("Limite de caracteres superado (50)")
        return //alertaError("Limite de caracteres superado (50)")
    }
  
   0 /*function alertaError(alerta){
        const fondo=document.querySelector(".fondo")
        const box = document.createElement("div")
        box.className="errorAlert" 
        box.innerHTML= '<div class="logo"><span class="fa-solid fa-triangle-exclamation"></div><span class ="textoAlerta">'+alerta+'</span></span>'
        const logo= document.querySelector(".logo")
        fondo.appendChild(box)
        console.log(alerta)
       

        box.style.animation = "entrarBox 0.8s ease-out forwards";

        setTimeout(() => {
            logo.style.animation = "wobble 0.8s ease-in-out infinite";
        }, 1000);

        setTimeout(() => {
            box.style.animation = "salirBox 0.8s ease-in forwards";
            setTimeout(() => box.remove(), 800);
        }, 5000);
    }*/

    const tarea = {
        id: tareas.length + 1,
        contenido: contenido,
        estado: false
    }

    tareas.push(tarea)
    creacionTarea()
    input.value=""
    

}


function creacionTarea(){
    const lista = document.getElementById("lista")
    lista.innerHTML=""
    actualizarInfo()

    

    for (let i = 0; i < tareas.length; i++) {
        
        const tarea=tareas[i]
        const item =document.createElement("li")
        item.textContent=tarea.contenido
        lista.appendChild(item)
        
        const checkbox=document.createElement("input")
        checkbox.type="checkbox"
        checkbox.checked = tarea.estado
        item.appendChild(checkbox)

        checkbox.addEventListener("change", function(){
            tarea.estado=checkbox.checked
            if (tarea.estado) {
                item.style.textDecoration = "line-through";
            } else {
                item.style.textDecoration = "none";
            }
            actualizarInfo()
        })

        if (tarea.estado) {
            item.style.textDecoration = "line-through";
        }
    }
}

function actualizarInfo(){

    const compSpan = document.querySelector(".compSpan")
    const pendSpan = document.querySelector(".pendSpan")
    const totalSpan = document.querySelector(".totalSpan")
    const completadas = tareas.filter(tarea => tarea.estado).length  // solucion para el calculo 
    // crea un nuevo array con todos los elementos de un array original que cumplen una condición específica definida por una función.
    const pendientes = tareas.length - completadas

    compSpan.textContent = completadas
    pendSpan.textContent = pendientes
    totalSpan.textContent = tareas.length
}

