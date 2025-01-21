### PSEUDOCODIGO

1. Inicio y Fin de nuestro pseudocodigo

```text
INICIO
    ...
FIN
```

2. Declaracion de variables

```text
INICIO
    DECLARAR variable COMO tipo
FIN
```

3. Iteraciones

MIENTRAS: 

```text
INICIO 
    MIENTRAS condicion HACER
        acción
    FIN MIENTRAS
FIN
```

PARA: 

```text
INICIO 
    PARA i <- 1 HASTA 5 HACER
        IMPRIMIR i
    FIN PARA
FIN
```

PARA-EN:

```text
INICIO 
    PARA clave EN objeto HACER
        IMPRIMIR "Clave:" + clave + ", Valor: " + objeto[clave]
    FIN PARA
FIN

INICIO 
    PARA indice EN arreglo HACER
        IMPRIMIR "Indice:" + indice + ", Valor: " + arreglo[indice]
    FIN PARA
FIN
```

PARA-DE:

```text
INICIO 
    PARA elemento EN arreglo HACER
        IMPRIMIR "Elemento: " + elemento
    FIN PARA
FIN
```

4. Funciones
```text
INICIO

    PROCEDIMIENTO nombreProcedimiento()
        accion
        RETORNAR resultado
    FIN PROCEDIMIENTO

    resultado <- nombreProcedimiento()

    IMPRIMIR resultado

FIN
```

[regresar](README.md)