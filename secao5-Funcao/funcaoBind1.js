const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflinto em paradigmas de PF e POO.

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()