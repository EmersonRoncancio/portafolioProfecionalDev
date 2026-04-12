import { GiThink } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { MdLeaderboard, MdGroupAdd } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const habilidadesKeys = [
  { icon: GiThink, key: "critical_thinking", color: "from-purple-400 to-pink-500" },
  { icon: BsStars, key: "creativity", color: "from-pink-400 to-rose-500" },
  { icon: HiUserGroup, key: "adaptability", color: "from-rose-400 to-orange-500" },
  { icon: MdLeaderboard, key: "leadership", color: "from-orange-400 to-amber-500" },
  { icon: MdGroupAdd, key: "teamwork", color: "from-amber-400 to-yellow-500" },
];

export const Seccion4 = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`group md:row-span-2 rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-8 flex flex-col h-full md:min-h-0 min-h-[350px] shadow-2xl transition-all duration-700 relative overflow-hidden border-2 ${
        darkMode
          ? "bg-gray-900 border-purple-500/10 hover:border-purple-500/30 shadow-purple-900/20"
          : "bg-gradient-to-br from-indigo-500 via-purple-600 to-fuchsia-600 border-white/30 shadow-purple-500/30"
      }`}
    >
      {/* Luces y Efectos de Fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-30 transition-transform duration-1000 group-hover:scale-125 ${darkMode ? "bg-purple-600" : "bg-white"}`}></div>
        <div className={`absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[60px] opacity-20 transition-transform duration-1000 group-hover:scale-150 ${darkMode ? "bg-pink-600" : "bg-fuchsia-300"}`}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-6 md:mb-8 shrink-0">
        <div>
          <h2
            className={`text-2xl sm:text-3xl md:text-3xl font-black tracking-tight drop-shadow-sm ${
              darkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400" : "text-white"
            }`}
          >
            {t('skills')}
          </h2>
          <div
            className={`h-1.5 w-16 rounded-full mt-2 transition-all duration-500 group-hover:w-24 ${
              darkMode ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-white/60"
            }`}
          ></div>
        </div>
      </div>

      {/* Contenedor de la lista */}
      <div className="flex-1 flex flex-col justify-center gap-3 md:gap-4 relative z-10">
        {habilidadesKeys.map((habilidad, index) => {
          const Icon = habilidad.icon;
          return (
            <div
              key={index}
              className={`group/item relative flex items-center p-2 sm:p-3 pr-4 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] border ${
                darkMode
                  ? "bg-gray-800/50 hover:bg-gray-800/80 border-gray-700/50 hover:border-purple-500/50 shadow-md"
                  : "bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/50 backdrop-blur-md shadow-lg"
              }`}
            >
              {/* Línea indicadora lateral que se enciende en hover */}
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 rounded-r-full transition-all duration-300 ease-out group-hover/item:h-[60%] bg-gradient-to-b ${habilidad.color}`}></div>

              {/* Contenedor del Icono (Glassmorphism) */}
              <div
                className={`flex-shrink-0 p-2.5 sm:p-3 rounded-lg sm:rounded-xl ml-2 sm:ml-3 transition-all duration-500 group-hover/item:rotate-12 group-hover/item:scale-110 shadow-inner border ${
                  darkMode
                    ? "bg-gray-900 border-gray-700/50 shadow-black/50"
                    : "bg-white/20 border-white/30 shadow-black/5"
                }`}
              >
                <Icon
                  className={`text-xl sm:text-2xl transition-all duration-500 ${
                    darkMode ? "text-gray-400 group-hover/item:text-white" : "text-white drop-shadow-md"
                  }`}
                />
              </div>

              {/* Título de la Habilidad */}
              <div className="flex-1 min-w-0 ml-3 sm:ml-4">
                <h3
                  className={`font-bold text-sm sm:text-base tracking-wide truncate transition-colors duration-300 ${
                    darkMode
                      ? "text-gray-300 group-hover/item:text-white"
                      : "text-white group-hover/item:text-white"
                  }`}
                >
                  {t(habilidad.key)}
                </h3>
              </div>

              {/* Flecha indicadora al final */}
              <div className={`opacity-0 -translate-x-4 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0 ${
                darkMode ? "text-pink-400" : "text-white"
              }`}>
                <FiArrowRight strokeWidth={3} className="text-lg" />
              </div>

              {/* Glow en hover (Fondo sutil de la tarjeta) */}
              <div className={`absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover/item:opacity-10 transition-opacity duration-300 bg-gradient-to-r ${habilidad.color} pointer-events-none`}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
