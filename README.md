# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


Temas puntuales
En esta sección trabajaremos con el hook "useReducer”, el cual está diseñado para ayudarnos a resolver estados donde una acción puede desencadenar varios cambios de estado simultáneamente, pero también se puede usar para cosas simples también, pero su poder radica en que puedes colocar nombres humanamente legibles para las acciones que cambian el estado.

Puntualmente veremos:
  o  Patron reducer
  o  useReducer hook
  o  Validadores de esquemas - Zod
  o  Efectos sobre estados
  o  LocalStorage y SessionStorage
  o  Condiciones de los reducers
  o  Tareas y ejercicios adicionales

======= N U E V O     P R O Y E C T O =======
Esta sección tiene por objetivo reforzar el conocimiento de los hooks tradicionales y especializarlos en los "custom hooks"
Proyecto React hooksApp
1.- npm create vite
    o  Project name:
    |  04_hooks-app
    o  Select a framework:
    |  React
    o  Select a variant:
    |  TypeScript + SWC
    
    cd 04_hooks-app
    npm install
    npm run dev
2.- eliminar :
     - assets
     - App.css
     - App.tsx
    quitar contenido de
     - index.css
    quitar las llamadas que ya no existen
     - main.tsx
    crear en  src
     - HookApp.tsx
3.- Los estilos se haran con
      o  https://tailwindcss.com/
         click en [Get started] y asegurate que este seleccionado [Using Vite]
      o  instalar tailwindcss
         C:\Projects\Git\React\04_hooks-app>npm install tailwindcss @tailwindcss/vite
         click en [Get started] y asegurate que este seleccionado [Using Vite]
      o  en el archivo vite.config.ts agregar las lineas (esta)
            import { defineConfig } from 'vite'
            import tailwindcss from '@tailwindcss/vite'   (esta)

            export default defineConfig({
            plugins: [
                tailwindcss(),      (esta)
            ],
            })     
      o  en el index.css agregar
          @import "tailwindcss";
        y agregas esta linea que contiene muchos stilos de Tailwind que dio el instructor
        .bg-gradient {
        @apply bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 min-h-screen flex items-center justify-center p-4 text-white;
        }     

        E J E R C I C I O     T E R M I N A D O
El ejercicio termino en el paso anterior SEGUIMOS CON 
LA PARTE II [useReducer] que se grabara como [04_hooks-app_v2]
- inicia la version v.2
4.-  Instalar componentes [shadcn]
     a.- entrar  https://ui.shadcn.com/
     b.- ir a documentacion [docs] y seleccionas [Vite]
     c.- el proyecto ya esta creado, ya instalamos [tailwindcss]
     d.- en el [tsconfig.json] y agregamos la parte de [compilerOptions]
            {
            "files": [],
            "references": [
                {
                "path": "./tsconfig.app.json"
                },
                {
                "path": "./tsconfig.node.json"
                }
            ],
            "compilerOptions": {
                "baseUrl": ".",
                "paths": {
                "@/*": ["./src/*"]
                }
            }
            }     
     e.- en el [tsconfig.app.json] y agregamos en [compilerOptions]
            {
            "compilerOptions": {
                // ...
                "baseUrl": ".",
                "paths": {
                "@/*": [
                    "./src/*"
                ]
                },
                // ...
            }
            }      
     f.- instalar
         C:\Projects\Git\React\04_hooks-app_v2>npm install -D @types/node
     g.- en el [vite.config.ts] y agregamos 

            import path from "path"
            ---
            ---

            // https://vite.dev/config/
            export default defineConfig({
            plugins: [react(), tailwindcss()],
            resolve: {
                alias: {
                "@": path.resolve(__dirname, "./src"),
                },
            },
            })     
     h.- inicializamos los componentes [shadcn]
         C:\Projects\Git\React\04_hooks-app_v2>npx shadcn@latest init
         Need to install the following packages:
         shadcn@3.6.2
         Ok to proceed? (y) y
        √ Preflight checks.
        √ Verifying framework. Found Vite.
        √ Validating Tailwind CSS config. Found v4.
        √ Validating import alias.
        ? Which color would you like to use as the base color? » - Use arrow-keys. Return to submit.
        >   Neutral
            Gray
            Zinc
            Stone
            Slate     
        elijo [Neutral] y enter
     i.- ejecutamos
         C:\Projects\Git\React\04_hooks-app_v2>npx shadcn@latest add
            ? Which components would you like to add? » Space to select. A to toggle all. Enter to submit.
            ( ) ↑ breadcrumb
            (*)   button
            ( )   button-group
            ( )   calendar
            (*)   card
            ( )   carousel
            ( )   chart
            (*)   checkbox
            ( )   collapsible
            ( ) ↓ command      
            Seleccionamos los componente que vamos a instalar y utilizar con la barra estaciadora y al final <enter>   
            √ Created 4 files:
            - src\components\ui\button.tsx
            - src\components\ui\card.tsx
            - src\components\ui\checkbox.tsx
            - src\components\ui\input.tsx
            crea el directorio con los componentes 
     j.- HERRAMIENTAS DE INTELIGENCIA ARTIFICIAL que utilizo el instructor para generar el codigo 
         que nos compartio en su gits y lo agregamos al componente [TaskApp.tsx]
         https://gist.github.com/Klerith/cb9a47703aea48d3585bfa781b030c4a
         las dos son free y solo dejan hacer 5 diseños por mes
            https://v0.app/
            https://lovable.dev/
            crea el directorio con los componentes 
     k.- para evitar errores de manipulacion del localStorage del navgador instalaremos
         1.-  https://zod.dev/
         2.- C:\Projects\Git\React\04_hooks-app_v2>npm install zod
         3.- agregamos la importacion en el modulo donde se usara
             import * as z from "zod";
     l.- para usar una animacion de confeti 
         1.-  https://www.npmjs.com/package/canvas-confetti
         2.- agregas el [import] en el modulo donde se usara
                import confetti from 'canvas-confetti';   -- Nota sobre 'canvas-confetti' oprime CTRL + .
                                                             e click [install '@types/canvas-confetti']

        E J E R C I C I O     T E R M I N A D O
