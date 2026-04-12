import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const Seccion7 = ({ darkMode }) => {
  const { t } = useTranslation();
  const calcularEdad = useMemo(() => {
    const fechaNacimiento = new Date(2004, 7, 8); // 8 de agosto de 2004 (meses en JS son 0-11)
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth();
    const dia = hoy.getDate();

    // Si aún no ha pasado el cumpleaños este año, restar 1
    if (mes < 7 || (mes === 7 && dia < 8)) {
      edad--;
    }

    return edad;
  }, []);

  return (
    <div
      className={`rounded-lg flex justify-center items-center p-8 max-md:h-[300px] ${darkMode ? "bg-gray-700" : "bg-yellow-300"} rounded-2xl md:rounded-[2rem]`}
    >
      <div className="w-[50%] h-[50%] flex flex-col justify-center items-center p-2">
        <p
          className={`text-xs m-0 font-semibold ${darkMode ? "text-gray-200" : "text-white"}`}
        >
          {t('age')}
        </p>
        <h2
          className={`text-[50px] m-0 font-extrabold ${darkMode ? "text-gray-100" : "text-slate-100"}`}
        >
          {calcularEdad}
        </h2>
        <h4
          className={`text-lg m-0 font-medium ${darkMode ? "text-gray-200" : "text-white"}`}
        >
          {t('years')}
        </h4>
      </div>
    </div>
  );
};
