import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsLightningChargeFill, BsStars } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

export const Seccion1 = ({ darkMode }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className={`group md:col-span-2 md:row-span-2 rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row relative h-full shadow-2xl transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-2 ${
        darkMode
          ? "bg-gray-900 border-purple-500/10 hover:border-purple-500/30"
          : "bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 border-white/30 shadow-blue-500/40"
      }`}
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[80px] opacity-30 transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-12 ${darkMode ? "bg-purple-600" : "bg-white"}`}></div>
        <div className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-[80px] opacity-20 transition-transform duration-1000 group-hover:scale-125 group-hover:-rotate-12 ${darkMode ? "bg-blue-600" : "bg-cyan-300"}`}></div>
        {/* Subtle noise/grain texture for ultra-premium feel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
      </div>

      {/* Top floating decorative badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 hidden min-[450px]:block">
        <div className={`backdrop-blur-md border rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-2 transition-transform duration-500 group-hover:-translate-y-1 ${
          darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white/20 border-white/30"
        }`}>
          <FaCode className={darkMode ? "text-purple-400" : "text-white"} />
          <span className={`text-xs font-bold tracking-wide ${darkMode ? "text-gray-200" : "text-white"} drop-shadow-md`}>
            Code & Coffee
          </span>
        </div>
      </div>

      {/* Left Column - Profile Picture */}
      <div className="w-full md:w-[45%] h-[200px] sm:h-[250px] md:h-full relative z-10 flex items-center justify-center p-4 sm:p-6 md:p-8 shrink-0">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-full md:h-full md:max-h-[350px] flex items-center justify-center">
          
          {/* Outer Glowing Rings (Spinning & Expanding) */}
          <div className={`absolute inset-0 rounded-[2rem] sm:rounded-full border border-dashed transition-all duration-1000 animate-[spin_20s_linear_infinite] scale-[1.15] opacity-50 group-hover:scale-[1.25] ${
            darkMode ? "border-purple-500/50" : "border-white/50"
          }`}></div>
          <div className={`absolute inset-0 rounded-[2rem] sm:rounded-full border transition-all duration-700 delay-100 scale-[1.3] opacity-20 group-hover:scale-[1.4] ${
            darkMode ? "border-blue-400" : "border-white"
          }`}></div>

          {/* Glowing Aura Behind Image */}
          <div className={`absolute inset-0 rounded-[2rem] sm:rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
            darkMode ? "bg-purple-500/30 opacity-50" : "bg-white/40 opacity-70"
          }`}></div>

          {/* Main Image Container */}
          <div className={`absolute inset-0 rounded-[2rem] sm:rounded-full overflow-hidden border-4 shadow-2xl backdrop-blur-xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3 ${
            darkMode ? "border-gray-800 bg-gray-900/50" : "border-white/40 bg-white/20"
          }`}>
            {/* Diagonal Shine on Image hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:animate-[shimmer_2s_infinite] z-20 pointer-events-none"></div>
            <img
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 relative z-10"
              src="https://res.cloudinary.com/daezwxzg1/image/upload/v1775449718/WhatsApp_Image_2026-04-05_at_11.26.59_PM_fthklw.jpg"
              alt="Foto de Perfil Emerson"
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
            />
          </div>

          {/* Floating Element - Stars */}
          <div className={`absolute -bottom-2 -right-2 md:bottom-2 md:right-2 p-2.5 rounded-xl shadow-xl backdrop-blur-md animate-bounce z-30 border transition-colors duration-300 ${
            darkMode ? "bg-black/40 border-purple-500/30 group-hover:bg-purple-500/20" : "bg-white/20 border-white/40 group-hover:bg-white/40"
          }`}>
            <BsStars className={`text-lg md:text-xl ${darkMode ? "text-yellow-400" : "text-yellow-300"}`} />
          </div>
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="w-full md:w-[55%] flex flex-col justify-center items-center md:items-start px-4 sm:px-6 md:px-8 pb-6 md:py-8 relative z-10 text-center md:text-left flex-1">
        
        {/* Role Badge */}
        <div className="mb-3 sm:mb-5">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 sm:py-2 rounded-full text-xs md:text-sm font-black backdrop-blur-md shadow-lg border transition-transform duration-300 hover:scale-105 cursor-default ${
            darkMode ? "bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20" : "bg-white/20 text-white border-white/40 hover:bg-white/30"
          }`}>
            <BsLightningChargeFill className={`text-sm ${darkMode ? "text-purple-400" : "text-yellow-300"} animate-pulse`} />
            {t('backend_developer')}
          </div>
        </div>

        {/* Name Heading */}
        <h1 className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-4 tracking-tight drop-shadow-md ${darkMode ? "text-white" : "text-white"}`}>
          {t('hello_im')}{" "}
          <span className={`inline-block animate-text-gradient bg-clip-text text-transparent bg-gradient-to-r transition-all duration-500 hover:scale-105 cursor-default ${
            darkMode ? "from-purple-400 via-pink-400 to-blue-400" : "from-yellow-200 via-white to-yellow-300"
          }`}>
            Emerson
          </span>
          <span className="inline-block animate-waving-hand origin-bottom-right ml-1 sm:ml-2">👋</span>
        </h1>

        {/* Description Container */}
        <div className={`space-y-4 sm:space-y-5 w-full leading-relaxed flex flex-col items-center md:items-start`}>
          <p className={`font-semibold text-sm md:text-base max-w-[90%] md:max-w-none ${darkMode ? "text-gray-300" : "text-blue-50"}`}>
            {t('dev_specialized')}
          </p>

          {/* Interactive Tech Grid */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-2.5 w-full">
            {[
              { name: "NestJS", bg: darkMode ? "bg-red-500/10" : "bg-white/10", border: darkMode ? "border-red-500/30" : "border-white/20", dot: "bg-red-400" },
              { name: "Docker", bg: darkMode ? "bg-blue-500/10" : "bg-white/10", border: darkMode ? "border-blue-500/30" : "border-white/20", dot: "bg-blue-400" },
              { name: "Microservicios", bg: darkMode ? "bg-green-500/10" : "bg-white/10", border: darkMode ? "border-green-500/30" : "border-white/20", dot: "bg-green-400" },
              { name: "Linux", bg: darkMode ? "bg-orange-500/10" : "bg-white/10", border: darkMode ? "border-orange-500/30" : "border-white/20", dot: "bg-orange-400" },
              { name: "DevOps", bg: darkMode ? "bg-cyan-500/10" : "bg-white/10", border: darkMode ? "border-cyan-500/30" : "border-white/20", dot: "bg-cyan-400" },
              { name: "React/Angular", bg: darkMode ? "bg-purple-500/10" : "bg-white/10", border: darkMode ? "border-purple-500/30" : "border-white/20", dot: "bg-purple-400" },
            ].map((tech, i) => (
              <div key={i} className={`group/tech flex items-center gap-2 px-3 py-1.5 rounded-xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer shadow-lg ${tech.bg} ${tech.border} ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-white/20 hover:border-white/50"
              }`}>
                <span className={`w-2 h-2 rounded-full ${tech.dot} group-hover/tech:animate-ping shadow-[0_0_8px_currentColor]`}></span>
                <span className={`font-bold text-[11px] sm:text-xs md:text-sm whitespace-nowrap transition-colors ${
                  darkMode ? "text-gray-300 group-hover/tech:text-white" : "text-white/90 group-hover/tech:text-white"
                }`}>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Bottom quote */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border backdrop-blur-sm shadow-inner transition-colors duration-300 ${
            darkMode ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-800" : "bg-black/10 border-white/20 hover:bg-black/20"
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${darkMode ? "bg-pink-400" : "bg-yellow-300"} animate-pulse`}></span>
            <p className={`text-xs sm:text-sm italic font-medium ${darkMode ? "text-gray-300" : "text-blue-50"}`}>
              {t('passionate_building')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
