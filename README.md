# SchemaFlow - Editor de Diagramas de Base de Datos

**SchemaFlow** es una herramienta web de modelado de bases de datos con una interfaz gráfica intuitiva, diseñada para ser gratuita, moderna y fácil de usar. Permite a los desarrolladores diseñar esquemas de bases de datos de manera visual, generar el código SQL correspondiente y exportar sus diagramas en varios formatos.

## ✨ Características Principales (Fase 1)

- **Editor Visual Interactivo**: Lienzo con funcionalidades de zoom y paneo para una navegación fluida.
- **Creación de Entidades (Tablas)**: Arrastra y suelta elementos desde una paleta para añadir nuevas tablas a tu diagrama.
- **Panel de Propiedades Dinámico**: Selecciona una tabla y edita su nombre en tiempo real.
- **Autoguardado Local**: Tu trabajo se guarda automáticamente en el `localStorage` de tu navegador. ¡No pierdas ni un cambio!
- **Interfaz Moderna**: Estilo limpio y minimalista, construido con React, Vite y TailwindCSS.

## 🚀 Instalación y Ejecución

Sigue estos pasos para poner en marcha el proyecto en tu entorno de desarrollo local.

### 1. Prerrequisitos

Antes de empezar, asegúrate de tener instalado lo siguiente:
- **Node.js**: Versión 18 o superior. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- **npm**: Generalmente se instala junto con Node.js.

### 2. Instalación

Para instalar el proyecto y sus dependencias, sigue estos comandos en tu terminal:

```bash
# 1. Clona el repositorio a tu máquina local
git clone https://github.com/tu-usuario/schemaflow.git

# 2. Navega al directorio del proyecto
cd schemaflow

# 3. Instala todas las dependencias necesarias
# Este comando leerá el archivo package.json y descargará todo lo necesario.
npm install
```

### 3. Ejecución

Una vez que la instalación se haya completado, puedes iniciar la aplicación:

```bash
# Inicia el servidor de desarrollo con Vite
npm run dev
```

Después de ejecutar el comando, la terminal te mostrará un mensaje similar a este:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Abre tu navegador web y visita la URL que aparece junto a `Local` (normalmente `http://localhost:5173`). ¡Y listo! Ya deberías ver la aplicación funcionando.

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
