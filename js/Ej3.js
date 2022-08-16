let chamV=["Neon","Yoru","Raze","Reyna","Chamber"];
// insegresar(push) al lo ultimo de un arreglo y eliminar (pop) lo ultimo de un arreglo
chamV.push("Killjoi");
chamV.pop();
// insegresar(unshift) al principio de un arreglo y eliminar (shift) al principio de un arreglo
chamV.unshift("Astra");
chamV.shift();

// para eliminar posiciones en el medio poner en donde inicia y hasta donde elimina
chamV.splice(1,2);

console.log("posicion 3",chamV[2]);
console.log("el ultimo agente es:",chamV[chamV.length-1]);
console.log("Agentes:",chamV);
console.log("Agentes longitud",chamV.length);

chamV.forEach(function(elemento,index,array){
    console.log(`posicion ${index} elemento ${elemento}`);
});

let aprendices=[];
let seguir=true;
while(seguir==true){
     aprendices.push(prompt("Ingrese el nombre del aprendiz"));

    seguir=confirm("desea ingresar otro dato?");
}
console.log("Aprendices:",aprendices);

// filter se crea un nuevo arra y se guarda trayendo todos los datos

let filtro = aprendices.filter(aprendices=>aprendices=="carreño");
console.log("filtro:",filtro);

//find busca y solo trae uno
let busqueda = aprendices.find(aprendices=>aprendices=="carreño");
console.log("Busqueda:",busqueda);

//Metodo de ordenamineto acendente

let ordenar = aprendices.sort();
console.log("Ordenamiento:",ordenar);  

// Array de objetos
let instructores = [{
    primernombre: "Jennifer", primerapellido: "Fajardo"},
{
    primernombre: "Sandra", primerapellido: "Rueda"}
];

console.log("Instructores:",instructores);  

let nombreCompleto= instructores.map(function(elemento,index,array){
    return `${elemento.primernombre} ${elemento.primerapellido}`
});

console.log("Nombre Completo:",nombreCompleto);  