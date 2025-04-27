# Variables and DataType

## Qué es una variable?

Es un contenedor para un valor, podemos almacenar númros, textos, nombres, booleanos, etc.

## Declarar una variable

Para usar uan variable, primero hay que crearla y esto se lo conoce como declararla. 
En la declaración de una variable tenemos dos palabras reservadas de Javascript que son var y let seguidas por el nombre que le asignaremos a la variable

### EJEMPLO

```javascript
var nombre
let edad
```
En este caso estamos creando dos variables, `nombre` y `edad`

## Inicar una variable

Una vez que hayas declarado una variable, la puedes iniciar con un valor. Para ello, escribe el nombre de la variable, seguido de un signo igual (=), seguido del valor que deseas darle. Por ejemplo:

```javascript
nombre = "Pedro"
edad = 45

console.log(`Hola soy ${nombre} y tengo ${edad}`)
```

También podes declarar e iniciar una variable al mismo tiempo

```javascript
let nombre = "Juan"
let edad = 50
```

## Actualizar el valor de una variable

Una vez que una variable se ha iniciado con un valor, puedes cambiar (o actualizar) ese valor simplemente dándole un valor diferente. Intenta ingresar las siguientes líneas en tu consola:

```javascript
myName = "Bob";
myAge = 40;
```

## Consejos sobre nomenclaturas de variables

Puedes llamar a una variable prácticamente como quieras, pero existen limitaciones. En general, debes limitarte a usar caracteres latinos (0-9, a-z, A-Z) y el caracter de subrayado.

❌No debes usar otros caracteres porque pueden causar errores o ser difíciles de entender para una audiencia internacional.
❌No use guiones bajos al comienzo de los nombres de las variables — esto se usa en ciertas construcciones de JavaScript para significar cosas específicas, por lo que puede resultar confuso.
❌No uses números al comienzo de las variables. Esto no está permitido y provoca un error.
⚠️Una convención segura a seguir es la llamada "minúscula mayúsculas intercaladas", en la que se juntan varias palabras con minúsculas para la primera palabra completa y luego en mayúsculas las primeras letras de las siguientes palabras. Así lo hemos estado haciendo en nuestros nombres de variables en el artículo hasta ahora.
⚠️Haz que los nombres de las variables sean intuitivos, para que describan los datos que contienen. No uses solo letras/números o frases grandes y largas.
⚠️Las variables distinguen entre mayúsculas y minúsculas — por lo tanto myage es una variable diferente de myAge.
⚠️Un último punto: también debes evitar el uso de palabras reservadas de JavaScript como nombres de variables — con esto, nos referimos a las palabras que componen la sintaxis real de JavaScript. Por lo tanto, no puedes usar palabras como var, function, let y for como nombres de variables. Los navegadores las reconocen como elementos de código diferentes, por lo que obtendrás errores.


