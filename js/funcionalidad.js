var nombre = "Maria Meza" //*String o cadena de caracteres
console.log("Tamaño de mi cadena " + nombre.length) //*Tamaño de la cadena
console.log("Dato guardado en la posicion [6] :" + nombre[6])


//*Arrays

const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑','🍅','🍅']; 
const veggies = ['🥦', '🥒', '🌽', '🥕'];//*Simplificada
/*const salad2 = new Array ('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑') //*Usando el constructor*/

console.log("Tamaño de mi array " + salad.length) //*Tamaño de tu array
console.log("Dato guardado en la posicion [6] :" + salad[6])
console.log(salad)


//*Push
salad.push("🍈")
/*console.log("Elemento agregado:"+ salad)*/

//*Unshift
/*salad.unshift("🍈")*/
/*console.log("Elemento agregado:"+ salad)*/


//*pop
salad.pop()
/*console.log("Elemento eliminado:"+ salad)*/


//*Copia
const saldCopy = salad.slice();
/*console.log("Arreglo nuevo " + saldCopy)*/

//*Desestructuración
let [tomate, zanahoria ] = ['🍅', '🥕'];
let tomateTwo = salad[0]
/*console.log(tomateTwo)*/


//*Combinacion de arreglos
/*const comida = [...salad, ...veggies]*/
const comida = salad.concat(veggies)
/*console.log(comida)*/

//*Concat
const ArrayModificate= salad.concat("🍈")
console.log("Elemento agregado forma dos:"+ ArrayModificate)

/*console.log(Array.isArray(salad))//*true o false
console.log(Array.isArray(nombre))*/

//*Buscar 
const search =salad.lastIndexOf("🍅") 
console.log("Elemento encontrado : " + search)//*  -1 
var i = 0;

for(i ; i <= salad.length; i = i +1 ){
    const search =salad[i].indexOf("🍅")

    if(search === 0){
        console.log("Elemento encontrado  [" + i + "]" + salad[i] )
    }
   /* console.log("Elemento encontrado en la posicion: [" + i + "] :" + search )*/

}


//*Reverse
salad.reverse()
/*console.log("Arreglo inverso : " + salad)*/

//*Valor de posicion


/*
Maria Meza
0123456789 n-

*/