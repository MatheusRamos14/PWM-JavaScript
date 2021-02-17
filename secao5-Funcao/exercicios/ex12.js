function fatorial(num) {
    if (num == 0) {
        return 1
    } else {
        fact = num
        for (i = num - 1 ; i > 0; i--) {
            fact *= i  
        }
        return fact
    } 
}


console.log(fatorial(0))