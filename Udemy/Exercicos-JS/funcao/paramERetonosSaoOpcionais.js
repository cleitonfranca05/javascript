function area(altura,largura = 0) {
    const area = altura * largura
    if(area > 20){
        console.log (`Area maior que o permido${area}m²`)
    }else {
        return area
    }
}

console.log(area(2,20))
console.log(area(2))

