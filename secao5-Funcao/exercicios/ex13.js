function classificaDias(numdodia) {
    switch (numdodia) {
        case 1:
            return 'Fim de semana'
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil'
            break
        case 7:
            return 'Fim de semana'
            break
        default:
            return 'Dia inválido'
    }
}

console.log(classificaDias(1));
console.log(classificaDias(2));
console.log(classificaDias(3));
console.log(classificaDias(4));
console.log(classificaDias(5));
console.log(classificaDias(6));
console.log(classificaDias(7));
console.log(classificaDias('a'));