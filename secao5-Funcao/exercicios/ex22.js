function assoc(mes, valor) {
    if (mes > 0 && mes < 13) {
    let penalidade = mes - 1 
    const divida = valor * (1 + (5/100))**penalidade
    return `R$${divida.toFixed(2)}`.replace('.', ',')
    } else {
        return 'Mês inválido.'
    }
}

console.log(assoc(4, 100))