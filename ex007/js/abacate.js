const btn = document.getElementById("botao");

btn.onclick = () => {
    const res = document.getElementById("resposta");

    const nome1 = document.getElementById("nomeUsuario1").value;
    const nome2 = document.getElementById("nomeUsuario2").value;

    const data1 = new Date(document.getElementById("dataNascimento1").value);
    const data2 = new Date(document.getElementById("dataNascimento2").value);

    // Cálculo da diferença em milissegundos
    const diffTempo = Math.abs(data1 - data2);

    // Converter de milissegundos para anos (aproximadamente)
    const diferencaAnos = Math.floor(diffTempo / (1000 * 60 * 60 * 24 * 365.25));

    res.innerHTML = `A diferença de idade entre <strong>${nome1}</strong> e <strong>${nome2}</strong> é de <strong>${diferencaAnos} anos</strong>.`;

    console.log(`Diferença de idade: ${diferencaAnos} anos`);
}