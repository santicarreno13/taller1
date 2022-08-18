//Declarar la funcion por declaracion
// function lanzarmoneda(){
//     let moneda = Math.floor((Math.random()* 2)+ 1);
//     console.log(`el primer lanzamineto fue  ${moneda}`);
// }
//invocar funcion (LA FUNCION SE PUDE DE LLAMAR EN CUALQUIER PARTE.)
// lanzarmoneda();

//Declarar con valor de retorno 
// function lanzarmoneda() {

//     let moneda = Math.floor((Math.random() * 2) + 1);
//     return moneda;
    
//     }
    //Invocar la función con valor de retorno
    // console.log(`El segundo lanzamiento fue  ${lanzarmoneda()}`);
    // let lanzamiento=lanzarmoneda();
    // console.log(`El tercer lanzamiento fue  ${lanzamiento}`);

    //funcion con parametros

    
    let ganar=function(saldo, apuesta){

        saldo=saldo+(apuesta*2);
        return saldo;
        
        }
        let perder=(saldo, apuesta)=>{

            saldo=saldo-apuesta;
            return saldo;
            }

    //Invocar la función y enviar argumentos según corresponda
    //ganar(saldo,apuesta);
    //perder(saldo,apuesta);

    let seguir=true;
    let saldo=0;
    let jugador=prompt("Ingrese el nombre del jugador");
    saldo=parseInt(prompt(`Cuanto deseas recargar para jugar`));
    while(seguir==true){
        let eleccion=prompt(`${jugador} Elige 1.cara 2.sello`);
        let apuesta=parseInt(prompt(`De tu saldo actual ${saldo} ¿cuanto deseas apostar`));
        let lanzamiento=lanzarmoneda();
      if(lanzamiento==1 && eleccion==1){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue cara escogiste cara tú ganas!!!, tu nuevo saldo es ${saldo} `);
      }
      else if(lanzamiento==2 && eleccion==2){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue sello escogiste sello tú ganas!!!, tu nuevo saldo es ${saldo} `);
      }

      else if(lanzamiento==1 && eleccion==2){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento fue cara escogiste sello perdiste!!!, tu nuevo saldo es ${saldo} `);
      }

      else if(lanzamiento==2 && eleccion==1){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento fue sello escogiste cara tú ganas!!!, tu nuevo saldo es ${saldo} `);
      }
    
      seguir=confirm("Quiere seguir jugando");

    }

    //función con parámetros
let lanzamiento=function lanzarmoneda() {

    let moneda = Math.floor((Math.random() * 2) + 1);
    return moneda;
    
    }
    
    //Invocar la función
