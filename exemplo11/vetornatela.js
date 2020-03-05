let pos = [2, 3, 6, 7 , 1, 0, 11, 100, 5, 25, 101, 33, 1.2]
pos.sort()
/*
for (let i = 0; i < pos.length; i++) {
    console.log(`A posição ${i} tem o valor ${pos[i]}`)
}
*/

for (let i in pos) {
    console.log(`A posição ${i} tem o valor ${pos[i]}`)
}