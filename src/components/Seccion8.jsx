import { FaLinkedin } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

export const Seccion8 = ({ darkMode }) => {
  return (
    <div
      className={`group md:col-span-2 rounded-lg flex justify-center items-center relative max-md:h-[300px] h-[300px] md:h-auto overflow-hidden rounded-2xl md:rounded-[2rem] shadow-2xl transition-all duration-700 hover:shadow-3xl border-2 ${
        darkMode 
          ? "bg-gray-900 border-blue-500/20 hover:border-blue-500/40 shadow-blue-900/30" 
          : "bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 border-white/30 shadow-blue-500/40"
      }`}
    >
      {/* Fondo Coqueto - Gif/Video/Animación */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:bg-black/20"></div>
        {/* GIF Absoluto - Olas abstractas 3D */}
        <img 
          src="https://res.cloudinary.com/daezwxzg1/image/upload/v1712431200/abstract-waves_yqyq2y.gif" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60 scale-110 transition-transform duration-1000 group-hover:scale-125 mix-blend-screen"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        
        {/* Luces flotantes alternativas por si falla el GIF */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/30 rounded-full blur-[60px] animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-[60px] animate-pulse delay-700"></div>

        {/* Estrellas/Partículas */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)] animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-200 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)] animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,1)] animate-ping delay-500"></div>
      </div>

      {/* Brillo superior tipo cristal */}
      <div className="absolute top-0 inset-x-0 h-[40%] bg-gradient-to-b from-white/20 to-transparent z-10 opacity-50 pointer-events-none"></div>

      <a
        href="https://www.linkedin.com/in/emerson-roncancio-241243325/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 top-4 sm:right-6 sm:top-6 z-30 group/link"
      >
        <div className={`p-2.5 rounded-xl backdrop-blur-md transition-all duration-300 border shadow-lg ${
          darkMode 
            ? "bg-black/30 border-white/10 group-hover/link:bg-blue-500/30 group-hover/link:border-blue-400/50" 
            : "bg-white/20 border-white/40 group-hover/link:bg-white/40"
        }`}>
          <FaArrowRightToBracket
            className={`transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 ${
              darkMode ? "text-blue-100 group-hover/link:text-white" : "text-white"
            }`}
            size={22}
          />
        </div>
      </a>

      {/* Icono central súper coqueto con efecto 3D/Cristal */}
      <div className="relative z-20 flex flex-col items-center justify-center transform transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2">
        
        {/* Bloque de Cristal que encierra a LinkedIn */}
        <div className={`relative p-6 sm:p-8 rounded-[2rem] backdrop-blur-xl border-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)] ${
          darkMode 
            ? "bg-gray-900/60 border-blue-500/30" 
            : "bg-white/20 border-white/50"
        }`}>
          
          {/* Reflejo de luz diagonal pasando (Shimmer) */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-15deg] group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>
          
          <FaLinkedin
            className={`drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] ${
              darkMode ? "text-blue-400 group-hover:text-blue-300" : "text-white"
            }`}
            size={90}
          />
        </div>
        
        {/* Texto que aparece flotando en hover */}
        <span className={`absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-all duration-500 font-black tracking-[0.3em] text-sm translate-y-4 group-hover:translate-y-0 drop-shadow-lg ${
          darkMode ? "text-blue-200" : "text-white"
        }`}>
          CONECTAR
        </span>
      </div>
    </div>
  );
};
