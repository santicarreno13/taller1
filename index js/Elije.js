function calcular(){
    let palabra=document.getElementById("palabra").value;
    let op=document.getElementById("opcion").value;
if(op==1){
    let res= palabra.length;
    alert(`La longitud de la palabra es: ${res}`);
}
if(op==2){
    let res=palabra.toUpperCase();
    alert(`la palabra en mayuscula es: ${res}`);
}
if(op==3){
    let res= palabra.toLowerCase();
    alert(`la palabra en minuscula es: ${res}`);
}
if(op==4){
    let res= palabra.charAt(0);
    alert(`La primera letra de la palabra es es: ${res}`);
}
} 