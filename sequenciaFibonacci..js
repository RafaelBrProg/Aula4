// 4: Imprimir a Sequência de Fibonacci até o 10º Termo

let a = 1, b = 1; // Pulei o 0
let cont = 1; // Pulei o 0

console.log("Os 10 primeiros números da sequencia de Fibonacci são:");

while (cont <= 10) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
    cont++;
}