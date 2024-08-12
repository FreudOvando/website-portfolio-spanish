import { useState } from "react";


const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
   <div>
     <header className="sticky min-w-[375px] font-merriweather bg-gray-300 rounded-3xl flex justify-center items-center text-sm dark:bg-slate-950">
      <nav className="">
        <ul className="flex flex-row items-center justify-around">
          <li className=" mx-2 hover:text-violet-500 hover:cursor-pointer dark:hover:text-slate-500"><a href="#projects">proyectos</a></li>
          <li className="mx-2 hover:text-violet-500 hover:cursor-pointer dark:hover:text-slate-500"><a href="https://www.linkedin.com/in/freud-ovando-lara-337672248/" target="_blank">linkedin</a></li>
          <li className="mx-2 hover:text-violet-500 hover:cursor-pointer dark:hover:text-slate-500"><a href="#contact">contacto</a></li>
          <li className="mx-2 hover:text-violet-500 hover:cursor-pointer dark:hover:text-slate-500"><a href="https://github.com/FreudOvando" target="_blank">github</a></li>
          <li className="mx-2 hover:text-violet-500 hover:cursor-pointer dark:hover:text-slate-500"><a href="https://website-portfolio-freud.netlify.app/ " target="_blank">version en ingles</a></li>
         
          <label className="relative inline-block w-10 h-6 mx-0">
            <input
              onClick={toggleDarkMode}
              type="checkbox"
              className="opacity-0 w-0 h-0 peer"
            />
            <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-purple-900 transition duration-500 ease-in-out rounded-full peer-checked:bg-purple-700"></span>
            <span className="absolute content-[''] h-4 w-4 bg-purple-900 left-1 bottom-1 rounded-full transition duration-500 ease-in-out peer-checked:transform peer-checked:translate-x-full peer-checked:shadow-[inset_15px_-4px_0_15px_#fff000] shadow-[inset_8px_-4px_0_0_#fff000]"></span>
          </label>
        </ul>
      </nav>
    </header>
</div>
  );
};

export default Header;
