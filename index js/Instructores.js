/**Recopile los nombres y apellidos de los instructores del trimestre, así como la actividad
que orienta cada uno. Desarrolle un programa que le permita comprobar ¿cómo se llama
el instructor y qué orienta?
Permítale a un usuario seleccionar un elemento de una lista de nombres, otra lista de
apellidos y una más de actividades. Si la selección del nombre, apellido y actividad es
correcta, muéstrele un mensaje que diga La respuesta es correcta, de lo contrario La
respuesta es incorrecta. */


const btn=document.getElementById("calcular");
const ops = document.getElementById('ops');
ops.addEventListener('click', (e)=>{
    e.preventDefault();
    //console.log(e.target.id); Mostrar id especifico de los elementos a escuchar, en este caso ops, target obtiene varias propiedades.
    id = e.target.id;
    let nombre=parseInt(document.getElementById("nombre").value);
    let apellido=parseInt( document.getElementById("apellido").value);
    let area=parseInt(document.getElementById("area").value);
    const rta = document.getElementById('respuesta');
    
    if  (nombre == 1 && apellido== 4 && area==2){
        alert('Es correcto');
        const img = ` <i class="fa-solid fa-clipboard-check"></i>`;
        rta.innerHTML = img;
        rta.style.setProperty('font-size', '2.5rem');
    }
    else if  (nombre == 2 && apellido== 1 && area==4){
        alert('Es correcto');
        const img = ` <i class="fa-solid fa-clipboard-check"></i>`;
        rta.innerHTML = img;
        rta.style.setProperty('font-size', '2.5rem');
    }
    else if  (nombre == 3 && apellido== 2 && area==3){
        alert('Es correcto');
        const img = ` <i class="fa-solid fa-clipboard-check"></i>`;
        rta.innerHTML = img;
        rta.style.setProperty('font-size', '2.5rem');
    }
    else if  (nombre == 4 && apellido== 3 && area==1){
        alert('Es correcto')
        const img = ` <i class="fa-solid fa-clipboard-check"></i>`;
        rta.innerHTML = img;
        rta.style.setProperty('font-size', '2.5rem');
    }
    else {
        alert('Es incorrecto')
        const img = `<i class="fa-solid fa-circle-xmark"></i>`;
        rta.innerHTML = img;
        rta.style.setProperty('font-size', '2.5rem');
    }
})