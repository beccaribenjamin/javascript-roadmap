# Functors & Categories en JavaScript

## ¿Qué es un Functor?

Un functor es una estructura que implementa .map y permite aplicar funciones a valores sin romper la estructura.

## ¿Qué es una Categoría?

Una categoría es un conjunto de objetos conectar para morfismos (funciones) que pueden componerse y tienen identidad.

## Reglas clave

- **Identidad**: F(x).map(id) === F(x)
- **Composición**: F(x).map(f).map(g) === F(x).map(x => g(f(x)))

