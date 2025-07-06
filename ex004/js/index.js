const nome1 = prompt("Olá, Qual é seu nome?");

const idadeUsuario1 = Number(prompt(`Tudo bem? ${nome1} quantos anos você tem?`));

const idadeUsuario2 = Number(prompt(`${nome1} Qual é a idade da outra pessoa pra gente comparar a idade?`));

const compararIdade = Math.abs(idadeUsuario1 - idadeUsuario2);

alert(`${nome1} a diferença de idade entre vocês é de ${compararIdade} anos.`);