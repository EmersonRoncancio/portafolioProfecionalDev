import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useGlobalState } from "../context/darkMode";

export const Seccion2 = () => {
  const { darkMode, setDarkMode } = useGlobalState();

  const handleChange = (value) => {
    setDarkMode(value);
  };

  return (
    <div className="bg-cyan-500 flex justify-center items-center max-md:h-[300px] rounded-2xl md:rounded-[2rem] ">
      <div className="py-16">
        <Switch
          checked={darkMode}
          onChange={handleChange}
          className={`${darkMode ? "bg-teal-900" : "bg-teal-700"}
                relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${darkMode ? "translate-x-9" : "translate-x-0"}
                    pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </div>
  );
};
