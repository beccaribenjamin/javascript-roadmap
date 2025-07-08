# Eventos en JavaScript

## ¿Qué es un evento?

Un evento es cualquier interacción del usuario o del sistema que puede ser detectada por JavaScript, como:

▫️ Clicks (`click`)
▫️ Movimiento del mouse (`mousemove`)
▫️ Teclado (`keydown`, `keyup`)
▫️ Carga de una página (`load`)
▫️ Envío de un formulario (`submit`)

## Registro de Eventos (event listener)

Con `addEventListener`:

```javascript
const boton = document.getElementById('miBoton');

boton.addEventListener('click', function() {
  alert('¡Haz hecho clic en el botón!');
});
```

También se puede usar una función externa

```javascript
function manejarClick(){
    alert('Boton Clickeado')
}

boton.addEventListener('click', manejarClick)
```

## Propagación de los eventos

Cuando un evento ocurre, este se propaga por el DOM. Hay dos fases principales:

1. Captura (capturing): El evento va desde el document hasta el elemento objetivo.

2. Burbuja (bubbling): El evento sube desde el objetivo hacia el document.

```html
<div id="contenedor">
  <button id="boton">Clic</button>
</div>
```

```javascript
document.getElementById('contenedor').addEventListener('click', () => {
  console.log('Click en contenedor');
});

document.getElementById('boton').addEventListener('click', () => {
  console.log('Click en botón');
});
```
Por defecto, los eventos se manejan en burbuja, es decir, primero el botón, luego el contenedor.

Para escuchar en la fase de captura, puedes pasar un tercer argumento:

```javascript
contenedor.addEventListener('click', () => {
  console.log('Captura en contenedor');
}, true); // el "true" activa la fase de captura
```

## Detener la propagación

`event.stopPropagation()` detiene la propagación del evento hacia arriba o hacia abajo.
`event.stopImmediatePropagation()` detiene cualquier otro listener en el mismo elemento.

```javascript
boton.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Solo se ejecuta este');
});
```