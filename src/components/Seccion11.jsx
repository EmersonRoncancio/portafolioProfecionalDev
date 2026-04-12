import { useTranslation } from "react-i18next";
import { useGlobalState } from "../context/darkMode";

export const Seccion11 = () => {
  const { darkMode } = useGlobalState();
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const nextLang = currentLanguage === "es" ? "en" : "es";
    i18n.changeLanguage(nextLang);
  };

  return (
    <div
      className={`relative flex flex-col justify-center items-center max-md:min-h-[300px] h-full min-h-[200px] md:min-h-[250px] rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-700 shadow-2xl group ${
        darkMode
          ? "bg-gradient-to-br from-zinc-900 via-gray-900 to-black shadow-zinc-900/40 border border-gray-800"
          : "bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 shadow-emerald-500/40 border border-emerald-300"
      }`}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
        <div
          className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[40px] ${darkMode ? "bg-purple-600/30" : "bg-white/40"}`}
        ></div>
        <div
          className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-[50px] ${darkMode ? "bg-blue-600/30" : "bg-teal-200/50"}`}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 w-full px-4">
        {/* Title */}
        <div className="text-center">
          <h3
            className={`text-xl sm:text-2xl font-extrabold tracking-tight transition-colors duration-500 drop-shadow-sm ${
              darkMode ? "text-gray-100" : "text-white"
            }`}
          >
            {t("language")}
          </h3>
          <div
            className={`h-1.5 w-10 mx-auto rounded-full mt-2 transition-all duration-500 group-hover:w-16 ${
              darkMode ? "bg-gray-700" : "bg-white/60"
            }`}
          ></div>
        </div>

        {/* Custom Pill Toggle */}
        <button
          onClick={toggleLanguage}
          className={`relative flex items-center w-full max-w-[200px] h-[56px] rounded-full p-1 cursor-pointer transition-all duration-500 shadow-inner hover:scale-[1.02] active:scale-[0.98] ${
            darkMode
              ? "bg-black/60 border border-gray-700/50"
              : "bg-teal-800/20 border border-white/40 backdrop-blur-sm"
          }`}
        >
          {/* Active indicator sliding pill */}
          <div
            className={`absolute h-[46px] w-[calc(50%-4px)] rounded-full transition-transform duration-500 ease-out shadow-lg ${
              currentLanguage === "en"
                ? "translate-x-[calc(100%+4px)]"
                : "translate-x-0"
            } ${
              darkMode
                ? "bg-gradient-to-r from-gray-700 to-gray-600"
                : "bg-white"
            }`}
          ></div>

          {/* ES Option */}
          <div className="relative z-10 flex-1 flex justify-center items-center h-full">
            <span
              className={`font-bold text-sm sm:text-base transition-colors duration-500 ${
                currentLanguage === "es"
                  ? darkMode
                    ? "text-white"
                    : "text-teal-600"
                  : darkMode
                    ? "text-gray-500"
                    : "text-white/80"
              }`}
            >
              ES
            </span>
          </div>

          {/* EN Option */}
          <div className="relative z-10 flex-1 flex justify-center items-center h-full">
            <span
              className={`font-bold text-sm sm:text-base transition-colors duration-500 ${
                currentLanguage === "en"
                  ? darkMode
                    ? "text-white"
                    : "text-teal-600"
                  : darkMode
                    ? "text-gray-500"
                    : "text-white/80"
              }`}
            >
              EN
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
