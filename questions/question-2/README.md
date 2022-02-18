# Enunciado 2

> En la carpeta [question-2](https://bitbucket.org/vestua-com/questions/src/main/question-2/) se ha exportado eventos de navegaciÃ³n de usuarios anonimizados de la plataforma VestuÃ¡. Se le pide al equipo de IngenierÃ­a que hagan un anÃ¡lisis sobre los datos de navegaciÃ³n. En particular se solicita:
>
> - Calcular la cantidad de visitas Ãºnicas por cada producto.
> - Calcular la cantidad de clicks Ãºnicos por cada producto.
> - Calular el CTR (*Clickthrough Rate*) de cada producto.
> 
> El set de datos contiene la siguiente estructura:
> 
> - `user`: id del usuario que ejecutÃ³ el evento.
> - `entityId`: id de la entidad al que el usuario ejecutÃ³ el evento.
> - `entityType`: tipo de entidad al que se ejecutÃ³ el evento.
> - `eventType`: tipo de evento. Puede ser `impression` o `click`.
> 
> Como miembro del equipo de ingenierÃ­a, te solicitan modificar el archivo [script.js](https://bitbucket.org/vestua-com/questions/src/main/question-2/script.js) para que pueda leer el set de datos y generar un archivo `output.csv` con las siguientes columnas:
> 
> - `productId`: id del producto.
> - `clicks`: cantidad de *clicks* Ãºnicos que tiene el producto
> - `impressions`: cantidad de impresiones Ãºnicas que tiene el producto.
> - `ctr`: mÃ©trica CTR del producto.

# Razonamiento

_Escribir aquÃ­ los supuestos asumidos, reflexiones y explicaciones de la soluciÃ³n_

Como primera instancia parsee el archivo .csv a un .json para poder trabajar con la data.
La función que va a ejecutar el algoritmo recibe el id del producto que se quiere buscar. Creo una estructura(objeto) para almacenar la información y voy trayendo del json los datos requeridos.
Asigno las propiedades y valores dentro del objeto(data) para representar las columnas que se piden y luego lo devuelvo.