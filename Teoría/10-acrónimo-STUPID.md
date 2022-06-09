# Acrónimo STUPID

6 Code Smells que debemos evitar

![ACRONIMO-STUDID](./images/10.png)

## Patrón Singleton

### Pros:

- Garantiza una única instancia de la clase a lo largo de toda la aplicación.

### Contras:

- Vive en el contexto global.
- Puede ser modificado por cualquiera y en cualquier momento.
- No es rastreable.
- Dificil de testar debido a su ubicación.

## Alto acoplamiento

Lo ideal es tener bajo acoplamiento y buena cohesión

### Acoplamiento

### Desventajas:

![ACRONIMO-STUDID](./images/10-1.png)

### Posibles soluciones:

![ACRONIMO-STUDID](./images/10-2.png)

### Cohesión

![ACRONIMO-STUDID](./images/10-3.png)

### Recomendación

![ACRONIMO-STUDID](./images/10-4.png)

## Código no probable

código dificilmente testeable

- Código con alto acoplamiento
- Código con muchas dependencias no intectadas
- Dependencias en el contexto global (Tipo Singleton)

## Optimizaciones prematuras

![ACRONIMO-STUDID](./images/10-5.png)

Tiene que haber un balance entre una complejidad esencial y una accidental

## Nombres poco descriptivos

![ACRONIMO-STUDID](./images/10-6.png)

## Duplicidad de Código

![ACRONIMO-STUDID](./images/10-7.png)
