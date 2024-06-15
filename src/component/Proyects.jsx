import React from 'react'
import work from '../assets/img/work.jpg'


const Proyects = () => {

  return (
    <div className='grid gap-4 grid-cols-2 max-sm:grid-cols-1 font-merriweather '>
      
        <article className='min-w-[375px] w-auto h-[20rem] shadow-sm shadow-slate-900 rounded-xl flex items-center flex-col gap-4 '>
            <img className='w-[8rem] h-[8rem] rounded-3xl p-2 ' src={work} alt="" /> 
            <h3 className='text-center text-md p-2'>Project one</h3>
            <p className='text-center text-sm p-2 w-[20rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis quasi amet expedita odio, ea cumque deserunt atque voluptatibus assumenda voluptate incidunt illum, qui fuga soluta non repellat eaque error.</p>
        </article>

        <article className='w-auto h-[20rem] shadow-sm shadow-slate-900 rounded-xl flex items-center flex-col gap-4 '>
            <img className='w-[8rem] h-[8rem] rounded-3xl p-2 ' src={work} alt="" /> 
            <h3 className='text-center text-md p-2'>Project one</h3>
            <p className='text-center text-sm p-2 w-[20rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis quasi amet expedita odio, ea cumque deserunt atque voluptatibus assumenda voluptate incidunt illum, qui fuga soluta non repellat eaque error.</p>
        </article>

        <article className='w-auto h-[20rem] shadow-sm shadow-slate-900 rounded-xl flex items-center flex-col gap-4 '>
            <img className='w-[8rem] h-[8rem] rounded-3xl p-2 ' src={work} alt="" /> 
            <h3 className='text-center text-md p-2'>Project one</h3>
            <p className='text-center text-sm p-2 w-[20rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis quasi amet expedita odio, ea cumque deserunt atque voluptatibus assumenda voluptate incidunt illum, qui fuga soluta non repellat eaque error.</p>
        </article>

        <article className='w-auto h-[20rem] shadow-sm shadow-slate-900 rounded-xl flex items-center flex-col gap-4 '>
            <img className='w-[8rem] h-[8rem] rounded-3xl p-2 ' src={work} alt="" /> 
            <h3 className='text-center text-md p-2'>Project one</h3>
            <p className='text-center text-sm p-2 w-[20rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis quasi amet expedita odio, ea cumque deserunt atque voluptatibus assumenda voluptate incidunt illum, qui fuga soluta non repellat eaque error.</p>
        </article>


    </div>
  )
}

export default Proyects