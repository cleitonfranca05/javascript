// Funçoes em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1(){}

// Armazenar em uma variável
const fun2 = function() {}

//Armazenar em um array
const array = [function(a,b){return a+b}, fun1, fun2]
console.log(array[0](5,6))


//Armazenar em um atributo de objeto  
const obj = {}
obj.falar = function() { return 'OPa'}
console.log(obj.falar())

//passar uma funçao como param

function run(fun){
    fun()
}
run (function (){console.log('Executando ....')})

// funcao pode retornar/contar uma funcao

function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
const somaTodos = soma(2,3)
somaTodos(4)