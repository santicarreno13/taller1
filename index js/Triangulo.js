function calcular(){
    let base=parseInt(document.getElementById("base").value);
    let uno=parseInt(document.getElementById("1").value);
    let dos=parseInt(document.getElementById("2").value);

    if(base==uno && base==dos ){
        alert(`El triangulo es Equilátero`);
    }
    else if(base<uno && base==dos || base<dos && base==uno || base>uno && base==dos || base>dos && base==uno){
        alert(`El triangulo es Isóseles`);
    }
    else if(base!=uno && base!=dos ){
        alert(`El triangulo es Escaleno`);
    }
    else{
        alert('error 34')
    }
}