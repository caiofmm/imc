// forma de criar objetos
const pessoa = {
  nome: 'Caio',
  sobrenome: 'Mendes'
}

console.log(pessoa['sobrenome'])






// 2- forma de criar objetos
const funcionario = new Object();
funcionario.nome = "Murilo"
funcionario.sobrenome = "Pezzuol"

console.log(funcionario.nome)




// nome completo

function criarPessoa(nome,sobrenome, i){
    return {
        nome,
        sobrenome,
        idade: i,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criarPessoa("Felipe","Lacerda",22)
const p2 = criarPessoa("Vag","Freitas",40)

console.log(p1.nomeCompleto())
console.log(p2)