//Fatorial
function fatorial(n) {
    var fat = 1
    for(let i = n; i > 0; i--) {
       // fat = i * fat
       fat *= i
    }
    return fat
} 

console.log(fatorial(5))

