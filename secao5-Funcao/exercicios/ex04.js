function Divisoes(div, divisor) {
    let divisao = div / divisor
    return `O resultado da divisão: "${div} / ${divisor}" é igual a ${divisao.toFixed() - 1} e seu resto é ${div % divisor}.` 
}

console.log(Divisoes(5, 2))