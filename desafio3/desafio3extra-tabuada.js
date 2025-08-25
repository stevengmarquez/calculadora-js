// 1. Pede um número ao usuário
let numero = Number(prompt("Digite um número para ver a tabuada:"));

// 2. Crie título na página
const titulo = document.createElement("h1");
titulo.textContent = `Tabuada do ${numero}`;
document.body.appendChild(titulo);

// 3. Cria container para a tabuada
const container = document.createElement("div");
container.style.fontFamily = "Arial, sans-serif";
container.style.fontSize = "20px";
container.style.marginTop = "20px";
document.body.appendChild(container);

// 4. Cria cada linha da tabuada
for (let i = 1; i <= 10; i++) {
    const linha = document.createElement("p");
    linha.textContent = `${numero} x ${i} = ${numero * i}`;

    //  deixa linhas pares com cor diferente
    if (i % 2 === 0) {
        linha.style.color = "blue";
    } else {
        linha.style.color = "green";
    }

    container.appendChild(linha);
}