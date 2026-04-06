import { useState } from "react";
import { FaBriefcase, FaBuilding, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

export const Seccion10 = ({ darkMode }) => {
  const [isWorking] = useState(true);

  return (
    <div
      className={`rounded-2xl md:rounded-[2rem] p-4 sm:p-5 md:p-6 flex flex-col justify-center h-full shadow-2xl transition-all duration-500 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 border border-green-700 shadow-green-900/50"
          : "bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 shadow-green-500/30"
      }`}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-4 right-4 w-16 h-16 rounded-full blur-2xl opacity-20 ${darkMode ? "bg-green-400" : "bg-white"} animate-pulse`}></div>
        <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-full blur-xl opacity-15 ${darkMode ? "bg-emerald-400" : "bg-yellow-300"} animate-pulse`}></div>
      </div>

      {/* Badge de estado */}
      <div className="relative z-10 flex justify-center mb-4">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
          isWorking
            ? darkMode
              ? "bg-green-500/30 text-green-300 border border-green-400/50"
              : "bg-white/20 text-white border border-white/40"
            : darkMode
              ? "bg-gray-600/30 text-gray-400 border border-gray-500/50"
              : "bg-gray-500/20 text-gray-200 border border-gray-400/40"
        } backdrop-blur-sm shadow-lg`}>
          <span className={`w-2.5 h-2.5 rounded-full ${isWorking ? "bg-green-400 animate-pulse" : "bg-gray-400"}`}></span>
          {isWorking ? "Trabajando actualmente" : "Disponible"}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center">
        {/* Icono principal */}
        <div className={`mb-4 p-4 rounded-full ${darkMode ? "bg-green-800/50" : "bg-white/20"} backdrop-blur-sm`}>
          <FaBriefcase className={`text-4xl sm:text-5xl ${darkMode ? "text-green-300" : "text-white"}`} />
        </div>

        {/* Información de la empresa */}
        <h2 className={`text-2xl sm:text-3xl font-bold mb-2 ${darkMode ? "text-white" : "text-white"} drop-shadow-lg`}>
          Mancii
        </h2>

        <p className={`text-xs sm:text-sm mb-4 ${darkMode ? "text-green-200" : "text-green-100"}`}>
          Backend Developer
        </p>

        {/* Descripción */}
        <div className={`max-w-xs mx-auto mb-4 p-3 rounded-lg ${darkMode ? "bg-green-900/40 border border-green-700/50" : "bg-white/10 border border-white/20"} backdrop-blur-sm`}>
          <p className={`text-xs leading-relaxed ${darkMode ? "text-green-100" : "text-white/90"}`}>
            Desarrollando soluciones robustas y escalables con tecnologías modernas
          </p>
        </div>

        {/* Enlace a LinkedIn */}
        <a
          href="https://www.linkedin.com/company/mancii/"
          target="_blank"
          rel="noopener noreferrer"
          className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
            darkMode
              ? "bg-blue-600/30 text-blue-300 border border-blue-500/50 hover:bg-blue-600/50"
              : "bg-blue-600/20 text-blue-100 border border-blue-400/50 hover:bg-blue-600/40"
          } backdrop-blur-sm shadow-lg`}
        >
          <FaLinkedin className="text-lg" />
          <span>Ver empresa en LinkedIn</span>
          <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Indicador de tiempo */}
        <div className={`mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs ${
          darkMode ? "bg-green-950/50 text-green-300" : "bg-green-900/30 text-green-100"
        }`}>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span>Full-time</span>
        </div>
      </div>

      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
    </div>
  );
};