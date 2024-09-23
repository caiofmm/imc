var s = "JavaScript e Python"

var pos1 = s.indexOf("Python")
console.log(pos1)

var frase = "Olá mundo"
if(frase.startsWith("Olá")){
    let sub = frase.substring(4)
    let novaString = sub.replace("mundo","pessoal")
    let novaStringMaiuscula = novaString.toUpperCase();
    console.log(novaStringMaiuscula)
}