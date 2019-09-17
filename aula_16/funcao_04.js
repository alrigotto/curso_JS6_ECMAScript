function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

//versão recursiva

// 5! = 5 * 4 * 3 * 2 * 1 ou
// 5! = 5 * 4!

function fatorial_recursivo(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial (n -1)
    }
}
console.log(fatorial(5))
console.log(fatorial_recursivo(5))


