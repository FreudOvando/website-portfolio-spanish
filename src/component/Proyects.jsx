import React from 'react'
import memory from '../assets/img/memory.jpg'
import clima from '../assets/img/clima.jpg'
import rick from '../assets/img/rickimg.jpg'
import list from '../assets/img/list.jpg'

const Proyects = () => {

  return (
    <div id='projects' className='grid gap-4 grid-cols-2 max-sm:grid-cols-1 font-merriweather '>
      
        <article className='min-w-[375px] w-auto h-[20rem] dark:shadow-zinc-600 shadow-sm shadow-slate-900 rounded-xl flex items-center flex-col gap-4 '>
            <img className='w-[8rem] h-[8rem] rounded-3xl p-2 ' src={memory} alt="Memory Play" /> 
            <h3 className='text-center text-xl'>Juego de memoria</h3>
            <p className='text-center text-md w-[20rem] '>Pequeño juego de memoria creado con React | Tailwind CSS | TypeScript.</p>
            <p>Visita la App<span className='bold'><a target='_blank' href="https://memory-play-freud.netlify.app/"> aqui</a></span></p>
        </article>

        <article className='dark:shadow-zinc-600 w-auto h-[20rem] shadow-sm shadow-slate-900 rounded-xl flex items-center flex-col gap-4 '>
            <img className='w-[8rem] h-[8rem] rounded-3xl p-2 ' src={clima} alt="Weather App" /> 
            <h3 className='text-center text-xl'>Aplicación del clima</h3>
            <p className='text-center text-md w-[20rem]'>Conoce el clima en tu localidad creado con React js | Javascript | tailwind CSS</p>
            <p>Visita la App<span className='bold'><a target='_blank' href="https://weather-app-freud.netlify.app/"> aqui</a></span></p>
        </article>

        <article className=' dark:shadow-zinc-600 w-auto h-[20rem] shadow-sm shadow-slate-900 rounded-xl flex items-center flex-col gap-4 '>
            <img className='w-[8rem] h-[8rem] rounded-3xl p-2 ' src={rick} alt="Funny rick and morty app" /> 
            <h3 className='text-center text-xl'>Rick and Morty App</h3>
            <p className='text-center text-md w-[20rem]'>Encuentra los personajes de la serie rick and morty y conoce su estatus creado con React js | Javascript | tailwind CSS</p>
            <p>Visita la App<span className='bold'><a target='_blank' href="https://rickandmortyapplocationfreud.netlify.app/"> aqui</a></span></p>
        </article>

        <article className='dark:shadow-zinc-600 w-auto h-[20rem] shadow-sm shadow-slate-900 rounded-xl flex items-center flex-col gap-4 '>
        
            <img className='w-[8rem] h-[8rem] rounded-3xl p-2 ' src={list} alt="Weather App" /> 
            <h3 className='text-center text-xl'>List to do</h3>
            <p className='text-center text-md w-[20rem]'>Lista de tareas creado con React js | TypeScript | tailwind CSS</p>
            <p>Visita la App<span className='bold'><a target='_blank' href="https://todo-list-freud.netlify.app/"> aqui</a></span></p>
        
        </article>

    </div>
  )
}

export default Proyects