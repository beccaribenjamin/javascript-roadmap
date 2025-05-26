# Lenses en JavaScript

Nos permiten trabajar con estructuras de datos inmutables y anidadas, algo que puede ser muy engorroso en JavaScript sin mutar datos directamente.

## ¿Qué son los Lenses?

Un Lens es una abstracción funcional que permite:

1. **Acceder (get)** a una parte de una estructura de datos compleja (como un objeto anidado)

2. **Modificar (set)** una parte de esa estructura de manera inmutable

3. Componer operaciones de lectura y escritura en estructuras profundas sin mutar el original

## ¿Para qué sirven?

- Para trabajar con objetos inmutables sin hacer copias manuales
- Para acceder y actualzar estructuras anidadas de forma declarativa
- Para componer transformaciones sin perder claridad ni romper estructuras

## Anatomía de un Lens

```js
const lens = (getter, setter) => ({
    get: getter,
    set: setter
})
```


## Ejemplo práctico

Modificar el nombre un usuario sin mutar

```js
const user = {
    name: "Andrea",
    address: {
        city: "Córdoba",
        zip: "5000"
    }
}
```

Lens manual para acceder al nombre

```js
const nameLens = {
    get: obj => obj.name,
    set: (val, obj) => ({ ...obj, name: val })
};

// Usar el lens
const nombre = nameLens.get(user); // "Andrea"
const userActualizado = nameLens.set("Lucía", user);

console.log(nombre); // Andrea
console.log(userActualizado); // user con name = "Lucía"
```

Lens para acceder/ modificar dirección -> Ciudad
```js
const cityLens = {
    get: obj => obj.address.city,
    set: (val, obj) => ({
        ...obj,
        address: {
            ...obj.address,
            city: val
        }
    })
};

const ciudad = cityLens.get(user); // Córdoba
const userNuevo = cityLens.set("Buenos Aires", user);

console.log(userNuevo);
/*
{
  name: "Andrea",
  address: {
    city: "Buenos Aires",
    zip: "5000"
  }
}
*/

```

## 🧰 Composición de Lenses
En teoría funcional, los lenses se pueden componer para trabajar a profundidad. En JavaScript, podríamos hacer algo como:

```js
const composeLens = (outer, inner) => ({
    get: obj => inner.get(outer.get(obj)),
    set: (val, obj) =>
        outer.set(inner.set(val, outer.get(obj)), obj)
});
```

Esto permite hacer cosas como: 
```js
const addressLens = {
    get: obj => obj.address,
    set: (val, obj) => ({ ...obj, address: val })
};

const cityOnlyLens = {
    get: addr => addr.city,
    set: (val, addr) => ({ ...addr, city: val })
};

const fullCityLens = composeLens(addressLens, cityOnlyLens);

const nuevaPersona = fullCityLens.set("Rosario", user);
```

## 📚 ¿Hay librerías?

Sí, si querés usar Lenses reales, bien optimizados y composables:

Ramda

monocle-ts (TypeScript)

partial.lenses