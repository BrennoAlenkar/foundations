const diasTrabalho = 24;

const horasTrabalho = 8;

const nome = prompt("Olá, Qual é seu nome?");

const salario = Number(prompt("Qual é seu salário?"));

const salarioDia = salario / diasTrabalho;

const salarioHoras = salarioDia / horasTrabalho 

alert(`${nome} eu verifiquei aqui é o valor que você ganha dia é de R$${salarioDia.toFixed(2)} reais, e por horas você recebe R$${salarioHoras.toFixed(2)} reais`);