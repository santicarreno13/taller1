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
let num1=parseInt(prompt("Dijite el primer numero"));
let num2=parseInt(prompt("Diijte el segundo numero"));
let operaciones=prompt("¿que operacion elije?");
switch(operaciones){
 case 'suma': 
     resultado= parseInt(num1) + num2;
     window.alert(`Tu suma es: ${resultado}`)
    break;
    case 'resta':
    resultado= num1 - num2;
    window.alert(`Tu resta es: ${resultado}`)
    break;
    case 'multiplicacion':
    resultado= num1 * num2;
    window.alert(`Tu multiplicacion es: ${resultado}`)
    break;
    case 'divicion':
    resultado= num1 / num2;
    window.alert(`Tu divicion es: ${resultado}`)
    break;
    case 'raiz1':
    resultado= Math.sqrt(num1).toFixed(3);
    window.alert(`Tu raiz del primer numero es: ${resultado}`)
    break;
    case 'raiz2':
        resultado= Math.sqrt(num1).toFixed(3);
        window.alert(`Tu raiz del primer numero es: ${resultado}`)
        break;
    case 'potencia':
    resultado= Math.pow(num1,num2);
    window.alert(`Tu potenciacion es: ${resultado}`)
    break;
    default:
        window.alert(`no elejiste Gilipollas`);
}

console.log(`El primero es ${num1}`);
console.log(`El segundo es ${num2}`);
