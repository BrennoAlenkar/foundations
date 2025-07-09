// const btn = document.getElementById("botao");
const mais = document.getElementById("mais");
const menos = document.getElementById("menos");
const vezes = document.getElementById("vezes");
const divisao = document.getElementById("divisao");

mais.onclick = () => {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    const n1 = Number(numero1);
    const n2 = Number(numero2);

    const soma = n1 + n2;

    if (isNaN(n1)) {
        document.body.style.background = "red"
    }

    const  resposta = document.createElement("p");

    resposta.textContent = `Resultado: ${soma}`

    document.body.appendChild(resposta);

}

menos.onclick = () => {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    const n1 = Number(numero1);
    const n2 = Number(numero2);

    const soma = n1 - n2;

    const  resposta = document.createElement("p");

    resposta.textContent = `Resultado: ${soma}`

    document.body.appendChild(resposta);

}

vezes.onclick = () => {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    const n1 = Number(numero1);
    const n2 = Number(numero2);

    const soma = n1 * n2;

    const  resposta = document.createElement("p");

    resposta.textContent = `Resultado: ${soma}`

    document.body.appendChild(resposta);

}

divisao.onclick = () => {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    const n1 = Number(numero1);
    const n2 = Number(numero2);

    const soma = n1 / n2;

    const  resposta = document.createElement("p");

    resposta.textContent = `Resultado: ${soma}`

    document.body.appendChild(resposta);

}