import { useState } from "react";

export const Seccion1 = ({ darkMode }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`md:col-span-2 md:row-span-2 rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row relative h-full shadow-2xl transition-all duration-500 hover:shadow-3xl ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-gray-700"
          : "bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 shadow-blue-500/30"
      }`}
    >
      {/* Elementos decorativos de fondo - ocultos en móvil muy pequeño */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-10 right-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full blur-2xl opacity-30 ${darkMode ? "bg-purple-500" : "bg-white"} animate-pulse`}></div>
        <div className={`absolute bottom-10 left-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full blur-xl opacity-20 ${darkMode ? "bg-blue-500" : "bg-yellow-300"} animate-pulse`}></div>
        <div className={`absolute top-1/2 left-1/4 w-16 h-16 sm:w-24 sm:h-24 rounded-full blur-3xl opacity-10 hidden sm:block ${darkMode ? "bg-green-500" : "bg-pink-300"}`}></div>
      </div>

      {/* Nombre con estilo mejorado */}
      <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 hidden min-[450px]:block">
        <div className="backdrop-blur-md bg-black/20 border border-white/20 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 shadow-lg">
          <span className={`text-xs font-bold ${darkMode ? "text-gray-200" : "text-white"} tracking-wide drop-shadow-md`}>
            Emerson Roncancio
          </span>
        </div>
      </div>

      {/* Contenedor de la foto - centrado orgánico en móvil, adaptado en desktop */}
      <div className="w-full md:w-[45%] h-[180px] sm:h-[220px] md:h-full relative z-10 flex items-center justify-center p-3 sm:p-6 md:p-8 shrink-0">
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-full md:h-full md:max-h-[350px] flex items-center justify-center">
          {/* Anillos decorativos animados */}
          <div className={`absolute inset-0 rounded-full md:rounded-[2rem] ${darkMode ? "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" : "bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500"} opacity-20 blur-xl animate-pulse`}></div>
          <div className={`absolute inset-0 rounded-full md:rounded-[2rem] border-2 sm:border-4 ${darkMode ? "border-purple-500/30" : "border-white/30"} scale-105 sm:scale-110`}></div>

          {/* Contenedor de la imagen */}
          <div className="absolute inset-0 rounded-full md:rounded-[2rem] overflow-hidden border-2 sm:border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-black/20">
            <img
              className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:rotate-2"
              src="https://res.cloudinary.com/daezwxzg1/image/upload/v1775449718/WhatsApp_Image_2026-04-05_at_11.26.59_PM_fthklw.jpg"
              alt="Foto de Perfil Emerson"
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
            />
          </div>

          {/* Badge flotante */}
          <div className="absolute bottom-1 right-1 md:bottom-4 md:right-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-1.5 sm:p-2 shadow-lg animate-bounce z-20">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Contenedor del texto con mejor diseño responsive */}
      <div className="w-full md:w-[55%] flex flex-col justify-center items-center md:items-start px-3 sm:px-6 md:px-8 pb-4 md:py-8 relative z-10 text-center md:text-left flex-1">
        
        {/* Badge de rol */}
        <div className="mb-2 sm:mb-4">
          <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs md:text-sm font-bold ${darkMode ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" : "bg-black/20 text-white border border-white/30"} backdrop-blur-sm shadow-md`}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Backend Developer
          </div>
        </div>

        <h1 className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 sm:mb-4 tracking-tight ${darkMode ? "text-white" : "text-white"} drop-shadow-lg`}>
          Hola Soy <span className={`inline-block animate-text-gradient bg-gradient-to-r ${darkMode ? "from-purple-400 via-blue-400 to-purple-400" : "from-yellow-300 via-white to-yellow-300"} bg-clip-text text-transparent`}>Emerson</span><span className="inline-block animate-waving-hand origin-bottom-right">👋</span>
        </h1>

        <div className={`space-y-3 sm:space-y-4 w-full ${darkMode ? "text-gray-300" : "text-white/95"} leading-relaxed flex flex-col items-center md:items-start`}>
          <p className="font-medium text-sm md:text-base">
            ¡Hola! Soy desarrollador especializado en:
          </p>

          {/* Grid de tecnologías - responsive fluido */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full">
            {[
              { name: "NestJS", color: "red" },
              { name: "Docker", color: "blue" },
              { name: "Microservicios", color: "green" },
              { name: "Linux", color: "orange" },
              { name: "DevOps", color: "cyan" },
              { name: "React + Angular", color: "blue" },
            ].map((tech, i) => (
              <div key={i} className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border backdrop-blur-sm transition-transform hover:-translate-y-0.5 ${darkMode ? `bg-${tech.color}-500/10 border-${tech.color}-500/30` : 'bg-black/10 border-white/20'}`}>
                <span className={`w-1.5 h-1.5 rounded-full bg-${tech.color}-400 shrink-0`}></span>
                <span className="font-bold text-xs sm:text-sm whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>

          <p className={`text-xs sm:text-sm italic ${darkMode ? "text-gray-400" : "text-white/90"} mt-2 font-medium`}>
            ✨ Apasionado por construir sistemas robustos y de alto rendimiento
          </p>
        </div>
      </div>

      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
    </div>
  );
};
