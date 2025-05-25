/*🧩 Caso práctico: Normalización y validación de email
Supongamos que queremos procesar un campo de email que puede venir con errores comunes como espacios, mayúsculas, o sin @.

🎯 Objetivo
Eliminar espacios innecesarios

Convertir a minúsculas

Validar formato de email

Registrar errores si el email no es válido
*/

// Primero hacemos las funciones de normalización y validación

const trim = (str) => str.trim();
const toLowerCase = (str) => {str.toLowerCase()};
const isValidEmail = (str) => {/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)}
const throwIfInvalid = str => {
    if (!isValidEmail(str)) throw new Error("Email no válido");
    return str;
};

// Funcion de Composición

const compose = (...fns) => x => fns.reduceRight((v, fn) =>  fn(v), x);

const processEmail = compose(throwIfInvalid, toLowerCase, trim)

// Ejemplo de uso
try {
    const emailLimpio = procesarEmail("   ExAmple@DOMinio.COM  ");
    console.log("Email procesado:", emailLimpio); // Email procesado: example@dominio.com
} catch (error) {
    console.error("Error:", error.message);
}