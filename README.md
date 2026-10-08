# 🎬 UNIR Cinema

> Proyecto de ejemplo de aplicación web moderna desarrollada con React, demostrando las mejores prácticas en orientación a componentes, hooks personalizados y enrutamiento.

## 📋 Descripción

UNIR Cinema es una aplicación web interactiva que simula un sistema de reserva de entradas de cine. Este proyecto ha sido desarrollado como ejemplo educativo para demostrar el uso de tecnologías modernas de React y arquitectura basada en componentes.

La aplicación permite a los usuarios:
- 🎥 Explorar cartelera de películas en múltiples ciudades (Barcelona, Madrid, Sevilla, Valencia)
- 🎫 Seleccionar sesiones y reservar butacas
- 🔐 Sistema de autenticación con rutas protegidas
- 🌓 Modo oscuro/claro
- 📱 Diseño responsivo

## 🚀 Tecnologías Utilizadas

- **React 19.1** - Biblioteca principal para la construcción de la interfaz
- **React Router DOM 7.9** - Enrutamiento y navegación entre vistas
- **Vite 7.1** - Build tool y servidor de desarrollo ultrarrápido
- **Context API** - Gestión de estado global
- **Custom Hooks** - Lógica reutilizable

## 🏗️ Arquitectura del Proyecto

### Componentes Principales

```
src/
├── components/          # Componentes reutilizables
│   ├── CineSelector.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Pelicula.jsx
│   ├── PrivateRoute.jsx
│   ├── SeatSelection.jsx
│   └── SessionLanguageSelector.jsx
├── views/              # Vistas/Páginas principales
│   ├── HomePage.jsx
│   ├── AboutUs.jsx
│   ├── CinemaDetail.jsx
│   ├── MovieDetails.jsx
│   └── Login.jsx
├── context/            # Contextos para estado global
│   ├── AuthContext.jsx
│   └── GlobalContext.jsx
├── hooks/              # Custom Hooks
│   ├── useLogin.js
│   └── useMovies.js
└── data/               # Datos de ejemplo
    ├── moviesDataBarcelona.js
    ├── moviesDataMadrid.js
    ├── moviesDataSevilla.js
    ├── moviesDataValencia.js
    └── usersData.js
```

## 🎯 Conceptos Demostrados

### 1️⃣ Orientación a Componentes
- Componentes funcionales reutilizables
- Separación clara de responsabilidades
- Composición de componentes

### 2️⃣ Hooks de React
- **useState** - Gestión de estado local
- **useEffect** - Efectos secundarios y ciclo de vida
- **useContext** - Consumo de contextos globales
- **useNavigate** - Navegación programática
- **Custom Hooks** - `useLogin` y `useMovies` para lógica específica

### 3️⃣ React Router
- Enrutamiento declarativo
- Rutas protegidas con `PrivateRoute`
- Navegación dinámica entre vistas
- Parámetros de ruta para detalles de películas

### 4️⃣ Context API
- **AuthContext** - Gestión de autenticación de usuarios
- **GlobalContext** - Estado global de la aplicación (modo oscuro, ciudad seleccionada)

## 🛠️ Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Navegar al directorio
cd front-end-cinema

# Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 👤 Sistema de Usuarios

La aplicación incluye usuarios de ejemplo para testing:

- **Admin**: `admin@unir.net` / `admin123`
- **Usuario**: `user@unir.net` / `user123`

## 🎨 Características Destacadas

- ✅ **Responsive Design** - Adaptable a diferentes dispositivos
- ✅ **Modo Oscuro** - Conmutador de tema claro/oscuro
- ✅ **Autenticación** - Sistema completo de login/logout
- ✅ **Rutas Protegidas** - Acceso controlado a áreas privadas
- ✅ **Selección de Butacas** - Interfaz interactiva de reserva
- ✅ **Multi-ciudad** - Cartelera por ubicación geográfica

## 📚 Propósito Educativo

Este proyecto es un ejemplo práctico perfecto para aprender:

1. **Estructura de proyecto React escalable**
2. **Patrones de diseño en React**
3. **Gestión de estado con Context API**
4. **Implementación de autenticación básica**
5. **Routing y navegación en SPA**
6. **Custom Hooks para lógica reutilizable**
7. **Buenas prácticas de componentes**

## 📝 Licencia

Este es un proyecto educativo de ejemplo desarrollado para fines de aprendizaje.

---

**Desarrollado con ❤️ como proyecto educativo de React**
