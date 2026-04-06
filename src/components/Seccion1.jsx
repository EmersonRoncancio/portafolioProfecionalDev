import fotoPerfil from "../assets/fotoPerfil.jpeg";

export const Seccion1 = ({ darkMode }) => {
  return (
    <div
      className={`md:col-span-2 md:row-span-2 rounded-lg overflow-hidden flex relative max-md:h-[500px] ${darkMode ? "bg-gray-800" : "bg-cyan-500"} rounded-2xl md:rounded-[2rem]`}
    >
      <span
        className={`absolute top-0 right-0 m-3 text-xs md:text-base ${darkMode ? "text-gray-200" : "text-white"}`}
      >
        Emerson Davian Roncancio Avila
      </span>
      <div className="w-[40%] h-full rounded-r-[50%] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={fotoPerfil}
          alt="Foto de Perfil"
        />
      </div>
      <div className="w-[60%] h-full flex flex-col justify-end items-start px-4 gap-8 pb-12 pl-4">
        <h1
          className={`lg:text-2xl ${darkMode ? "text-gray-100" : "text-white"}`}
        >
          Hola Soy Emerson👋
        </h1>
        <p
          className={`text-wrap text-xs sm:text-base ${darkMode ? "text-gray-300" : "text-white"}`}
        >
          ¡Hola! Soy Emerson Roncancio, desarrollador
          <span className={`${darkMode ? "text-purple-400" : "text-purple-900"} font-extrabold`}> Backend</span> especializado en
          <span className={`${darkMode ? "text-red-400" : "text-red-600"} font-extrabold`}> NestJS</span>,
          <span className={`${darkMode ? "text-blue-400" : "text-blue-600"} font-extrabold`}> Docker</span> y
          <span className={`${darkMode ? "text-green-400" : "text-green-700"} font-extrabold`}> Microservicios</span>.
          Experto en arquitectura de software escalable,
          <span className={`${darkMode ? "text-orange-400" : "text-orange-600"} font-extrabold`}> Linux</span> y
          <span className={`${darkMode ? "text-cyan-400" : "text-cyan-600"} font-extrabold`}> DevOps</span>.
          Solidos conocimientos en
          <span className={`${darkMode ? "text-blue-400" : "text-blue-900"} font-extrabold`}> React</span> y
          <span className={`${darkMode ? "text-red-500" : "text-red-700"} font-extrabold`}> Angular</span>.
          Apasionado por construir sistemas robustos y de alto rendimiento.
        </p>
      </div>
    </div>
  );
};
