function revenda(modelo) {
    switch (modelo.toLowerCase()) {
        case 'hatch':
            console.log('Compra efetuada com sucesso.')
            break
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log('Tem certeza que não prefere outro modelo?')
            break
        default:
            console.log('Não trabalhamos com este modelo.')
    }
}

revenda('Hatch')
revenda('Sedan')
revenda('Caminhonete')
revenda('4X4')