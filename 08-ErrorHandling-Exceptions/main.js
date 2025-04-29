
const btn = document.getElementById('btn')
const container = document.querySelector('.container')

let tarea = 1

const traerTarea = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${tarea}`)
        const data = await res.json();
        console.log(data);
        tarea++;
        return data;
    } catch (error) {
        console.log(error);
    }finally{
        console.log('Tarea finalizada');
    }
}

btn.addEventListener('click', () => { traerTarea() })


