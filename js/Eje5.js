let id=document.getElementById("features");

console.log(id);

console.log(document.querySelector("h1"));
console.log(document.querySelector(".feature"));
console.log(document.querySelector("#features"));
let h1=document.querySelector("h1");
console.log(h1);

let parrafo=document.querySelectorAll("p")[0];
console.log(parrafo);

document.querySelectorAll("p").forEach((el)=>console.log(el));

console.log(document.querySelector("a").getAttribute("href"));
document.querySelector("a").setAttribute("href","https://youtu.be/Wo2a6of0W00");
const mi=document.querySelector("#features");
mi.style.setProperty("color","#FF5834");
mi.style.setProperty("width","500px");
mi.style.setProperty("background","#34FF98");

mi.style.setProperty("font-family","cursive");
const aña=document.querySelector("a");
aña.style.setProperty("text-decoration","none");


const $tula=document.querySelector(".aña");
let text=`<p> 
JIJIJA
</p>
<p>
Esto se puede hacer AÑA
</p>
`
$tula.textContent=text;
$tula.innerHTML=text;

const img = document.createElement("img");
img.src ="../img/descarga.jpg";
document.body.appendChild(img);
img.src ="../img/jijija.jpg";
document.body.appendChild(img);


