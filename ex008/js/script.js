const btnMais = document.getElementById("maisUm");
const btnMenos = document.getElementById("menosUm");
const res = document.getElementById("res");

let contador = 1;

btnMais.onclick = () => {
    contador++;
    res.innerHTML = contador;
}

btnMenos.onclick = () => {
    contador--;
    res.innerHTML = contador;
}