function montanteSimples(cap, taxa, tempo) {
    let juros = cap * (taxa / 100) * tempo
    let montante = cap + juros
    return `R$${montante.toFixed(2)}`.replace('.', ',')
}

function montanteComposto(cap, taxa, tempo) {
    let montante = cap * (1 + (taxa / 100))**tempo 
    return `R$${montante.toFixed(2)}`.replace('.', ',')
}

console.log(montanteSimples(1000, 10, 2))
console.log(montanteComposto(1000, 10, 2))