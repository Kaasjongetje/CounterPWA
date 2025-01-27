How to setup a project that uses/has:
- Normal svelte
- Typescript
- Sass
- Manifest.json (to install the app)
- Service Worker with typescript (offline app)
(It also has an updating system that will show the user a modal
asking to update if there is a new serviceworker, but this is not explained in here)

1. Make a new repo in github

2. On your computer you probably have a directory that contains coding projects. Go into that directory and make a new project folder in there with: mkdir <project_name>. Then clone the github project in there with: git clone <SSH link>. Since the git repo is empty, it won't put anything in the new folder but it will connect everything to github.

3. In your repo directory (not in the cloned repo) run: npm create vite@latest <repo_name> -- --template svelte-ts

4. After the creation, go inside your repo with cd <repo_name> and run npm install

You can now use svelte and typescript

5. To use SASS, install the following development dependencies:
npm install -d svelte-preprocess
npm install -d sass

6. Go to vite.config.ts and import sveltePreprocess, put an object {} in svelte plugin and set the preprocess property to sveltePreprocess()
This is how your config should look:

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: sveltePreprocess()
  })],
})

You don't have to do anything with the sass package directly so now you can use SASS

7. Put a manifest.json file and the icons in the static folder

8. Link to the manifest in index.html with:
<link rel="manifest" href="/manifest.json">
Note that you should not put /static in front of /manifest.json
Don't forget to link to the apple touch icon

9. Before making our service worker, you need to specify in the vite.config how you want to call the files that you get from npm run build in the dist folder. If you want to change something about the compilation to dist you need to go inside the build object in the vite config. Then you need to go inside rollupOptions (Rollup is a module bundler used by Vite) and then you need to go inside the output object to change the name of the outputted files. It looks like this:

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: sveltePreprocess()
  })],

  build: {
    rollupOptions: {
      output: {
        entryFileNames: "script.js",
        assetFileNames: "style.css"
      }
    }
  }
})

entryFileNames will have the name for the file where all the JS/TS is compiled into

assetFileNames will have the compiled CSS/SASS. If you have assets other than css/sass you might need a function to conditionally return a file name:

assetFileNames: (assetInfo) => { ... }
In my projects I only have css/sass and I'm not really sure how this works exactly but this link could maybe be helpful:
https://github.com/vitejs/vite/discussions/6552

10. Make a service worker wherever you want. I'll do it in src/service-worker.ts

11. Typescript needs this code to be in your service worker:
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

const sw = self as unknown as ServiceWorkerGlobalScope

It'll tell TS that you need the types that are used in a SW (like FetchEvent) and also it tells that self is a ServiceWorkerGlobalScope

12. If you want to test the service worker, you need to compile it to JS and then optionally minify it. This does mean that you can only test your SW in preview mode (npm run preview)

Make sure you have tsc (Type Script Compiler) and terser (a JS minifier) installed globally:
npm install -g tsc
npm install -g terser

To compile the TS serviceworker to JS run:
tsc src/service-worker.ts --outFile dist/sw.js
This will compile the TS file located in src/service-worker.ts into dist/sw.js

To minify the compiled TS file:
terser dist/sw.js -o dist/sw.js
This will minify the JS file located in dist/sw.js to the same file location so it'll replace the non-minified file

Compiling and minifying in one command:
tsc src/service-worker.ts --outFile dist/sw.js && terser dis
t/sw.js -o dist/sw.js
I recommand saving that command as a command in vite.config

13. Now you just need to register the serviceworker in src/main.ts
Just note that the way how this is set up, you can't use the sw in dev mode so it'll throw an error because of that each time

14. If you want to deploy the app, you need to deploy it from the dist folder and then everything should work. Also, you might need to remove dist from your gitignore







