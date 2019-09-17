function contar() {

    var inicio = document.querySelector('input#inicio_txt')
    var fim = document.querySelector('input#fim_txt')
    var passo = document.querySelector('input#passo_txt')
    var area_contagem = document.getElementById('area_de_contagem')
    var contagem_finalizada = document.getElementById('contagem_finalizada')
    var contador = Number(passo.value)
    var valor_inicial = Number(inicio.value)
    var valor_final = Number(fim.value)

    area_contagem.style.color = 'rgb(243, 240, 240)' //reseta a cor da fonte
    // Validação dos valores de entrada
    if (inicio.value.length == 0) {
        area_contagem.style.color = 'red'
        area_contagem.innerHTML = 'É impossível contar sem um valor inicial.'
        return
    } else if (fim.value.length == 0) {
        area_contagem.style.color = 'red'
        area_contagem.innerHTML = 'É impossível contar sem um valor final.'
        return
    } else if (passo.value.length == 0 || passo.value < 0) {
        window.alert("Valor de 'Passo' inválido, assumindo valor '1'")
        contador = 1
        passo.value = contador
    }
    //interação para contagem.
    var texto = ''
    if (valor_final > valor_inicial) {
        //contagem crescente
        for (var a = valor_inicial; a <= valor_final; a += contador) {
            var texto = texto + a + String.fromCodePoint(0x1F449)
        }
    } else if (valor_final < valor_inicial) {
        //contagem decrescente
        for (var a = valor_inicial; a >= valor_final; a -= contador) {
            var texto = texto + a + String.fromCodePoint(0x1F449)
        }
    }
    //acrescenta a bandeira no final (outro jeito de colocar emojis)
    texto +=`\u{1F3C1}`
    area_contagem.innerHTML = texto
    contagem_finalizada.innerHTML = 'Contagem Finalizada com sucesso!'      
}