let isAtivo = false
console.log(isAtivo)

isAtivo =true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // testa se é TRUE ou False

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('os falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar.....')
console.log(!!('' || null || 0 || ' '))

let nome = 'Moni'
console.log (nome || 'Cleiton') // usuado para testar variavel se nao exister o nome ele imprimi a string que vem apos o ||
