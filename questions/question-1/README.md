# Enunciado 1

> EstÃ¡s subiendo una escalera de N peldaÃ±os. En cada momento, puedes subir 1 o 2 peldaÃ±os. Â¿En cuÃ¡ntas formas diferentes puedes subir las escalera?

# Razonamiento

_Escribir aquÃ­ el razonamiento al puzzle_

El problema se puede resolver implementando la secuencia Fibonacci que puede resumirse de la siguiente manera Fn= Fn-1 + Fn -2
Para poder hacer esto usamos tanto un bucle como recursividad, planteando un caso base para detener ese ciclo.
Declaramos dos variables para comenzar con la secuencia, luego dentro del ciclo for creamos una variable para almacenar la suma de las variables antes mencionadas.
Reasignamos los valores para poder ir moviéndonos en la secuencia y por último al terminar el ciclo, devolvemos el valor actual.