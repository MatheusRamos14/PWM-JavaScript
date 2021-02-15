let valor // não iniciada
console.log(valor)

valor = null // Ausência de valor
console.log(valor)
// console.log(valor.toString()) Não pode ler propriedades de null.

const produto = {}
console.log(produto.preço)
console.log(produto)

produto.preço = 3.50
console.log(produto)

produto.preço = undefined // Evitar atribuir undefined
console.log(!!produto.preço)
delete produto.preço
console.log(produto)

produto.preço = null // "Sem preço"
console.log(produto)