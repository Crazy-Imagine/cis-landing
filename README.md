# Crazy Imagine Software: Landing Page

Este proyecto es la Landing Page de Crazy Imagine Software, construido con Astro, un marco de trabajo moderno para el desarrollo web. Aquí te explicamos cómo configurar tu entorno de desarrollo y cómo estructurar tu proyecto.

## Configuración inicial

Sigue estos pasos para configurar tu entorno de desarrollo:

1. **Clonar el proyecto**

   Primero, debes clonar el repositorio del proyecto. Puedes hacerlo utilizando el siguiente comando en tu terminal:

    ```sh
    git clone git@github.com:cis-deploys/cis-astro.git
    ```

2. **Instalar las dependencias**

   Una vez que hayas clonado el repositorio, navega hasta el directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

   ```sh
   cd cis-astro
   pnpm install
   ```

3. **Configurar las variables de entorno**

   Este proyecto utiliza variables de entorno para ciertas configuraciones. Hay un archivo `.env.template` que puedes usar como base. Copia este archivo y renómbralo a `.env`:

   ```sh
   cp .env.template .env
   ```

   Luego, abre el archivo `.env` y configura las variables de entorno según sea necesario.

4. **Ejecutar el script de desarrollo**

   Finalmente, puedes iniciar el servidor de desarrollo local ejecutando el siguiente comando:

   ```sh
   pnpm run dev
   ```

   Ahora deberías poder ver la aplicación en `localhost:4321`.
## Estructura del proyecto

La estructura de directorios de tu proyecto Astro es la siguiente:

```text
/
├── .env.template
├── .eslintrc.js
├── .lintstagedrc
├── .node-version
├── .nvmrc
├── .prettierrc.cjs
├── astro.config.mjs
├── package.json
├── postcss.config.mjs
├── public/                # Aquí se colocan los activos estáticos, como imágenes
│   └── favicon.svg
├── src/                   # Aquí se colocan todos los archivos de código fuente
│   ├── assets/            # Aquí se guardan imágenes consumidas por Astro Image
│   ├── components/        # Aquí se colocan los componentes de Astro
│   │   └── react/         # Aquí se colocan los componentes de React
│   ├── consts/            # Aquí se guardan constantes que manejan información específica
│   ├── i18n/              # Aquí se guarda la lógica de internacionalización
│   ├── icons/             # Aquí se guardan íconos en svg como componentes de Astro
│   ├── layouts/           # Aquí se colocan los layouts
│   ├── lib/               # Aquí se guardan integraciones externas, como conexiones por http a un strapi
│   ├── pages/             # Aquí se colocan las páginas de la aplicación
│   ├── sections/          # Aquí se guardan componentes de Astro que se renderizan como secciones grandes
│   ├── store/             # Aquí se guardan manejadores de estado globales
│   ├── types/             # Aquí se guardan los tipados de TS
│   └── utils/             # Aquí se guarda información útil para la app
└── package.json           # Aquí se definen las dependencias y scripts del proyecto
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

Estos archivos adicionales son utilizados para configurar varias herramientas y aspectos del proyecto:

- `.env.template`: Plantilla para las variables de entorno requeridas por la aplicación.
- `.eslintrc.js`: Configuración de ESLint, una herramienta para identificar y reportar patrones encontrados en código ECMAScript/JavaScript.
- `.lintstagedrc`: Configuración de lint-staged, una herramienta que ejecuta linters en archivos git staged.
- `.node-version`: Especifica la versión de Node.js que se debe usar en el proyecto.
- `.nvmrc`: Especifica la versión de Node.js que se debe usar en el proyecto, utilizado por NVM (Node Version Manager).
- `.prettierrc.cjs`: Configuración de Prettier, una herramienta para formatear automáticamente el código.
- `astro.config.mjs`: Configuración de Astro, el marco de trabajo utilizado para construir la aplicación.
- `postcss.config.mjs`: Configuración de PostCSS, una herramienta para transformar CSS con plugins de JavaScript.
- `tailwind.config.mjs`: Configuración de Tailwind CSS, un framework de CSS de utilidad primero.
- `tsconfig.json`: Configuración de TypeScript, un superconjunto de JavaScript que añade tipado estático y otros features.

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Instala las dependencias del proyecto            |
| `pnpm run dev`            | Inicia el servidor de desarrollo local en `localhost:4321` |
| `pnpm run build`          | Construye el sitio para producción en `./dist/`  |
| `pnpm run preview`        | Previsualiza la construcción localmente, antes de desplegar |
| `pnpm run astro ...`      | Ejecuta comandos de la CLI de Astro como `astro add`, `astro check` |
| `pnpm run astro -- --help` | Obtiene ayuda sobre cómo usar la CLI de Astro    |
| `pnpm run lint`           | Ejecuta el linter en los archivos del proyecto   |
| `pnpm run lint:fix`       | Ejecuta el linter y corrige los errores que pueda |
| `pnpm run format`         | Formatea los archivos del proyecto con Prettier  |
| `pnpm run format:check`   | Verifica si los archivos del proyecto están bien formateados |

## Configuración adicional

1. **Manejador de paquetes**: Este proyecto utiliza `pnpm` como su gestor de paquetes. Si aún no lo tienes instalado, puedes hacerlo con el siguiente comando:

   ```sh
   npm install -g pnpm
   ```

2. **Versión de Node.js**: Se recomienda usar la versión de Node.js especificada en los archivos `.node-version` y `.nvmrc`. Si estás utilizando `nvm` (Node Version Manager), puedes asegurarte de usar la versión correcta de Node.js con el siguiente comando:

   ```sh
   nvm use
   ```

3. **Tailwind CSS**: Para los estilos, se utiliza Tailwind CSS. El archivo de configuración de Tailwind (`tailwind.config.js`) se encuentra en la raíz del proyecto.

4. **Variables de entorno**: Existe un archivo `.env.template` con una variable de entorno requerida en la app. Debes copiar este archivo y renombrarlo a `.env` para el desarrollo. Luego, abre el archivo `.env` y configura las variables de entorno según sea necesario.

5. **Strapi**: Este proyecto se debe utilizar en conjunto con una instancia de Strapi en ejecución. Asegúrate de tener Strapi configurado y en ejecución antes de iniciar este proyecto.
