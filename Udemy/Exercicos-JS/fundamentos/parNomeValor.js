const saudacao = 'opa' // contexto Lexico 1

function exec(){
    const saudacao = 'Faaaalla ' // Contexto lexico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: "Cleiton",
    idade: 32,
    peso: 90,
    endereco:{
        logradouto : 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)