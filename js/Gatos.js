let opciones=document.getElementById("opciones");
let resp=document.getElementById("respuesta");
opciones.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target=='opcion1'){
        resp.innerHTML='opcion incorrecta';
        resp.classList.add("incorrecto");
        resp.style.propertis("visbility","Visible");
    }
    else if(e.target=='opcion2'){
        resp.innerHTML='opcion incorrecta';
        resp.classList.add("incorrecto");
        resp.style.propertis("visbility","Visible");
        resp.classList.remove("correcto")
    }
    else if(e.target=='opcion3'){
        resp.innerHTML='opcion correcta';
        resp.classList.add("correcto");
        resp.style.propertis("visbility","Visible");
    }
    else if(e.target=='opcion4'){
        resp.innerHTML='opcion incorrecta';
        resp.classList.add("incorrecto");
        resp.style.propertis("visbility","Visible");
    }
})