// 2: Imprimir Todos os Números de 1 a 30, Exceto os Múltiplos de 4
let numero = 1
while (numero <= 30) {

    if (numero % 4 === 0) {
        numero++;
        continue;
    }
    console.log(`Numero: ${numero}`);
    numero++
}