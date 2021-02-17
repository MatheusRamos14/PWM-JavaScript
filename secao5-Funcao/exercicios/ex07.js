function bhaskara(ax2, bx, c) {
    const delta = (bx**2) - 4 * ax2 * c
    if (delta < 0) {
        return 'O delta é negativo.'
    } else {
        const x1 = (-bx + Math.floor(Math.sqrt(delta))) / (2 / ax2)
        const x2 = (-bx - Math.floor(Math.sqrt(delta))) / (2 / ax2)
        return [x1, x2]
    }
}

console.log(bhaskara(1, 12, -13))
console.log(bhaskara(3, 5, -12))