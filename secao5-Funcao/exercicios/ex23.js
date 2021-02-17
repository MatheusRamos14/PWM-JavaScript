function resultado(cod, med1, med2, med3) {
    let notas = []
    notas.push(med1)
    notas.push(med2)
    notas.push(med3)

    let resultadofinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`Aluno: ${cod}
Notas: ${med1}, ${med2}, ${med3}
Situação: ${resultadofinal >= 5 ? 'Aprovado' : 'Reprovado'}`)
}

resultado(123, 2.8, 6, 3.5)