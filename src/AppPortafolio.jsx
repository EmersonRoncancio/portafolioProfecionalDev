import { Seccion1 } from "./components/Seccion1"
import { Seccion2 } from "./components/Seccion2"
import { Seccion3 } from "./components/Seccion3"
import { Seccion4 } from "./components/Seccion4"
import { Seccion5 } from "./components/Seccion5"
import { Seccion6 } from "./components/Seccion6"
import { Seccion7 } from "./components/Seccion7"
import { Seccion8 } from "./components/Seccion8"
import { Seccion9 } from "./components/Seccion9"
import { useGlobalState } from "./context/darkMode"

export const AppPortafolio = () => {

  const { darkMode } = useGlobalState()

  return (
    <main className={`-z-20 w-full h-full py-[30px] duration-700 ${darkMode ? "bg-white" : "bg-black"} font-semibold`}>
      <div className="grid md:grid-cols-4 md:grid-rows-4 h-full md:h-[130vh] sm:max-w-[600px] max-w-[320px] md:max-w-[800px] lg:max-w-[1100px] xl:max-w-[1300px] grid-cols-1 mx-auto gap-5 md:px-4 xl:px-0">
        <Seccion1 />
        <Seccion2 />
        <Seccion3 />
        <Seccion4 />
        <Seccion5 />
        <Seccion6 />
        <Seccion7 />
        <Seccion8 />
        <Seccion9 />
      </div>
    </main>
  )
}
