function feira(fruta) {
    switch (fruta.toLowerCase()) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui.'
            break
        case 'kiwi':
            return 'Estamos com escassez de kiwis.'
            break
        case 'melancia':
            return 'Aqui está, são R$3,00 o quilo.'
        default:
            return 'Esta fruta não está na lista'
    }
}

console.log(feira('Maçã'))
console.log(feira('Kiwi'))
console.log(feira('Melancia'))
console.log(feira('Abacate'))