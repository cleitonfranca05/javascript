function tratarErroELancar(erro){
    // throw new Error('...')
    //throw 10
    throw {
        nome : erro.name,
        msg: 'deu ruim',
        date: new Date
    }
}


function imprimirNomeGritado(obj) {
    try{
    console.log(obj.nome.toUpperCase()+'!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {

        console.log('Final')
    }
}


const obj = {name: 'Cleiton'}
imprimirNomeGritado(obj)