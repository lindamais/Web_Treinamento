a = 7
b = 8
c = 8

if (a === b && a === c && b === c) {
    console.log('Este triangulo é equilatero')
} 
else if(a === b && b!== c) {
    console.log('Este triangulo é isoceles -1e')
}
else if(a === c && b !== c) {
    console.log('Este triangulo é isóceles -2e')
}
else if(c === b && a !== c) {
    console.log('Este triangulo é isoceles -3e')
}
else{
    console.log('Este triangulo é escaleno')
}