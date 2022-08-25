function calcular(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;
    const btn=document.getElementById("button");
    const ops=document.getElementById("ops");
    if(op==1){
        let res=num1+num2;
        alert(`El Primer numero es ${num1} y el segundo numero es ${num2} la suma es ${res}`);
    }
    if(op==2){
        let res=num1-num2;
        alert(`El Primer numero es ${num1} y el segundo numero es ${num2} la resta es ${res}`);
    }
    if(op==3){
        let res=num1*num2;
        alert(`El Primer numero es ${num1} y el segundo numero es ${num2} la multiplicacion es ${res}`);
    }
    if(op==4){
        let res=num1/num2;
        alert(`El Primer numero es ${num1} y el segundo numero es ${num2} la divicion es ${res}`);
    }
}
const ops = document.getElementById('ops');
ops.addEventListener('click', (e)=>{
    e.preventDefault();
    //console.log(e.target.id); Mostrar id especifico de los elementos a escuchar, en este caso ops, target obtiene varias propiedades.
    id = e.target.id;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    const rta = document.getElementById('respuesta');
    
    if  (id == 'suma'){
        //console.log(`Sumatoria : ${num1+num2}`);
        const img = ` <i class="fa-solid fa-clipboard-check"></i><p>La suma corresponde a ${num1+num2}</p>`;
        rta.innerHTML = img;
    }
    else if (id == 'resta'){
        //console.log(`Resta : ${num1-num2}`)
        const img = `<i class="fa-solid fa-circle-xmark"></i><p>La resta corresponde a ${num1-num2}</p>`;
        rta.innerHTML = img;
        rta.style.setProperty('font-size', '2rem');
    }
})
