amigo = {
    nome: 'José',
    sexo: 'M', 
    peso: 85.4,
    engordar: function(p=0) {
        console.log(`${this.nome} Engordou!`)
        this.peso += p
    }
}

console.log(`Estado atual: ${amigo.nome} pesa ${amigo.peso}Kg`)
amigo.engordar(5)
console.log(`Estado atual: ${amigo.nome} pesa ${amigo.peso}Kg`)
