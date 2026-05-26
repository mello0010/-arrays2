let numeros = [];
let soma = 0;
let media;
let i;

for (i = 0; i < 8; i++) {
    numeros[i] = parseFloat(prompt("Digite um número real:"));
    soma = soma + numeros[i];
}

media = soma / 8;

console.log("Média: " + media);

console.log("Valores acima da média:");

for (i = 0; i < 8; i++) {
    if (numeros[i] > media) {
        console.log(numeros[i]);
    }
}