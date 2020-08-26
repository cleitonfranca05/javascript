//Estrategia 1 para gerar valor padrao 

function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a+b+c
}

console.log(soma(1,2,3)) // problema qque se eu passar o valor como 0 ele vai entender como vazio e vai soma o 1

//estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a+b+c
}
console.log(soma2(0,2,''))


// valor padrao es2015 TOOOOOOOPPPPP
function soma3(a=1,b=1,c=1){
    return a + b+ c
}
console.log(soma3(0,2,''))
