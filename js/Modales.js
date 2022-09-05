// Acceder al boton para abrir el modal

let btnmodal=document.getElementById('AbrirModal');

// Acceder ventana modal

let venmodal=document.getElementById('VentanaModal');

// Acceder al incono cerrar de la ventana

let cermodal=document.querySelector('CerrarModal');

btnmodal.addEventListener('click',()=>{
    venmodal.style.display="block";
});

cermodal.addEventListener('click',()=>{
    venmodal.style.display="none";
});

window.addEventListener('click',(e)=>{
if(e.target==venmodal){
    venmodal.style.display="none";
}
});