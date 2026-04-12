import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "greeting": "Hi, I'm",
      "hello_im": "Hi I'm",
      "role": "Frontend Developer",
      "darkMode": "Dark Mode",
      "lightMode": "Light Mode",
      "intoNight": "Into the night 🌙",
      "embraceSun": "Embrace the sun ☀️",
      "techStack": "Tech Stack",
      "language": "Language",
      "english": "English",
      "spanish": "Spanish",
      "dev_specialized": "Hello! I am a developer specialized in:",
      "passionate_building": "✨ Passionate about building robust and high-performance systems",
      "skills": "Skills",
      "critical_thinking": "Critical Thinking",
      "creativity": "Creativity",
      "adaptability": "Adaptability",
      "leadership": "Leadership",
      "teamwork": "Teamwork",
      "personal_projects": "Personal Projects",
      "age": "AGE",
      "years": "years",
      "github_desc": "GitHub profile, where I upload my personal projects",
      "currently_working": "Currently working",
      "available": "Available",
      "developing_solutions": "Developing robust and scalable solutions with modern technologies",
      "view_linkedin": "View company on LinkedIn",
      "full_time": "Full-time",
      "backend_developer": "Backend Developer"
    }
  },
  es: {
    translation: {
      "greeting": "Hola, soy",
      "hello_im": "Hola Soy",
      "role": "Desarrollador Frontend",
      "darkMode": "Modo Oscuro",
      "lightMode": "Modo Claro",
      "intoNight": "Hacia la noche 🌙",
      "embraceSun": "Abraza el sol ☀️",
      "techStack": "Stack Tecnológico",
      "language": "Idioma",
      "english": "Inglés",
      "spanish": "Español",
      "dev_specialized": "¡Hola! Soy desarrollador especializado en:",
      "passionate_building": "✨ Apasionado por construir sistemas robustos y de alto rendimiento",
      "skills": "Habilidades",
      "critical_thinking": "Pensamiento Crítico",
      "creativity": "Creatividad",
      "adaptability": "Adaptabilidad",
      "leadership": "Liderazgo",
      "teamwork": "Trabajo en Equipo",
      "personal_projects": "Proyectos Personales",
      "age": "EDAD",
      "years": "años",
      "github_desc": "Perfil de GitHub, donde subo mis proyectos personales",
      "currently_working": "Trabajando actualmente",
      "available": "Disponible",
      "developing_solutions": "Desarrollando soluciones robustas y escalables con tecnologías modernas",
      "view_linkedin": "Ver empresa en LinkedIn",
      "full_time": "Full-time",
      "backend_developer": "Desarrollador Backend"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;