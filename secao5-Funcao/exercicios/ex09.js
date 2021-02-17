function sisNota(nota) {
    let notaarredondada = arrendondar(nota)
    if (notaarredondada >= 40) {
        console.log(`Aprovado com nota ${notaarredondada}.`)
    } else {
        console.log(`Reprovado com nota ${notaarredondada}.`)
    }
}

function arrendondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 -(nota % 5))
    } else {
        return nota
    }
}

sisNota(100)
sisNota(30)
sisNota(38)
sisNota(88)
sisNota(61)