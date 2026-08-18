
console.log("Vamos calcular o seu IMC !!!!")
//Declarando variaveis
let nome = ""
let ano = 0
let altura = 0
let peso = 0
//Entrada de informações
nome = prompt("Insira seu nome ")
ano = parseInt(prompt("Que ano você nasceu ? "))
altura = Number(prompt("Insira sua Altura"))
peso = Number(prompt("Insira seu peso "))

//Cálculo idade
let idade = 2026 - ano
//Cálculo IMC
let imc = peso / (altura * altura)

console.log("Olá "+ nome +", você tem "+ idade +" anos, nasceu em " + ano + ", tem "+ altura + " de altura, pesa " + peso + " Kg, seu IMC é: " + imc +" Kg/m²")




