let num = [1,2,6]



//push faz com que coloco no último lugar do array 
num.push(4)

console.log(`nosso vetor é o ${num}`) 

num.sort()  // coloca o vetor em ordem.

console.log(num)
console.log (`O vetor tem ${num.length} posições.`) 

console.log(`O primeiro valor do vetor é ${num[0]}.`)

for(let pos=0; pos < num.length; pos++){
    console.log(`a posição pos ${[pos]} tem o valor 
    ${num[pos]}`)
} // ao invés de ir colocando console.log(num[2],num[3],...etc..), bem mais simples fazer uma estrutura de repetição.

for(let pos in num){
    console.log(num[pos])
} //metodo mais fácil ainda de fazer o for de cima.

// BUSCANDO VALORES NO ARRAY

let pos = num.indexOf(6)
console.log(`O valor 6 está na posição ${pos}`)