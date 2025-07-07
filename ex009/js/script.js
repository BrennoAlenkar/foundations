const btn = document.getElementById("botaoSomar");

btn.onclick = () => {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    const n1 = Number(numero1);
    const n2 = Number(numero2);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, insira números válidos!");
        return;
    }

    const soma = n1 + n2;

    let res = document.getElementById("resultado");

    if (!res) {
        res = document.createElement("p");
        res.id = "resultado";
        res.className = "teste";
        document.body.appendChild(res);
    }

    res.textContent = `A soma entre o valor ${n1} com o valor ${n2} é de ${soma}!`;
}