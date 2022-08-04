console.log("hola mundo");

let numero = 25;

console.log("El numero es",numero);
console.log(`El numero es ${numero}`);

let nombre="Papi RIKO";

console.log("Mi nombre es",nombre);
console.log(`Mi nombre es ${nombre}`);

let booleano=true ;
let sinValor;

console.log(`El Booleano es ${booleano}`);
console.log(`El dato Sin Valor ${sinValor}`);

let res=numero+5;

console.log(`La suma es: ${res}`);
console.log(`La suma es: ${numero+10}`);

// window.alert("Esto es una alerta WIU WIU");
// let $estado=window.confirm("Quires que esta pagina te inspeccione?");

// console.log(`El pibe quiere que ${$estado}`);

// let num1=prompt("Digite el primer numero COÑO");
// let num2=prompt("Digite el sugundo numero COÑO");
// let suma=parseInt(num2)+parseInt(num1);
// console.log(`La suma es: ${suma}`);

// // Condicionales
// console.log(`numero 1: ${num1}`);
// console.log(`numero 2: ${num2}`);
// if(parseInt(num1)>parseInt(num2))
// console.log(`El primer numero dijitado es mayor que el segundo`);
// else if(parseInt(num1)==parseInt(num2)){
//     console.log(`Los dos numeros son iguales`);
// }
// else{5
//         console.log(`El segundo numero dijitado es mayor el que el primero`);
// }

// //operador ternario

// let nummayor=(num1>num2)
// ?"El numero mayor es el primero"
// : "El numero mayor es el segundo"

// console.log(nummayor);

//Condicionales con condicion compuesta

// let username=prompt("Dijite su Usuario");
// let password=prompt("Diijte su contraseña");

// if(username=="carreño" && password=="aña")
// window.alert(`Bienvenido5323 wuapo`);
// else if(username=="carreño" || password=="no se la sabe"){
// window.alert(`Contrseña incorrecta`);
// }
// else if(username=="nolc" || password=="aña"){
//     window.alert(`Usuario incorrecto`);
// }
// else{
//     window.alert(`Revise sus credenciales gei`);
// }

//Condicional multiple
let num1=prompt("Dijite el primer numero");
let num2=prompt("Diijte el segundo numero");
let operaciones=prompt("que operacion elije?");
switch(operaciones){
 case 'suma': 
     resultado= num1 + num2;
    break;
    case 'resta':
    resultado= num1 - num2;
    break;
    case 'multiplicacion':
    resultado= num1 * num2;
    break;
    case 'divicion':
    resultado= num1 / num2;
    break;
    default:
        window.alert(`no sea gei`);
}
