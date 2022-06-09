# Acopladores

## 1. Feature Envy

Cuando algún método hace mucha referencia a una funcion de otrro modulo, esa funcion deberiamos colocarla en otro lugar.

## 2. Intimidad Inapropiada

Cuando una clase usa campos y metodos internos de otra clase, cuando dos clases están muy relacionadas, hay un problema, las buenas clases deben saber lo menos posible de otras.

## 3. Cadena de mensajes

Cuando una funcion llama de una a otra y a otra y a otra y etc. La solución es tener comunicación entre distintos componentes y no entre padre e hijo a nieto.

## 4. The middle man

Si una clase realiza una accion y es delegar a otra clase.
La solucion es evitar esa clase.
