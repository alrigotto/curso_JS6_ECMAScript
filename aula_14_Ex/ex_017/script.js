
function gerar_tabuada() {
    var numero = document.getElementById('numero')
    var taboada = document.querySelector('select#resultados')
    // verificando se um numero foi digitado
    if (numero.value == '') {
        window.alert('Número inexistente. Por favor, digite um número!')
        return
    }

    var numero_inteiro = Number(numero.value) // convertendo para inteiro
    taboada.innerHTML = ''
 
    var texto = ''
    for (var a = 1; a <= 10; a++) {
        var b = a * numero_inteiro
        texto = `${numero_inteiro} x ${a} = ${b}`
        var linha_tabuada = document.createElement("option")
        linha_tabuada.text = texto
        linha_tabuada.value = `tabuada${a}`
        taboada.add(linha_tabuada)
        console.log(texto)

    }

    

    

    // linha_tabuada.text = texto
    // taboada.add(linha_tabuada)











//     var x = document.getElementById("mySelect");
//   var option = document.createElement("option");
//   option.text = "Kiwi";
//   x.add(option);
















}

