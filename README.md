# 🚀 Portafolio Profesional

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-Bear-brown?style=for-the-badge)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

Un portafolio profesional interactivo, rápido y moderno desarrollado como una Single Page Application (SPA). Diseñado para destacar proyectos, habilidades y experiencia con una interfaz atractiva y soporte para modo oscuro (Dark Mode).

---

## ✨ Características Principales

- 🌗 **Modo Oscuro/Claro**: Implementado mediante estado global para una mejor experiencia de usuario.
- 📱 **Diseño Responsivo**: Adaptado para cualquier dispositivo utilizando las utilidades de Tailwind CSS.
- ⚡ **Alto Rendimiento**: Construido con Vite y el compilador SWC para tiempos de carga y desarrollo ultra rápidos.
- 🗺️ **Enrutamiento Dinámico**: Navegación fluida entre la página principal y la sección de proyectos utilizando React Router.
- 🧩 **Componentización Modular**: Interfaz dividida en múltiples secciones (`Seccion1` a `Seccion9`) para facilitar la mantenibilidad y escalabilidad del código.

## 🛠️ Tecnologías y Herramientas

- **Core**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Gestión de Estado**: [Zustand](https://github.com/pmndrs/zustand) (Utilizado para la gestión eficiente del Dark Mode)
- **Enrutamiento**: [React Router DOM v6](https://reactrouter.com/)
- **Iconos y UI**: [React Icons](https://react-icons.github.io/react-icons/) + [Headless UI](https://headlessui.com/)

## 📂 Estructura del Proyecto

```text
src/
├── assets/           # Recursos estáticos (imágenes, iconos SVG, videos)
├── components/       # Componentes y bloques de la página (Seccion1 a Seccion9)
├── context/          # Estado global de la aplicación (darkMode.js)
├── routes/           # Vistas/Páginas principales (ej. Proyectos.jsx)
├── AppPortafolio.jsx # Componente contenedor de la vista principal
├── AppRoutes.jsx     # Definición y configuración de rutas
├── main.jsx          # Punto de entrada principal de React
└── index.css         # Estilos globales y directivas de Tailwind CSS
```

## 🚀 Instalación y Ejecución Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Situarse en el directorio del proyecto**:
   ```bash
   cd portafolioProfecionalDev
   ```

2. **Instalar las dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Visualizar la aplicación**:
   Abre tu navegador y dirígete a la URL que indica la consola, comúnmente `http://localhost:5173`.

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Hot Module Replacement (HMR).
- `npm run build`: Empaqueta y optimiza la aplicación para ser desplegada en producción.
- `npm run preview`: Inicia un servidor local para probar la versión compilada de producción.
- `npm run lint`: Ejecuta ESLint para analizar el código en busca de errores o malas prácticas.

---
*Hecho con ❤️ para destacar en el mundo del desarrollo de software.*