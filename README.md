# SchemaFlow - Editor de Diagramas de Base de Datos

**SchemaFlow** es una herramienta web de modelado de bases de datos con una interfaz gráfica intuitiva, diseñada para ser gratuita, moderna y fácil de usar. Permite a los desarrolladores diseñar esquemas de bases de datos de manera visual, generar el código SQL correspondiente y exportar sus diagramas en varios formatos.

## ✨ Características Principales (Fase 1)

- **Editor Visual Interactivo**: Lienzo con funcionalidades de zoom y paneo para una navegación fluida.
- **Creación de Entidades (Tablas)**: Arrastra y suelta elementos desde una paleta para añadir nuevas tablas a tu diagrama.
- **Panel de Propiedades Dinámico**: Selecciona una tabla y edita su nombre en tiempo real.
- **Autoguardado Local**: Tu trabajo se guarda automáticamente en el `localStorage` de tu navegador. ¡No pierdas ni un cambio!
- **Interfaz Moderna**: Estilo limpio y minimalista, construido con React, Vite y TailwindCSS.

## 🚀 Cómo Empezar

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) y npm.

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/schemaflow.git
    cd schemaflow
    ```

2.  **Instala las dependencias del proyecto:**
    ```bash
    npm install
    ```
    Este comando instalará todas las librerías necesarias, como React, ReactFlow, Zustand y TailwindCSS.

### Ejecución

1.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Este comando levantará la aplicación en modo de desarrollo con Vite.

2.  **Abre la aplicación en tu navegador:**
    Abre tu navegador y visita [http://localhost:5173](http://localhost:5173) (o el puerto que se indique en la terminal).

## 🛠️ Uso Básico

- **Añadir una tabla**: Arrastra el componente "Nueva Tabla" desde la paleta de la izquierda y suéltalo en el lienzo.
- **Mover una tabla**: Haz clic en una tabla y arrástrala a la posición que desees.
- **Editar el nombre de una tabla**: Haz clic en una tabla para seleccionarla. El panel de propiedades aparecerá a la derecha, donde podrás editar su nombre.
- **Navegar por el lienzo**:
    - **Paneo**: Mantén pulsado el botón central del ratón (rueda) o la barra espaciadora y mueve el cursor.
    - **Zoom**: Usa la rueda del ratón.

## 📦 Stack Tecnológico

- **Frontend**: [React](https://react.dev/) con [Vite](https://vitejs.dev/)
- **Gestión de Estado**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Diagramas**: [ReactFlow](https://reactflow.dev/)
- **Estilos**: [TailwindCSS](https://tailwindcss.com/)

---
*Este proyecto está en desarrollo activo. ¡Nuevas funcionalidades próximamente!*
