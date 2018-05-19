function factorial(n) {
    
    if(n<=1) {
        console.log(n)
        return n
    } else {
        return n * factorial(n-1)
    }

}