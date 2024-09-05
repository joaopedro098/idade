let numero
let soma=0
let resposta=""
do{
  numero= parseInt(prompt("informe um numero:"))
  soma=soma+numero
   resposta=prompt("infome se deseja continuar")
}while(resposta==="s"&&"S")
    document.write(`a soma dos numeros é:${soma}`)