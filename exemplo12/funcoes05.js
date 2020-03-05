/*
Uma recursão pode acontecer quando uma função chama ela mesma.

Sabe-se que 5! = 5 x 4 x 3 x 2 x 1
Logo, podemos dizer que 5! = 5 * 4!
    -O fatorial de um número pode ser calculado através do fatorial de outro.
        n! = n * (n-1)!
        *Com excessão de 1! = 1*
*/
function fatorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)//RECURSIVIDADE 
    }
}

console.log(fatorial(5))