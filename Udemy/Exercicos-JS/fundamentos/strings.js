const escola = 'COD3r'
console.log(escola.charAt(1))
console.log(escola.charAt(0))
console.log(escola.charCodeAt(3)) // exibi o valor em Unicode
console.log(escola.indexOf('C')) // busca o valor e retorna em que posição esta

console.log(escola.substring(1)) // imprimi a partir do indice 1(PULA O NUMERO)
console.log(escola.substring(0,3)) // imprimmi do 0 até indici 3(Não imprimi o indici 3)

console.log('Escola' .concat(escola).concat("!"))
console.log('Escola' + escola + "!" )
console.log(escola.replace(3 , 'e'))
console.log(escola.replace(/\d/ , 'e')) // todos os digitos
console.log(escola.replace(/\w/g , 'e')) // todas as letras e numeros


console.log('Ana,Maria,Pedro'.split(',')) // Gera um Array

