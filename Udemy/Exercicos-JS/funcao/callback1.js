const fabricante = ["Mercedes","Ferrari","Audi","BMW"]

function imprimir(nome, id,dab){
    console.log(`${id + 1} -- ${nome} ` )
}

fabricante.forEach(imprimir)
fabricante.forEach( fabricante =>console.log(fabricante))