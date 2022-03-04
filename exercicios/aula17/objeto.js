var amigo = {nome: 'Murilo',
sexo: 'M',
peso: 78,
engordar(p=0) {
    console.log('engordou')
    this.peso += p
}
}

console.log(amigo.nome)