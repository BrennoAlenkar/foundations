
function verificarIdade() {

    const nome = document.getElementById("nomeUsuario").value;
    const idade = document.getElementById("idadeUsuario").value;
    const res = document.querySelector(".resposta");

    if(idade < 18) {

        res.innerHTML = `${nome}, não pode tirar a carteira, ${idade} anos de idade`
    }else {
        res.innerHTML = `${nome} você pode tirar a carteira! maior que 18 anos`
    }

    console.log(nome);
    console.log(idade);


}