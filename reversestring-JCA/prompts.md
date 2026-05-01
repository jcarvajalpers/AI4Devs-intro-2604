# Generalidades

Proceso realizado con ChatGpt 


# Prompts 

## Primer Requerimiento 

Vamos a crear un script en lenguaje Javascript que recibiendo una cadena de texto devuelva el reverse de esa cadena por ejemplo si introduzco AI4Devs devuelve sveD4IA.

Este script debe ser llamado desde un index.html, usa este template : 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html>
```


## Segundo Requerimiento

vamos a hacer un par de cambios, primero hagamos que El botón solo aparezca cuando haya texto suficiente, es decir, más de 3 letras (esto deberia estar en hardcode para facilitar el proceso ahora pero debe ser facilmente modificable)

## Tercer Requerimiento 

Ahora vamos a hacer que la cadena invertida se actualice en tiempo real, el boton no seria necesario 

## Intervencion realizada por revision de codigo 

### Intervencion en el index.html

como resultado de una revision de codigo, hay sugerencias a tener en cuenta, verifica y resuelve para el index.html , segun estas indicaciones : In @reversestring-JCA/index.html: - Line 2: The lang attribute is set to "en" while the UI text (the input placeholder on line 10) is in Spanish, causing an accessibility/translation mismatch; update the HTML to make the language declaration and visible text consistent by either changing the html element's lang attribute to "es" or by translating the placeholder text to English so that the declaration (html lang="...") and the input placeholder text match; locate the html tag and the input/placeholder in index.html to apply the change. - Line 10: The text input with id "textInput" lacks an associated label which harms accessibility; add a visible <label> element linked to that input (use for="textInput") or wrap the input in a <label> and provide a clear prompt (e.g., "Texto a invertir" or similar), or if a visible label is not desired add a proper aria-label/aria-labelledby pointing to a descriptive element; ensure the label text clearly describes the field so screen readers and larger click targets work correctly.

### Intervencion en el script.js

como resultado de una revision de codigo, hay sugerencias a tener en cuenta, verifica y resuelve para el script.js - Around line 3-4: Add defensive null checks after calling
document.getElementById for textInput and result: verify that textInput and
result are not null (using an early return or throwing/console.error) before
using them elsewhere in the script (e.g., any handlers or functions that
reference textInput.value or result.textContent). Update the initialization
around the textInput and result variables so the script fails gracefully with a
clear error message when those DOM elements are missing or have incorrect IDs.
- Around line 14-22: The validation uses trimmed input but reversal uses the raw
value, so modify the input handler to trim once and use that trimmed string for
both validation and reversal: in the event listener for textInput, compute const
trimmed = textInput.value.trim(); then call hasEnoughText(trimmed) and
reverseString(trimmed) (update any references to text variable accordingly) so
hasEnoughText and reverseString operate on the same trimmed input and
result.textContent is set from the reversed trimmed string. 





