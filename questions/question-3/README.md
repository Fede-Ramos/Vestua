# Enunciado 3

> Implementar un mÃ©todo de verificaciÃ³n lÃ³gica de parÃ©ntesis. Es decir, implementar el mÃ©todo `parenthesisChecker(str)` que recibe un `string` como parÃ¡metro y devuelve un `boolean`. La respuesta del mÃ©todo debe ser `true` si la cadena de `string` es vÃ¡lida en tÃ©rminos de parÃ©ntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de parÃ©ntesis se cierra correctamente. A continuaciÃ³n se muestran ejemplos de `string` vÃ¡lidos e invÃ¡lidos.
> 
> **Ejemplos vÃ¡lidos**: la funciÃ³n debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` â†’ `true`
> - `parenthesisChecker('a * (b + c * [d])')` â†’ `true`
> - `parenthesisChecker('[]{}()abc{([])}')` â†’ `true`
>
> **Ejemplos vÃ¡lidos**: la funciÃ³n debe devuelve `false`.
>
> - `parenthesisChecker('(()')` â†’ `false`
> - `parenthesisChecker('(([))')` â†’ `false`
> - `parenthesisChecker('([)]')` â†’ `false`

# Razonamiento

_Escribir aquÃ­ los supuestos asumidos, reflexiones y explicaciones de la soluciÃ³n_

Definimos una estructura que trabaje en forma de pila(stack), recorremos el string que recibimos por parámetro con un bucle y preguntamos si están presentes los caracteres que buscamos.
Guardamos los caracteres de apertura buscados y los almacenamos en la pila, a medida que encontramos su pareja de cierre vamos vaciando el stack, si éste ya no tiene elementos devolvemos un booleano true en este caso, de lo contrario devolvemos false.