function calcula(op1, operação, op2) {
    switch (operação) {
        case '+':
            return op1 + op2
            break
        case '-':
            return op1 - op2
            break
        case '*':
            return op1 * op2
            break
        case '/':
            return op1 / op2
            break
        default:
            return 'Operação inválida.'
    }
}

console.log(calcula(2,'+',2))
console.log(calcula(10, '/', 2))
console.log(calcula(5, '$', 3))