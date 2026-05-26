const prompt = require('prompt-sync')();

let nomes = new Array(9);
let idades = new Array(9);

// Entrada de dados
for (let i = 0; i < 9; i++) {
    nomes[i] = prompt(`Digite o nome da ${i + 1}ª pessoa: `);
    idades[i] = Number(prompt(`Digite a idade da ${i + 1}ª pessoa: `));
}

// Mostrar menores de idade
console.log("\nPessoas menores de idade:");

for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log(`Nome: ${nomes[i]} | Idade: ${idades[i]}`);
    }
}