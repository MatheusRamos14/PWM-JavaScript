let stringPontuacoes = '10, 15, 20, 25, 30, 5, 4, 3, 2, 0, 5'

function retornaVetorDesempenho(stringdepontos) {
    var arraypont = stringPontuacoes.split(', ')
    let maiorpont = arraypont[0]
    let quebrarecorde = 0
    let menorpont = arraypont[0]
    for (i in arraypont) {
        if (arraypont[i] > maiorpont) {
            maiorpont = arraypont[i]
            quebrarecorde++
        } else if (arraypont[i] < menorpont) {
            menorpont = arraypont[i]
        }
    }
    return [quebrarecorde, arraypont.indexOf(menorpont) + 1]
}

console.log(retornaVetorDesempenho(stringPontuacoes))