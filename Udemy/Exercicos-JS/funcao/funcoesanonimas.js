const soma = function(x,y){
    return x+y
}
const multiplicacao = (x,y) => x * y
const divisao = (x,y) =>{
    let menor = y
    let maior = x
    if(x < y){
        maior = y
        menor = x
    }
    return maior/menor
}

const imprimirResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(4,5,divisao)