    // esta es para el nombre y apellido ^[a-zA-ZÁ-ÿ\s]{1,40}
    // Regla para numdoc y telefono ^\d{7,10}$
    // Regla para el correo ^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
    // Regla para el password ^(?=.*\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,32}$

    const reglas={
           textos:/^[a-zA-ZÁ-ÿ\s]{1,40}$/, // /^[a-z0-9_-]{3,16}$/, //SOLO LETRAS
           numeros:/^[0-9]{7,10}$/, //SOLO NÚMEROS
           correo:/^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //CORREOS
           password:/^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //PASSWORD
    }


    //acceder al formulario
    let form=document.getElementById("frm-usuario");
    let campos=document.querySelectorAll("#frm-usuario input");


    //Agregar listener de evento submit al formulario que se envia
    form.addEventListener('submit',e=>{
        e.preventDefault(); //evitar que se envie el formulario para realizar validaciones
    });

    // validacion de contraseña
    const Contraseña2=()=>{
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;
        if (password==password2){
            document.querySelector(`#g-password2`).classList.remove("error");
            document.querySelector(`#g-password2`).classList.add("success");
            document.querySelector(`#g-password2 i`).classList.remove("fa-bomb");
            document.querySelector(`#g-password2 i`).classList.add("fa-square-check");
            document.querySelector(`#g-password2 .msn-error`).classList.remove("msn-error-visible");
        }
        else{
            document.querySelector(`#g-password2`).classList.remove("success");
            document.querySelector(`#g-password2`).classList.add("error");
            
        }
    }

    const validarInput=(regla,input,grupo)=>{
        if(regla.test(input.value)){
            document.getElementById(`g-${grupo}`).classList.remove("error");
            document.getElementById(`g-${grupo}`).classList.add("success"); 
            document.querySelector(`#g-${grupo} i`).classList.add("fa-square-check"); //fa-solid fa-square-check
            document.querySelector(`#g-${grupo} i`).classList.remove("fa-bomb"); //fa-sharp fa-solid fa-bomb
            document.querySelector(`#g-${grupo} .msn-error`).classList.remove("msn-error-visible");
        }else{
            document.getElementById(`g-${grupo}`).classList.add("error");
            document.getElementById(`g-${grupo}`).classList.remove("success"); 
            document.querySelector(`#g-${grupo} i`).classList.remove("fa-square-check");
            document.querySelector(`#g-${grupo} i`).classList.add("fa-bomb");
            document.querySelector(`#g-${grupo} .msn-error`).classList.remove("msn-error-visible");
        }
    }

    const validarcampos=(e)=>{
        // console.log("se genero un evento sobre el input"+e.target.name);
        switch(e.target.name){
            case "numdoc":
                validarInput(reglas.numeros,e.target,e.target.name);
            break;
            case "nombre":
                validarInput(reglas.textos,e.target,e.target.name);
            break;
            case "apellido":
                validarInput(reglas.textos,e.target,e.target.name);
            break;
            case "telefono":
                validarInput(reglas.numeros,e.target,e.target.name);
            break;
            case "correo":
                validarInput(reglas.correo,e.target,e.target.name);
            break;
            case "password":
                validarInput(reglas.password,e.target,e.target.name);
            break;
            case "password2":
                validarInput(reglas.numeros, e.target, e.target.name);
                Contraseña2();
                break;
            default:
                alert("No se a recibido un evento sobre el input")
            break;
        }
    }
    //Hacer lo del la 2 contraseña que si es igual a la primera que se ponga en verdecito
    campos.forEach((campo)=>{
        campo.addEventListener("keyup",validarcampos);
        campo.addEventListener("blur",validarcampos);
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const terminos = document.getElementById('terminos'); 
        let tipoDoc = document.getElementById('tipoDoc')
        if(tipoDoc.selected && campos.numDoc && campos.nombre && campos.apellido && campos.fecha && campos.correo && campos.contraseña && terminos.checked){
            formulario.reset();
    
            document.getElementById('form-msg-exito').classList.add('form-msg-exito-activo');
            setTimeout(() => {
                document.getElementById('form-msg-exito').classList.remove('form-msg-exito-activo');
            }, 5000);
    
            document.querySelectorAll('.group-form-correcto').forEach((icono) => {
                icono.classList.remove('group-form-correcto');
            });
        } else {
            document.getElementById('form-msg').classList.add('form-msg-activo');
        }
    });