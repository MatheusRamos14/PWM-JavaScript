function contaPares(começo, fim) {
    for (começo; começo != fim+1; começo++) {
        if (começo % 2 == 0) { console.log(começo) }
    }
}

contaPares(0, 10)