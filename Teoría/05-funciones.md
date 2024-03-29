# Funciones

> **"Sabemos que estamos desarrollando código limpio cuando cada función
hace exactamente lo que su nombre indica."**
    - Ward Cunningham

## Parámetros y argumentos

![Parámetros y Argumentos](./images/05.png)

- Se recomienda limitar los parámetros posicionales a **3**

- Si se tuviera que recibir más de tres parámetros: 
    Podemos crear un objeto con los argumentos y en el momento de obtener los parámetros en la funcion, podemos desestructurar los parámetros del objeto.

    ![desestructurateParameters](./images/05-1.png)

## Otras consideraciones

- Simplicidad es fundamental
- Funciones de tamaño reducido
- Funciones de una sola línea sin causar complejidad
- Menos de 20 líneas
- Evita el uso del else
- Prioriza el uso de la condicional ternaria
