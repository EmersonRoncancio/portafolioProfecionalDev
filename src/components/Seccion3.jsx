import { useTranslation } from "react-i18next";
import { FaNodeJs, FaDocker, FaLinux } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import {
  SiNestjs,
  SiAngular,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiGit,
  SiJest,
  SiGraphql,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const techStack = [
  { Icon: SiNestjs, name: "NestJS", hoverColor: "group-hover:text-[#E0234E]" },
  {
    Icon: BiLogoTypescript,
    name: "TypeScript",
    hoverColor: "group-hover:text-[#3178C6]",
  },
  { Icon: FaDocker, name: "Docker", hoverColor: "group-hover:text-[#2496ED]" },
  {
    Icon: SiKubernetes,
    name: "Kubernetes",
    hoverColor: "group-hover:text-[#326CE5]",
  },
  { Icon: SiRedis, name: "Redis", hoverColor: "group-hover:text-[#DC382D]" },
  {
    Icon: SiPostgresql,
    name: "PostgreSQL",
    hoverColor: "group-hover:text-[#4169E1]",
  },
  {
    Icon: SiMongodb,
    name: "MongoDB",
    hoverColor: "group-hover:text-[#47A248]",
  },
  {
    Icon: IoLogoReact,
    name: "React",
    hoverColor: "group-hover:text-[#61DAFB]",
  },
  {
    Icon: SiAngular,
    name: "Angular",
    hoverColor: "group-hover:text-[#DD0031]",
  },
  { Icon: FaLinux, name: "Linux", hoverColor: "group-hover:text-[#FCC624]" },
  {
    Icon: SiGraphql,
    name: "GraphQL",
    hoverColor: "group-hover:text-[#E10098]",
  },
  { Icon: SiGit, name: "Git", hoverColor: "group-hover:text-[#F05032]" },
  { Icon: SiJest, name: "Jest", hoverColor: "group-hover:text-[#99424F]" },
  { Icon: FaNodeJs, name: "Node.js", hoverColor: "group-hover:text-[#339933]" },
];

export const Seccion3 = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`md:row-span-2 rounded-2xl md:rounded-[2rem] p-6 sm:p-6 lg:p-8 flex flex-col justify-center items-center shadow-2xl transition-all duration-500 relative overflow-hidden max-md:min-h-[300px] max-md:py-8 ${
        darkMode
          ? "bg-gray-800 border border-gray-700 shadow-gray-900/50"
          : "bg-gradient-to-br from-red-500 to-orange-500 shadow-red-500/30"
      }`}
    >
      {/* Elemento decorativo */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl pointer-events-none -translate-y-10 translate-x-10"></div>

      <div className="relative z-10 text-center w-full mb-4 sm:mb-6 lg:mb-8 shrink-0 flex flex-col items-center">
        <h2
          className={`text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-white"}`}
        >
          {t("techStack")}
        </h2>
        <div
          className={`h-1 sm:h-1.5 w-12 sm:w-16 mx-auto rounded-full mt-2 ${darkMode ? "bg-red-500" : "bg-white/50"}`}
        ></div>
      </div>

      {/* Grid de Stack Tecnológico - Más espaciado, sin estirarse */}
      <div className="w-full flex-1 flex items-center justify-center">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-[90%]">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group relative flex justify-center items-center transition-all duration-300 hover:scale-125 cursor-pointer p-1"
            >
              <tech.Icon
                className={`text-[1.5rem] min-[350px]:text-[1.75rem] sm:text-3xl md:text-[2rem] lg:text-[2.5rem] xl:text-5xl transition-colors duration-300 ${
                  darkMode ? "text-gray-300" : "text-white/90"
                } ${tech.hoverColor}`}
              />
              {/* Tooltip */}
              <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[9px] sm:text-[11px] font-bold text-white bg-black/80 px-2 py-1 rounded pointer-events-none whitespace-nowrap z-20 shadow-lg">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
