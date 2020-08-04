// CRIAÇAO DE OBJETO E NAO DE JSON

// JSON {'nome':'CLEITON','idade':'22'} 
//OBJETO { nome : 'Cleiton', idade : 22}

const prod1 = {}

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4988.90
prod1['Desconto_Legal'] = 0.40 

console.table(prod1)
console.log(prod1)


const prod2 ={
    nome:'Cleiton' ,
    preco :'100000.00',
    obj:{
        blabla: 1,
        obj:{
            nome:'Categoria'
        }
    }
}
console.log(prod2)
console.table(prod2)