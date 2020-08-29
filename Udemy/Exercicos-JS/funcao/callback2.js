const notas = [7.7,6.5,5,7.9,9.7,8.5,4.9]

const notasBaixas = notas.filter(notas => notas < 5)
console.log(`Notas menores que 5 ${notasBaixas}`)

//NOTAS MAIORES QUE 7 feito sem ARROW FUNCTION
const notasAltas = notas.filter(function(notas) {
    return notas > 7
})
console.log(`Notas maiores que 7 - ${notasAltas}`)