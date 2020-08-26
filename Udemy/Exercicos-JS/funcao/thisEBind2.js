function Pessoa() {
    this.idade = 0
    const self = this // ou eu passo pelo self ou eu uso o bind na func   
        // ou usar o AROW FUNCTION  () => {}
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)

}

new Pessoa