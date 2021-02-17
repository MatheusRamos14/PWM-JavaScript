function classificaTriangulo(l1, l2, l3) {
    if (l1 = l2 && l2 == l3) {
        return 'Equilátero'
    } else if (l1 == l2 || l1 == l3 || l2 == l3 ) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2))
console.log(classificaTriangulo(2, 3, 3))
console.log(classificaTriangulo(2, 3, 4))

// fiz no celular