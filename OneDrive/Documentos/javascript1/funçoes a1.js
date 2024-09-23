function multiplicar (x,y){
    return x * y
}

var a = multiplicar(4,2);
console.log(a)

var b = multiplicar(5,8)
console.log(b)


function somaValores(a,b,c){
    var total = a + b + c
    return total
}
var c = somaValores(9,7,3);
console.log(c)


var infoCal = function(a,b,c){
    return a + b + c
}
console.log(infoCal(2,5,7))


const soma = (num1,num2) =>{
    return num1 + num2
}
console.log(soma(3,6))

const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num * num)
console.log(valores)

var listaProdutos = ["geladeira","fogão","mesa"];
var listaEmMaiuscula = listaProdutos.map(primeiraEmMaiuscula);

function primeiraEmMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}
console.log(listaEmMaiuscula)


