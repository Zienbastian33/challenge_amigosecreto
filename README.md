# Amigo Secreto

Aplicación web simple para organizar un sorteo de amigo secreto. Esta aplicación permite a los usuarios ingresar nombres de participantes y realizar un sorteo aleatorio.

Link Github-pages: https://github.com/Zienbastian33/challenge_amigosecreto

## Funcionalidades

- Agregar participantes a una lista
- Validación de campos vacíos
- Visualización de la lista de participantes
- Sorteo aleatorio de un participante
- Interfaz intuitiva y responsiva

## Lógica del Programa

1. **Almacenamiento de Datos**:
   - Los nombres de los participantes se almacenan en un array
   - Se actualiza la visualización de la lista cada vez que se agrega un participante

2. **Validación**:
   - Se verifica que no se ingresen campos vacíos
   - Se valida que no se ingresen nombres duplicados (ignorando mayúsculas/minúsculas)
   - Se muestran alertas informativas en caso de campos vacíos o nombres duplicados

3. **Sorteo**:
   - Se utiliza Math.random() para seleccionar un participante al azar
   - Se verifica que existan participantes antes de realizar el sorteo
   - Se muestra el resultado en la interfaz

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript vanilla
