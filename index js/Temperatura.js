function calcular(){
    let tem=parseInt(document.getElementById("grados").value);
    let de=document.getElementById("de").value;
    let para=document.getElementById("para").value;
    if(de==1 && para==1){
        alert(`No se pude convertir de por que son del mismo tipo`);
    }
    if(de==2 && para==2){
        alert(`No se pude convertir de por que son del mismo tipo`);
    }
    if(de==3 && para==3){
        alert(`No se pude convertir de por que son del mismo tipo`);
    }

    
    if(de==1 && para==2){
        let res=((tem-32)/1.8);
        alert(`la convercion de Fahrenheit a Celsius es de: ${res}`);
    }
    if(de==1 && para==3){
        let res=((tem-32)*5/9)+273.15;
        alert(`la convercion de Fahrenheit a Kelvin es de: ${res}`);
    }
    if(de==2 && para==1){
        let res=(tem*9/5)+32;
        alert(`la convercion de Celsius a Fahrenheit es de: ${res}`);
    }
    if(de==2 && para==3){
        let res=tem+273.15;
        alert(`la convercion de Celsius a kelvin es de: ${res}`);
    }
    if(de==3 && para==1){
        let res=((tem-273.15)*9/5+32)+32;
        alert(`la convercion de kelvin a Fahrenheit es de: ${res}`);
    }
    if(de==3 && para==2){
        let res=tem-273.15;
        alert(`la convercion de kelvin a Celsius es de: ${res}`);
    }

}