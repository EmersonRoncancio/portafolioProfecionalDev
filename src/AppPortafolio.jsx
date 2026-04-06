import { Seccion1 } from "./components/Seccion1";
import { Seccion2 } from "./components/Seccion2";
import { Seccion3 } from "./components/Seccion3";
import { Seccion4 } from "./components/Seccion4";
import { Seccion5 } from "./components/Seccion5";
import { Seccion6 } from "./components/Seccion6";
import { Seccion7 } from "./components/Seccion7";
import { Seccion8 } from "./components/Seccion8";
import { Seccion9 } from "./components/Seccion9";
import { useGlobalState } from "./context/darkMode";

export const AppPortafolio = () => {
  const { darkMode } = useGlobalState();

  return (
    <main
      className={`-z-20 w-full min-h-screen py-[30px] duration-700 ${darkMode ? "bg-black" : "bg-gray-50"} font-semibold flex justify-center items-center`}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 w-full sm:max-w-[600px] max-w-[320px] md:max-w-[800px] lg:max-w-[1100px] xl:max-w-[1300px] md:h-auto md:min-h-[900px] md:max-h-[1200px] mx-auto gap-4 md:gap-5 md:px-4 xl:px-0">
        <Seccion1 darkMode={darkMode} />
        <Seccion2 />
        <Seccion3 darkMode={darkMode} />
        <Seccion4 darkMode={darkMode} />
        <Seccion5 darkMode={darkMode} />
        <Seccion6 darkMode={darkMode} />
        <Seccion7 darkMode={darkMode} />
        <Seccion8 darkMode={darkMode} />
        <Seccion9 darkMode={darkMode} />
      </div>
    </main>
  );
};
