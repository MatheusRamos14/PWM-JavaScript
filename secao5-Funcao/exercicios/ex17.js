function aumentoSalarial(plano, salario) {
    switch (plano) {
        case 'A':
            let NAsalario = (10/100 * salario) + salario
            return `R$${NAsalario.toFixed(2)}`.replace('.', ',') 
        case 'B':
            let NBsalario = (15/100 * salario) + salario
            return `R$${NBsalario.toFixed(2)}`.replace('.', ',')
        case 'C':
            let NCsalario = (20/100 * salario) + salario
            return `R$${NCsalario.toFixed(2)}`.replace('.', ',')
        default:
            return 'Plano inválido.'
    }
}

console.log(aumentoSalarial('A', 1000)) // 1100
console.log(aumentoSalarial('B', 1000)) // 1150
console.log(aumentoSalarial('C', 1000)) // 1200
console.log(aumentoSalarial('VIP', 1000)) // Plano inválido