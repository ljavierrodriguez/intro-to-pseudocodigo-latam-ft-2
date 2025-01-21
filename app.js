let nombres = ["Hugo", "Paco", "Luis", "Donald", "Mickey", "Minie", "Goofy", "Pluto"]


const buscarNombre = (nombre) => nombre === 'Mickey'

let encontrado = nombres.find(buscarNombre)

console.log(encontrado)

let resultado = nombres.includes('Daisy') // false
console.log(resultado)

let resultado2 = nombres.includes('pluto')
console.log(resultado2)

/* 
console.log(nombres)

let resultado = nombres.splice(4, 3, "Daisy")
console.log(resultado) // ["Mickey", "Minie", "Goofy"]

console.log(nombres) 
*/

/* 
let copia = nombres.slice()
console.log(copia)

let copia2 = nombres.slice(2, 6)
console.log(copia2)

let copia3 = nombres.slice(5)
console.log(copia3)
 */
/* function mostrarNombres(valor, indice, arreglo){
    console.log(`Encontre: ${valor} en la posicion: ${indice} en el arreglo: ${arreglo}`)
    // Encontre: Hugo en la posicion: 0 en el arreglo: ["Hugo", "Paco", "Luis"]
    // Encontre: Paco en la posicion: 1 en el arreglo: ["Hugo", "Paco", "Luis"]
    // Encontre: Luis en la posicion: 2 en el arreglo: ["Hugo", "Paco", "Luis"]
}
nombres.forEach(mostrarNombres)

nombres.forEach((valor) => console.log(valor))

nombres.forEach(function(valor){
    console.log(valor)
}) */

