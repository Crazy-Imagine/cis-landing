# Crazy Imagine Software: Landing Page

This project is the landing page for Crazy Imagine Software, built with Astro, a modern framework for web development. Here, we explain how to set up your development environment and how to structure your project.

## Initial Setup

Follow these steps to set up your development environment:

1. **Clone the project**

   First, you need to clone the project repository. You can do this using the following command in your terminal:

    ```sh
    git clone git@github.com:cis-deploys/cis-astro.git
    ```

2. **Install dependencies**

   Once you have cloned the repository, navigate to the project directory and run the following command to install the dependencies:

   ```sh
   cd cis-astro
   pnpm install
   ```

3. **Configure environment variables**

   This project uses environment variables for certain configurations. There is a `.env.template` file you can use as a base. Copy this file and rename it to `.env`:

   ```sh
   cp .env.template .env
   ```

   Then, open the `.env` file and configure the environment variables as needed.

4. **Run the development script**

   Finally, you can start the local development server by running the following command:

   ```sh
   pnpm run dev
   ```

   You should now be able to see the application at `localhost:4321`.

## Project Structure

The directory structure of your Astro project is as follows:

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
├── public/                # Static assets, like images, go here
│   └── favicon.svg
├── src/                   # All source code files go here
│   ├── assets/            # Images consumed by Astro Image are stored here
│   ├── components/        # Astro components go here
│   │   └── react/         # React components go here
│   ├── consts/            # Constants that handle specific information go here
│   ├── i18n/              # Internationalization logic goes here
│   ├── icons/             # SVG icons as Astro components go here
│   ├── layouts/           # Layouts go here
│   ├── lib/               # External integrations, like HTTP connections to Strapi, go here
│   ├── pages/             # Application pages go here
│   ├── sections/          # Large Astro components rendered as sections go here
│   ├── store/             # Global state handlers go here
│   ├── types/             # TypeScript types go here
│   └── utils/             # Useful app information goes here
└── package.json           # Project dependencies and scripts are defined here
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its filename.

These additional files are used to configure various tools and aspects of the project:

- `.env.template`: Template for the environment variables required by the application.
- `.eslintrc.js`: Configuration for ESLint, a tool for identifying and reporting patterns found in ECMAScript/JavaScript code.
- `.lintstagedrc`: Configuration for lint-staged, a tool that runs linters on git staged files.
- `.node-version`: Specifies the version of Node.js to be used in the project.
- `.nvmrc`: Specifies the version of Node.js to be used in the project, used by NVM (Node Version Manager).
- `.prettierrc.cjs`: Configuration for Prettier, a tool for automatically formatting code.
- `astro.config.mjs`: Configuration for Astro, the framework used to build the application.
- `postcss.config.mjs`: Configuration for PostCSS, a tool for transforming CSS with JavaScript plugins.
- `tailwind.config.mjs`: Configuration for Tailwind CSS, a utility-first CSS framework.
- `tsconfig.json`: Configuration for TypeScript, a superset of JavaScript that adds static typing and other features.

## Commands

All commands are run from the project root directory in a terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs project dependencies            |
| `pnpm run dev`            | Starts the local development server at `localhost:4321` |
| `pnpm run build`          | Builds the site for production in `./dist/`  |
| `pnpm run preview`        | Previews the build locally before deployment |
| `pnpm run astro ...`      | Runs Astro CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Gets help on how to use the Astro CLI    |
| `pnpm run lint`           | Runs the linter on project files   |
| `pnpm run lint:fix`       | Runs the linter and fixes any errors it can |
| `pnpm run format`         | Formats project files with Prettier  |
| `pnpm run format:check`   | Checks if project files are well-formatted |

## Additional Configuration

1. **Package Manager**: This project uses `pnpm` as its package manager. If you don't have it installed yet, you can do so with the following command:

   ```sh
   npm install -g pnpm
   ```

2. **Node.js Version**: It is recommended to use the Node.js version specified in the `.node-version` and `.nvmrc` files. If you are using nvm (Node Version Manager), you can ensure you are using the correct Node.js version with the following command:

   ```sh
   nvm use
   ```

3. **Tailwind CSS**: For styles, Tailwind CSS is used. The Tailwind configuration file (`tailwind.config.js`) is located at the project root.

4. **Environment Variables**: There is a `.env.template` file with a required environment variable for the app. You need to copy this file and rename it to `.env` for development. Then, open the `.env` file and configure the environment variables as needed.

5. **Strapi**: This project should be used in conjunction with a running instance of Strapi. Make sure to have Strapi configured and running before starting this project.
