// 3: Calcular a Soma dos Números Ímpares de 1 a 50
let numero = 1;

while (numero <= 50 ) {
    if (numero % 2 === 0 ) {
        numero++; //Importante incrementar antes de continuar
        continue; //Pula a interação atual se o numero for impar
    }
    console.log(numero);
    numero++    
}