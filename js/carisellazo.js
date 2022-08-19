let seguir=true;
    let saldo=0;
    let jugador=prompt("Ingrese el nombre del jugador");
    saldo=parseInt(prompt(`Cuanto deseas recargar para jugar`));
    while(seguir==true){
        let eleccion=prompt(`${jugador} Elige 1.cara 2.sello`);
        let apuesta=parseInt(prompt(`De tu saldo actual ${saldo} ¿cuanto deseas apostar?`));
        let moneda = Math.floor((Math.random() * 2) + 1);
      if(moneda==1 && eleccion==1){
        saldo=saldo+(apuesta*2);
        window.alert(`El lanzamiento fue cara escogiste cara tú ganas!!!, tu nuevo saldo es ${saldo} `);
      }
      else if(moneda==2 && eleccion==2){
        saldo=saldo+(apuesta*2);
        window.alert(`El lanzamiento fue sello escogiste sello tú ganas!!!, tu nuevo saldo es ${saldo} `);
      }

      else if(moneda==1 && eleccion==2){
        saldo=saldo-apuesta;
        window.alert(`El lanzamiento fue cara escogiste sello perdiste jijija!!!, tu nuevo saldo es ${saldo} `);
      }

      else if(moneda==2 && eleccion==1){
        saldo=saldo-apuesta;
        window.alert(`El lanzamiento fue sello escogiste cara tú pediste jijija!!!, tu nuevo saldo es ${saldo} `);
      }
    
      seguir=confirm("Quiere seguir jugando");

    }