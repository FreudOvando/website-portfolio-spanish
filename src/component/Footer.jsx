import React from 'react'
import html from '../assets/tecnologys/html.svg'
import css from '../assets/tecnologys/css.svg'
import git from '../assets/tecnologys/git.svg'
import github from '../assets/tecnologys/github.png'
import js from '../assets/tecnologys/javascript.png'
import react from '../assets/tecnologys/react.png'
import tailwild from '../assets/tecnologys/tailwild.svg'
import ts from '../assets/tecnologys/typesscript.png'




const Footer = () => {
  return (
    <div id='contact' className='grid grid-cols-3  my-10 max-sm:grid-cols-1 gap-8 font-mono text-xl'>
        <section className='flex flex-col items-center'>
        <div  className='m-2'>
            <p> All rigths reserved</p>
            <p>Technologies</p>
        </div>
        <div className='grid grid-cols-4 gap-6 '>
        <img className='dark:bg-slate-100 rounded-xl' src={html} alt=""/>
        <img className='dark:bg-slate-100 rounded-xl' src={css} alt="" />
        <img className='dark:bg-slate-100 rounded-xl' src={js} alt="" />
        <img className='dark:bg-slate-100 rounded-xl' src={ts} alt="" />
        <img className='dark:bg-slate-100 rounded-xl' src={tailwild} alt="" />
        <img className='dark:bg-slate-100 rounded-xl' src={react} alt="" />
        <img className='dark:bg-slate-100 rounded-xl' src={git} alt="" />
        <img className='dark:bg-slate-100 rounded-xl' src={github} alt="" />
        </div>
        </section>
        
        <div className='flex items-center gap-2 p-4'>
      <h2>Social Media</h2>
      <a href="https://github.com/FreudOvando" target='_blank'><img className=' dark:bg-slate-100 rounded-xl hover:bg-slate-500 dark:hover:bg-slate-100' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC"/>
      </a>
      <a href="https://www.linkedin.com/in/freud-ovando-lara-337672248/" target='_blank' ><img className='dark:bg-slate-100 rounded-xl hover:bg-slate-500 dark:hover:bg-slate-100' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASxJREFUSEvl1TsvBFEYh/HfCp2Igso3oNXoKFQKIa6hk/AtJD6GS4m4h0InLo1G7xPoRKUl7Elem81erZndxlQzOe88z5z/Oe+cgjZfhTbzdVxwh/GMs7rHxA+jcgZfGeFV3EaC66ie+oO0xK0nOMBqgA+x3KKkqWAX6wHdw1regnfsowsr6M1b8IrngA5jsLgzHuJ5CP3YxgdGMFfxAU0jOsZSvHSERUo9M4MnvJRBN4vjW2XPTQUnAU3vJNlCxFVvG3fjDX0hySTowRVGQ5waK12PGMtDkLr0NkA72Ij7S0znIUhrcBGgWlGmoaYRncb0U3GCzCPl/IlZnIfgLMbK6/6JoFGjDURzpShq1f0qohb/DFXldRc5jwPnBpM/yo4fmVmjqZ9V7uQAfgNR+VIZag7oTQAAAABJRU5ErkJggg=="/>
      </a>
        </div>
        <div id='contact'>

         <ul>
             <li>
                Freud Ovando Lara
             </li>
             <li>
                México
             </li>
             <li>
                freud5310@gmail.com
             </li>
             <li>
               +52 (993) - 2097 - 669
             </li>
        </ul>
        </div>
    </div>
  )
}

export default Footer