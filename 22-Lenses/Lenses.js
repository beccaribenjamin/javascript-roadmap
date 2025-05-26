/*
🎯 Escenario realista: Modificar un perfil de usuario
Supongamos que trabajás en una app donde se manejan perfiles de usuario inmutables con información anidada. Querés:

Leer datos anidados fácilmente

Modificar valores profundos sin mutar el objeto original

Componer lentes para acceder más fácilmente a propiedades anidadas

*/

// Estructura de los datos del usuario
const usuario = {
    id: 1,
    nombre: "Valentina",
    contacto: {
        email: "valen@email.com",
        telefono: "123456789"
    },
    direccion: {
        ciudad: "Mendoza",
        cp: "5500"
    }
};



// Crea un lens a partir de funciones getter y setter
const lens = (getter, setter) => ({
    get: getter,
    set: setter
});

// Composición de lenses
const composeLens = (outer, inner) => ({
    get: obj => inner.get(outer.get(obj)),
    set: (val, obj) => outer.set(inner.set(val, outer.get(obj)), obj)
});

// Lens para 'contacto'
const contactoLens = lens(
    obj => obj.contacto,
    (val, obj) => ({ ...obj, contacto: val })
);

// Lens para 'email' dentro de 'contacto'
const emailLens = lens(
    contacto => contacto.email,
    (val, contacto) => ({ ...contacto, email: val })
);

// Composición: acceso a contacto.email
const contactoEmailLens = composeLens(contactoLens, emailLens);

// Uso: lectura
const emailActual = contactoEmailLens.get(usuario);
console.log("Email actual:", emailActual); // valen@email.com

// Uso: modificación
const usuarioActualizado = contactoEmailLens.set("nueva@email.com", usuario);

console.log("Usuario actualizado:");
console.log(usuarioActualizado);

/*
{
  id: 1,
  nombre: "Valentina",
  contacto: {
    email: "nueva@email.com",
    telefono: "123456789"
  },
  direccion: {
    ciudad: "Mendoza",
    cp: "5500"
  }
}
*/

// ✅ Sin mutar el original
console.log("Original intacto:", usuario);


/*
💡 ¿Qué muestra este ejemplo?
Cómo construir lentes personalizados

Cómo componerlos para acceder a estructuras anidadas

Cómo hacer modificaciones inmutables

Que el objeto original queda intacto

*/