## RESULTADO

1. Saludar al usuario

Pseudocodigo:
```text
INICIO
    IMPRIMIR "Escribe tu nombre:"
    LEER nombre
    IMPRIMIR "Hola, " + nombre
FIN
```

Javascript:
```javascript
console.log("Escribe tu nombre:");
let nombre = prompt("Escribe tu nombre:");
console.log("Hola, "+nombre);
```

2. Verificar si un numero es positivo o negativo

Pseudocodigo:

```text
INICIO
    LEER numero
    SI numero >= 0 ENTONCES
        IMPRIMIR "El numero es positivo"
    SINO
        IMPRIMIR "El numero es negativo"
    FIN SI
FIN
```

Javascript:
```javascript
let numero = parseInt(prompt("Escribe un número:"))

if (numero >= 0){
    console.log("El número es positivo")
} else {
    console.log("El número es negativo")
}

```

3. Sumar dos números

Pseudocodigo:

```text
INICIO
    numero1 <- 10
    numero2 <- 20
    suma <- numero1 + numero2
    IMPRIMIR "La suma es: " + suma
FIN
```

Javascript:
```javascript
let numero1 = 10
let numero2 = 20
let suma = numero1 + numero2
console.log("La suma es: " + suma)

```

4. Calcular el area de un triangulo

Pseudocodigo:

```text
INICIO
    LEER base
    LEER altura
    area <- base * altura / 2
    IMPRIMIR "El area del triangulo es:" + area
FIN
```

Javascript:
```javascript
let base = parseInt(prompt("Ingrese la base"))
let altura = parseInt(prompt("Ingrese la altura"))
let area = base * altura / 2
console.log("El area del triangulo es:" + area)
```

5. Contar del 1 al 15

Pseudocodigo:

```text
INICIO
    contador <- 1
    MIENTRAS contador <= 15 HACER
        IMPRIMIR contador
        contador <- contador + 1
    FIN MIENTRAS
FIN
```

Javascript:
```javascript
    let contador = 1
    while (contador <= 15) {
        console.log(contador)
        contador = contador + 1
        // contador += 1
        // contador++
    }
```

6. Encontrar el mayor de dos numeros

Pseudocodigo:

```text
INICIO
    LEER numero1
    LEER numero2

    SI numero1 > numero2 ENTONCES
        IMPRIMIR "El mayor es: " + numero1
    SINO SI numero2 > numero1 ENTONCES
        IMPRIMIR "EL mayor es: " + numero2
    SINO
        IMPRIMIR "Ambos numeros son iguales"
    FIN SI
    
FIN
```

Javascript:
```javascript
let numero1 = parseInt(prompt("Escribe el primer numero"))
let numero2 = parseInt(prompt("Escribe el segundo numero"))

if (numero1 > numero2){
    console.log("El mayor es:" + numero1)
} else if (numero2 > numero1) {
    console.log("El mayor es:" + numero2)
} else {
    console.log("Ambos numeros son iguales")
}
    
```

7. Generar un numero aleatorio entre 1 y 100

Pseudocodigo:

```text
INICIO
    IMPRIMIR "Generando un numero aleatorio entre 1 y 100"
    numeroAleatorio <- GENERAR_ALEATORIO(1, 100)
    IMPRIMIR "El numero aleatorio es:" + numeroAleatorio
FIN
```

Javascript:
```javascript
/* Generar numero aleatorio con la funcion Math.random() */
console.log("Generando un numero aleatorio entre 1 y 100")
let numeroAleatorio = Math.floor(Math.random() * 100) + 1
console.log("El numero aleatorio es: " + numeroAleatorio)
```

8. Mostrar los valores encontrados en el arreglo [1, 2, 3, 4, 5] usando PARA

Pseudocodigo:

```text
INICIO
    
    arreglo <- [1, 2, 3, 4, 5]
    detener <- TAMAÑO arreglo

    PARA i <- 0 HASTA detener HACER
        IMPRIMIR arreglo[i]
    FIN PARA
FIN
```

Javascript:
```javascript

/* 

for(iterador; condicion; incremento){
    codigo
}

for(indice in arreglo){
    codigo
}

for(atributo in objeto) {
    codigo
}

*/

let arreglo = [1, 2, 3, 4, 5]
let detener = arreglo.length 

for(let i = 0; i < detener; i++){
    console.log(arreglo[i])
}

for(let indice in arreglo){
    console.log(arreglo[indice])
}


```
9. Mostrar las propiedades del objeto estudiante { id: 1, name: 'John', lastname: 'Doe' } FOR-IN (PARA-EN)

Pseudocodigo:

```text
INICIO
    objeto <- { id: 1, name: 'John', lastname: 'Doe' }

    PARA clave EN objeto HACER
        IMPRIMIR "Clave: " + clave + "Valor: " + objeto[clave]
    FIN PARA
FIN
```

Javascript:
```javascript

/* 

for(atributo in objeto) {
    codigo
}

*/

let objeto = { id: 1, name: 'John', lastname: 'Doe' }

for (let clave in objeto){
    console.log("Clave: " + clave + ", Valor: " + objeto[clave]) // Clave: id, Valor: 1 // Clave: name, Valor: John // Clave: lastname, Valor: Doe
}


```


10. Mostrar las propiedades del objeto estudiante { id: 1, name: 'John', lastname: 'Doe' } FOR-OF (PARA-DE)

    Respuesta: No se puede recorrer porque los objeto no pueden ser iterados