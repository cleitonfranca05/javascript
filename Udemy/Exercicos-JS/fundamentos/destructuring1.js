// novo recurso do ES2015

const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa // retire de dentro de pessoa o nome e a idade 
console.log (nome, idade)

const {nome: n , idade :i} = pessoa // assim vc renomeia a variavel sendo nome = i
console.log(n,1)

const {sobrenome, bemHumorada = true} = pessoa // Adicionando o true para nao dar undefined
console.log(sobrenome,bemHumorada)

const { endereco:{logradouro, numero, cep } }= pessoa // quando tem um obj dentro de outro
console.log( logradouro, numero, cep)
