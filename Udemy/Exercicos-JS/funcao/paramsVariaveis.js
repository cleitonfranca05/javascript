    function soma(){
        let soma = 0
        for (i in arguments){
            soma += arguments[i]
        }

         return soma
        
    }

    console.log(soma( '',2,5,3,6,8,1))