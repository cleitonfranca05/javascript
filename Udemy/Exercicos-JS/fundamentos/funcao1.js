// funcao sem retono

function imprimirSoma(a, b) {
    console.log(a+b)
}
imprimirSoma(2) // NaN
imprimirSoma(2,3) // 5 
imprimirSoma(2,3,5,81,93) // ira utilizar apenas os dois primeiros parametros


// Funcao com Retorno
function soma(a,b= 0){
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))