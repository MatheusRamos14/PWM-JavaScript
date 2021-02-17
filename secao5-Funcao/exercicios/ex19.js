function lanchonete(cod, quant) {
    switch(cod) {
        case 100:
            let CQ = 3 * quant
            return `R$${CQ.toFixed(2)}`.replace('.', ',')
        case 200:
            let HS = 4 * quant
            return `R$${HS.toFixed(2)}`.replace('.', ',')
        case 300:
            let CB = 5.50 * quant
            return `R$${CB.toFixed(2)}`.replace('.', ',')
        case 400:
            let B = 7.50 * quant
            return `R$${B.toFixed(2)}`.replace('.', ',')
        case 500:
            let R = 3.50 * quant
            return `R$${R.toFixed(2)}`.replace('.', ',')
        case 600:
            let S = 2.80 * quant
            return `R$${S.toFixed(2)}`.replace('.', ',')
        default:
            return 'Código inválido.'
    }
}

console.log(lanchonete(100, 2))
console.log(lanchonete(200, 2))
console.log(lanchonete(300, 2))
console.log(lanchonete(400, 2))
console.log(lanchonete(500, 2))
console.log(lanchonete(600, 2))
console.log(lanchonete(700, 2))
