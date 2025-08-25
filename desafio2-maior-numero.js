// 1. Pede três números ao usuário
let a = prompt("Digite o primeiro número:");
let b = prompt("Digite o segundo número:");
let c = prompt("Digite o terceiro número:");

// 2.Converte as entradas de string para número
a = Number(a);
b = Number(b);
c = Number(c);

// 3. Cria uma variavél que vai guardar o maior número

let maior;

// 4. Compara os números para descobrir qual é o maior
if (a > b && a > c) {
    maior = a;
} else if (b > a && b > c) {
    maior = b;
} else {
    maior = c;
};

// 5. Mostra o resultado no console
console.log(`O maior número é ${maior}`);
