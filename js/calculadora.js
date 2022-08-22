function calcular(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;
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