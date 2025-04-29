
const btn = document.getElementById('btn')
const container = document.querySelector('.container')

//Yo se de antemano que hay 200 tareas
//Si la tarea no existe, se debe lanzar un error

let tarea = 200

const traerTarea = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        
        if (!res.ok) {
            throw new Error('Error al obtener la tarea');
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }finally{
        console.log('Tarea finalizada');
    }
}

btn.addEventListener('click', () => { traerTarea(tarea), tarea++ })


