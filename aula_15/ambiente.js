// let num = [2,4,5,8,4]

// num.push(9)
// num.sort()
// num.values

// console.log(`Nosso vetor tem ${num.length} posições`)

// console.log(num)

// for (let pos in num) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

// num[2] = 7

// console.log(num)

// console.log (num.indexOf(9))
// // sempre que o valor não existir no vetor o resultado de "indexOf" vai ser "-1"
// console.log (num.indexOf(10)) 

// num.sort()
var x = [1, 7, 4, 7, 1]

console.log(x)

function m(acu, vet){
   return acu + vet
}

// const teste = x.reduce(m , 0)

const soma = x.reduce((acu, vt) => (acu + vt)  , 0)
console.log(soma)

const media = x.reduce(m, 0)
console.log(media)
