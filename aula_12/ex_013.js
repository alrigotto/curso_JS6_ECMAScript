var semana = new Date()
var dia_semana = semana.getDay()

// console.log(dia_semana)
/*
No JS é assim:
0 = dom
1 = seg
2 = ter
3 = qua
4 = qui
5 = sex
6 = sab
*/

switch (dia_semana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break
}