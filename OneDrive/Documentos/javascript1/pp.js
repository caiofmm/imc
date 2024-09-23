class Funcionarios{
    constructor(nome,idade,cargo){
        this.nome = nome
        this.idade = idade
        this.cargo = cargo
    }
    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos`)
    }
    trabalhar(){
        console.log("Estou trabalhando")
    }
}
class Gerente extends Funcionarios{
    constructor(nome,idade,departamento){
        super(nome,idade, "Gerente");
        this.departamento = departamento
    }
    gerenciar(){
        console.log(`Sou Gerente do departamento de ${this.departamento}`);
    }
    trabalhar() {
        console.log("Estou gerenciando minha equipe."); 
      }
}
class Desenvolvedor extends Funcionarios{
    constructor(nome,idade,linguagem){
        super(nome,idade,"Desenvolvedor")
        this.linguagem = linguagem
    }
    programar() {
        console.log(`Eu estou programando em ${this.linguagem}`);
    }
    trabalhar() {
        console.log("Estou desenvolvendo código."); 
}
}


const gerente1 = new Gerente("Filipe", 37, "Atendimento")
const desenvolvedor1 = new Desenvolvedor("Caio", 22, "Java")


console.log(gerente1);
console.log(desenvolvedor1);


gerente1.seApresentar();
gerente1.gerenciar();
gerente1.trabalhar();


desenvolvedor1.seApresentar();
desenvolvedor1.programar();
desenvolvedor1.trabalhar();

