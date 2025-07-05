//Criar sistema de verificar quantos anos a pessoa tem pela ano de nascimento

let data = new Date()

let anoAtual = data.getFullYear();

let nome = prompt("Qual é seu nome?");

let anoNascimento = Number(prompt("Qual ano você nasceu?"));

let idade = anoAtual - anoNascimento;

console.log(anoNascimento);

alert(`Olá ${nome}, é um prazer em te conhecer! verifiquei aqui e você tem ${idade} anos de idade.`)
