import { GiThink } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { MdLeaderboard, MdGroupAdd } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

const habilidades = [
  { icon: GiThink, titulo: "Pensamiento Crítico" },
  { icon: BsStars, titulo: "Creatividad" },
  { icon: HiUserGroup, titulo: "Adaptabilidad" },
  { icon: MdLeaderboard, titulo: "Liderazgo" },
  { icon: MdGroupAdd, titulo: "Trabajo en Equipo" },
];

export const Seccion4 = ({ darkMode }) => {
  return (
    <div
      className={`md:row-span-2 rounded-2xl md:rounded-[2rem] p-4 sm:p-5 md:p-8 flex flex-col h-full md:min-h-0 min-h-[350px] shadow-2xl transition-all duration-500 relative overflow-hidden ${
        darkMode
          ? "bg-gray-800 border border-gray-700 shadow-gray-900/50"
          : "bg-gradient-to-br from-pink-500 to-purple-600 shadow-purple-500/30"
      }`}
    >
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full blur-3xl pointer-events-none translate-x-10 -translate-y-10"></div>

      <div className="relative z-10 flex items-center justify-between mb-4 md:mb-6 shrink-0">
        <div>
          <h2
            className={`text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-white"}`}
          >
            Habilidades
          </h2>
          <div
            className={`h-1.5 w-12 rounded-full mt-1.5 sm:mt-2 ${darkMode ? "bg-purple-500" : "bg-white/50"}`}
          ></div>
        </div>
      </div>

      {/* Contenedor de la lista con scroll visible si es necesario, pero más compacto */}
      <div className="flex-1 flex flex-col gap-3 justify-center ite">
        {habilidades.map((habilidad, index) => {
          const Icon = habilidad.icon;
          return (
            <div
              key={index}
              className={`group relative flex items-center p-1 justify-center gap-1 sm:gap-4 rounded-xl cursor-pointer transition-all duration-300 ease-out shrink-0 transform hover:-translate-y-0.5 hover:scale-[1.01] ${
                darkMode
                  ? "bg-gray-700/40 hover:bg-gray-700 border border-gray-600/50 hover:border-gray-500 shadow-sm"
                  : "bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md"
              }`}
            >
              {/* Contenedor del Icono */}
              <div
                className={`flex-shrink-0 p-2 sm:p-2.5 rounded-lg transition-transform duration-300 group-hover:rotate-6 ${
                  darkMode
                    ? "bg-gray-800 shadow-inner"
                    : "bg-white/20 shadow-inner"
                }`}
              >
                <Icon
                  className={`text-lg sm:text-xl md:text-2xl ${darkMode ? "text-purple-400 group-hover:text-purple-300" : "text-white"}`}
                />
              </div>

              {/* Título de la Habilidad */}
              <div className="flex-1 min-w-0">
                <h3
                  className={`font-bold text-xs sm:text-sm md:text-base tracking-wide truncate transition-colors duration-300 ${
                    darkMode
                      ? "text-gray-200 group-hover:text-white"
                      : "text-white"
                  }`}
                >
                  {habilidad.titulo}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
