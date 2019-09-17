function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_da_cx_texto = document.querySelector("input#txt_ano")
    var res = document.getElementById("res")

    if (ano_da_cx_texto.value == 0 || Number(ano_da_cx_texto.value) > ano) {
        window.alert('[ERRO] Verifique os dados digitados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radio_sexo')
        var idade = ano - Number(ano_da_cx_texto.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem_homem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem_mulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.paddingTop = '30px'
        img.style.paddingBottom = '30px'
    }

}

