import { Switch } from "@headlessui/react";
import { useGlobalState } from "../context/darkMode";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export const Seccion2 = () => {
  const { darkMode, setDarkMode } = useGlobalState();
  const { t } = useTranslation();

  const handleChange = (value) => {
    setDarkMode(value);
  };

  return (
    <div
      className={`relative flex flex-col justify-center items-center max-md:h-[300px] h-full rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-700 shadow-2xl group ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-indigo-950 to-black shadow-indigo-900/40"
          : "bg-gradient-to-br from-cyan-300 via-blue-400 to-blue-500 shadow-blue-500/40"
      }`}
    >
      {/* Capa de Efectos Fondo - Modo Oscuro (Estrellas y Brillo lunar) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          darkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-indigo-200 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-16 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-10 right-1/3 w-2 h-2 bg-indigo-300 rounded-full blur-[2px] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 blur-[60px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
      </div>

      {/* Capa de Efectos Fondo - Modo Claro (Sol y Nubes difuminadas) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          !darkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-yellow-200/50 blur-[50px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-200/50 blur-[40px] rounded-full pointer-events-none"></div>
      </div>

      {/* Contenedor Principal */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="text-center">
          <h3
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-500 drop-shadow-sm ${
              darkMode ? "text-indigo-50" : "text-white"
            }`}
          >
            {darkMode ? t('darkMode') : t('lightMode')}
          </h3>
          <div
            className={`h-1.5 w-12 mx-auto rounded-full mt-2 transition-colors duration-500 ${
              darkMode ? "bg-indigo-500/80" : "bg-white/60"
            }`}
          ></div>
        </div>

        {/* Switch UI Pro-Max */}
        <Switch
          checked={darkMode}
          onChange={handleChange}
          className={`${
            darkMode
              ? "bg-indigo-950 border-indigo-800"
              : "bg-sky-200/50 border-white/60 backdrop-blur-sm"
          }
            relative inline-flex h-[64px] w-[130px] shrink-0 cursor-pointer rounded-full border-2 transition-all duration-500 ease-in-out focus:outline-none shadow-inner hover:scale-[1.03] active:scale-[0.97]`}
        >
          <span className="sr-only">Toggle Theme</span>
          
          {/* Fondo del Switch (Iconos estáticos detrás del círculo) */}
          <span className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none">
            <BsMoonStarsFill className={`text-xl transition-opacity duration-500 ${darkMode ? 'opacity-100 text-indigo-300' : 'opacity-0'}`} />
            <BsSunFill className={`text-2xl transition-opacity duration-500 ${!darkMode ? 'opacity-100 text-yellow-100' : 'opacity-0'}`} />
          </span>

          {/* Círculo deslizante */}
          <span
            className={`${
              darkMode ? "translate-x-[66px] bg-slate-800" : "translate-x-0 bg-white"
            }
            pointer-events-none flex h-[60px] w-[60px] items-center justify-center transform rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-in-out z-10`}
          >
            {darkMode ? (
              <BsMoonStarsFill className="text-yellow-100 text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-500 rotate-0" />
            ) : (
              <BsSunFill className="text-yellow-500 text-3xl animate-[spin_10s_linear_infinite] drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
            )}
          </span>
        </Switch>

        <p
          className={`text-sm sm:text-base font-medium transition-colors duration-500 ${
            darkMode ? "text-indigo-300" : "text-blue-100"
          }`}
        >
          {darkMode ? t('intoNight') : t('embraceSun')}
        </p>
      </div>
    </div>
  );
};
