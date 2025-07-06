const nome = "Brenno Alencar";

const p = document.getElementById("teste");

console.log(p);

p.innerHTML = nome;

console.log("Teste console")

// console.error("Error na linha (Teste)");

p.innerText = nome;

document.getElementById("p2").innerHTML = "Jesus Cristo";

const botao = document.getElementById("btn");

console.log(botao);

botao.onclick = () => alert("Hello Word!");

