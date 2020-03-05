let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do array é ${num[0]}`)

let num2 = num.indexOf(9)

if (num2 == -1) {
    console.log("Valor não encontrado")
} else {
    console.log(`O valor está na posição: ${num2}`)
}
