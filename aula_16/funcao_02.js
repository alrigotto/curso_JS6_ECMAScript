function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 4))

 // usando valores padrão para o caso de omissão de valores
function soma2(n1=0, n2=1){
    return n1 + n2
}

console.log(soma2(4))
console.log(soma2(2))
console.log(soma2())

