const valores = [7.7, 8.9, 6.3, 9.2]
console.table(valores ) // ele printa uma tabela para ficar mais facil a visualizaçao

console.log(valores[0],valores[3])
console.log(valores[4]) // undefined pois não existe a posicao

valores[4] = 10 
console.log(valores)

console.log(valores.length) // verifica o tamanho do array

valores.push({id:3}, false, null, 'teste' )

console.log(valores)

console.log(valores.pop()) // Exclui a ultima linha do array
delete valores[0] // DEleta o indice selecionado

console.log(valores)

console.log(typeof valores) // printa o tipo da variavel que no caso é um Objet


