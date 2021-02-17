function formataValorReal(num) {
    return `R$${num.toFixed(2)}`.replace('.', ',')
}

console.log(formataValorReal(0.1 + 0.2))