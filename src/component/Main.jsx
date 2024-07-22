import React, { useEffect, useState } from 'react';
import imagenfreud from '../assets/img/profile.png';
import write from '../util/letters'; // Asegúrate de que la ruta es correcta

const Main = () => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const text = "Freud Ovando Lara";
        write(text, setDisplayedText);
    }, []);

    return (
        <div className='my-[5rem] w-[40rem] font-merriweather min-w-[375px] h-[40rem] flex items-center justify-center flex-col shadow-md rounded-2xl shadow-fuchsia-900 dark:shadow-slate-700 max-sm:w-[10rem] '>
            <section className='flex items-center justify-start flex-row'>
                <img className='rounded-full w-[10rem] h-[10rem] m-2' src={imagenfreud} alt="profile image" />
                <a
                    href='https://www.linkedin.com/in/freud-ovando-lara-337672248/'
                    className='rotate-border bg-violet-200 w-[8rem] h-[2rem] text-center rounded-3xl m-2 dark:text-slate-200 dark:bg-slate-950'
                >
                    Looking job
                </a>
            </section>

            <section className='my-2'>
                <h3 className='text-2xl font-merriweather text-slate-500 '>{displayedText}</h3>
                <p className='w-[25rem] h-[10rem] mt-6 text-lg text-center text-wrap max-sm:w-[20rem] inline-block'>
                I am a quick learner and a dedicated, hardworking, I have independently designed and developed several web applications using React, Tailwind CSS, and TypeScript. My communication skills, ability to work under pressure, and being an excellent team player make me well-suited for collaborative environments.
                </p>
            </section>

            <section>
                <button
                    className=" cursor-pointer dark:bg-slate-200 dark:text-slate-900 font-bold flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[170px] h-[40px]"
                >
        <a href="https://drive.google.com/file/d/1uyAqajSItbYqp1FnY1bqWq_Hh38OYJ49/view?usp=drive_link" target='_blank'>Resume</a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 animate-bounce"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                        ></path>
                    
                    </svg>
                    
                </button>
            </section>
        </div>
    );
}

export default Main;
