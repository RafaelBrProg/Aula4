/*
1: Imprimir Números de 1 a 10
let i = 1
while (i <= 10) {
    console.log(i);
    if (i === 10) {
        console.log("Interompendo o loop");
        break;
    }
    i++
}
*/
// 1: Imprimir Números de 1 a 10
let cont = 0
for (let i = 1; i <= 10; i = i + 1) {
    cont++
    console.log(cont)
}