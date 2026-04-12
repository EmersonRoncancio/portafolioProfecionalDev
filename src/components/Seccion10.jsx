import { useState } from "react";
import { FaBriefcase, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export const Seccion10 = ({ darkMode }) => {
  const [isWorking] = useState(true);
  const { t } = useTranslation();

  return (
    <div
      className={`group rounded-2xl md:rounded-[2rem] min-h-[300px] md:h-full md:max-h-[300px] shadow-2xl transition-all duration-500 relative overflow-hidden md:col-span-2 md:row-span-1 border-2 ${
        darkMode
          ? "bg-gray-900 border-green-500/10 hover:border-green-500/30 shadow-green-900/20"
          : "bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 border-white/30 shadow-green-500/30"
      }`}
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[60px] opacity-40 transition-transform duration-700 group-hover:scale-110 ${darkMode ? "bg-green-600" : "bg-white"}`}
        ></div>
        <div
          className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-[60px] opacity-30 transition-transform duration-700 group-hover:scale-110 ${darkMode ? "bg-teal-600" : "bg-yellow-200"}`}
        ></div>
      </div>

      <div className="relative z-10 w-full h-full p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
        {/* Left/Top Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 w-full pt-2 md:pt-0">
          {/* Badges Row */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mb-4">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md shadow-sm border ${
                isWorking
                  ? darkMode
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : "bg-white/20 text-white border-white/40"
                  : darkMode
                    ? "bg-gray-600/20 text-gray-400 border-gray-500/30"
                    : "bg-gray-500/20 text-gray-200 border-gray-400/40"
              }`}
            >
              <span className={`relative flex h-2.5 w-2.5`}>
                {isWorking && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                )}
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isWorking ? "bg-green-500" : "bg-gray-400"}`}
                ></span>
              </span>
              {isWorking ? t("currently_working") : t("available")}
            </div>

            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border ${
                darkMode
                  ? "bg-white/5 text-gray-300 border-white/10"
                  : "bg-black/10 text-white border-white/20"
              }`}
            >
              <BsStars
                className={darkMode ? "text-yellow-400" : "text-yellow-300"}
              />
              {t("full_time")}
            </div>
          </div>

          {/* Company & Role */}
          <h2
            className={`text-3xl md:text-4xl font-black mb-1 tracking-tight ${
              darkMode
                ? "text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500"
                : "text-white"
            } drop-shadow-sm`}
          >
            Mancii
          </h2>

          <h3
            className={`text-sm md:text-base font-bold mb-3 ${darkMode ? "text-gray-400" : "text-green-50"}`}
          >
            {t("backend_developer")}
          </h3>

          <p
            className={`text-xs sm:text-sm max-w-[280px] md:max-w-[350px] leading-relaxed line-clamp-2 ${darkMode ? "text-gray-400" : "text-green-100"}`}
          >
            {t("developing_solutions")}
          </p>
        </div>

        {/* Right/Bottom Content - Interactive Elements */}
        <div className="flex flex-row md:flex-col items-center justify-center gap-4 shrink-0 mt-4 md:mt-0 w-full md:w-auto pb-2 md:pb-0">
          {/* Glowing Icon */}
          <div
            className={`relative flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl shadow-xl backdrop-blur-xl border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${
              darkMode
                ? "bg-gray-800/80 border-green-500/30 text-green-400 shadow-green-900/50"
                : "bg-white/20 border-white/40 text-white shadow-black/10"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl md:rounded-3xl pointer-events-none"></div>
            <FaBriefcase className="text-2xl md:text-4xl drop-shadow-md z-10" />
          </div>

          {/* Action Button */}
          <a
            href="https://www.linkedin.com/company/mancii/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn relative overflow-hidden flex-1 md:flex-none justify-center inline-flex items-center gap-2 px-5 py-3 md:py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg border ${
              darkMode
                ? "bg-blue-600/20 text-blue-400 border-blue-500/30 hover:bg-blue-600/30 hover:border-blue-400/50 hover:shadow-blue-900/50"
                : "bg-white/20 text-white border-white/40 hover:bg-white/30 backdrop-blur-md"
            }`}
          >
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 ease-out group-hover/btn:w-full"></div>
            <FaLinkedin className="text-lg relative z-10" />
            <span className="relative z-10">{t("view_linkedin")}</span>
            <FaExternalLinkAlt className="text-[10px] relative z-10 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};
