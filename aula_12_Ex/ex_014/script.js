
function carregar () {
    var msg = window.document.getElementById("msg")
    var img = window.document.querySelector("img#imagem")
    var data = new Date()
    var hora = data.getHours()
    
    // var hora = 14

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        //bom dia
        img.src = "manha.png"
        window.document.body.style.background = "#f0b988"
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "tarde.png"
        window.document.body.style.background = "#736d38"
    } else {
        //boa noite
        img.src = "noite.png"
        window.document.body.style.background = "#263a43"
    }

}
