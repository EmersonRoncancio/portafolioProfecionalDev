import { useState } from "react";

export const Seccion1 = ({ darkMode }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`md:col-span-2 md:row-span-2 rounded-lg overflow-hidden flex relative max-md:h-[500px] ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"
          : "bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600"
      } rounded-2xl md:rounded-[2rem] shadow-2xl transition-all duration-500 hover:shadow-3xl`}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 right-10 w-20 h-20 rounded-full blur-2xl opacity-30 ${darkMode ? "bg-purple-500" : "bg-white"} animate-pulse`}></div>
        <div className={`absolute bottom-10 left-10 w-16 h-16 rounded-full blur-xl opacity-20 ${darkMode ? "bg-blue-500" : "bg-yellow-300"} animate-pulse`}></div>
        <div className={`absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-3xl opacity-10 ${darkMode ? "bg-green-500" : "bg-pink-300"}`}></div>
      </div>

      {/* Nombre con estilo mejorado */}
      <div className={`absolute top-4 right-4 sm:top-6 sm:right-6 z-20`}>
        <div className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg`}>
          <span className={`text-xs sm:text-sm font-medium ${darkMode ? "text-gray-200" : "text-white"} tracking-wide`}>
            Emerson Davian Roncancio Avila
          </span>
        </div>
      </div>

      {/* Contenedor de la foto con diseño mejorado */}
      <div className="w-[40%] h-full relative z-10 flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          {/* Anillo decorativo animado */}
          <div className={`absolute inset-0 rounded-full ${darkMode ? "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" : "bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500"} opacity-20 blur-xl animate-pulse`}></div>

          {/* Borde decorativo */}
          <div className={`absolute inset-0 rounded-full border-4 ${darkMode ? "border-purple-500/30" : "border-white/30"} scale-110`}></div>

          {/* Contenedor de la imagen con forma única */}
          <div className="absolute inset-0 rounded-r-[50%] overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-black/20">
            <img
              className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:rotate-2"
              src="https://res.cloudinary.com/daezwxzg1/image/upload/v1775449718/WhatsApp_Image_2026-04-05_at_11.26.59_PM_fthklw.jpg"
              alt="Foto de Perfil"
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
            />
          </div>

          {/* Badge flotante */}
          <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-2 shadow-lg animate-bounce">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Contenedor del texto con mejor diseño */}
      <div className="w-[60%] h-full flex flex-col justify-center items-start px-4 sm:px-6 py-8 relative z-10">
        {/* Badge de rol */}
        <div className="mb-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${darkMode ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" : "bg-white/20 text-white border border-white/30"} backdrop-blur-sm`}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Backend Developer
          </div>
        </div>

        <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-white"} drop-shadow-lg`}>
          Hola Soy <span className="inline-block animate-wave">Emerson</span>👋
        </h1>

        <div className={`space-y-3 sm:space-y-4 ${darkMode ? "text-gray-300" : "text-white/95"} text-xs sm:text-sm leading-relaxed`}>
          <p className="font-medium">
            ¡Hola! Soy Emerson Roncancio, desarrollador
            <span className={`font-bold mx-1 px-2 py-0.5 rounded ${darkMode ? "bg-purple-500/30 text-purple-300" : "bg-purple-600/30 text-purple-100"}`}>Backend</span>
            especializado en:
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className={`flex items-center gap-2 p-2 rounded-lg ${darkMode ? "bg-red-500/20 border border-red-500/30" : "bg-white/10 border border-white/20"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
              <span className="font-semibold">NestJS</span>
            </div>
            <div className={`flex items-center gap-2 p-2 rounded-lg ${darkMode ? "bg-blue-500/20 border border-blue-500/30" : "bg-white/10 border border-white/20"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span className="font-semibold">Docker</span>
            </div>
            <div className={`flex items-center gap-2 p-2 rounded-lg ${darkMode ? "bg-green-500/20 border border-green-500/30" : "bg-white/10 border border-white/20"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              <span className="font-semibold">Microservicios</span>
            </div>
            <div className={`flex items-center gap-2 p-2 rounded-lg ${darkMode ? "bg-orange-500/20 border border-orange-500/30" : "bg-white/10 border border-white/20"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
              <span className="font-semibold">Linux</span>
            </div>
            <div className={`flex items-center gap-2 p-2 rounded-lg ${darkMode ? "bg-cyan-500/20 border border-cyan-500/30" : "bg-white/10 border border-white/20"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="font-semibold">DevOps</span>
            </div>
            <div className={`flex items-center gap-2 p-2 rounded-lg ${darkMode ? "bg-blue-500/20 border border-blue-500/30" : "bg-white/10 border border-white/20"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span className="font-semibold">React + Angular</span>
            </div>
          </div>

          <p className={`text-xs italic ${darkMode ? "text-gray-400" : "text-white/80"} mt-4`}>
            ✨ Apasionado por construir sistemas robustos y de alto rendimiento
          </p>
        </div>
      </div>

      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
    </div>
  );
};
