const notas = [7.1,7.7,8.1,5.5,5.1]

for (let i in notas){
    console.log(i, notas[i])
}


const pessoa = {
    nome : 'Ana',
    sobrenome : 'França',
    idade : 29,
    peso : 64
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}