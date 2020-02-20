# Webpack-TypeScript-Starter

A sample setup to get started developing front-end vizualisations using typescript and webpack.

# Development

```
npm run dev
```

will start up a webpack dev server on ``http://localhost:8090`` which will allow you to browse the contents of the project.

Navigate to the ``dist`` folder to load up the index.html file that imports the compiled class and runs it.

# Building

```
npm run build
```

# Settings

## Package.json

Importing files without using them in the code will make webpack remove them because of [Tree Shaking](https://webpack.js.org/guides/tree-shaking/). Flagging these files as having **side effects** will make webpack compile them into the code regardless if they are referenced within the code.

```
"sideEffects": [
    "core-js/**/*",
    "*.css",
    "*.scss"
]
```

## tsconfig.json

```
{
    "compilerOptions": {
      // Activates source maps.
      "sourceMap": true,

      // Target ES5 browsers.
      // Typescript does not automatically add polyfills. You must do that manually.
      "target": "ES5", //

      // Use Node's module resolution mechanism at runtime.
      "moduleResolution": "node",

      // Sets the module system for the program to be import/export.
      "module": "esnext",

      // Allow JSON objects to be imported using import syntax in typescript.
      "resolveJsonModule": true,

      // Allows CommonJs modules to be imported using ES6 Syntax
      "esModuleInterop": true,

      // Don't report errors if we want to import default from a module which doesn't have default export.
      "allowSyntheticDefaultImports": true
    }
}
```

## global.d.ts

This file has some definition for file types that are globally available in your entire project because I used webpack loaders to load them in and compile them.
- .csv
- .png
- .jpg

# Gotcha's

## Externalizing Typescript definitions

Because we have set the webpack ts-loader to transpile only, it will not register any change in external definition files as a compile which in effect causes the forked typechecker to **NOT** run.
The creator of ForkTsCheckerWebpackPlugin has [commented](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/issues/36) it will be fixed in v5.0.0 of the plugin. For now you must restart the server each time you change external definition files.

- **global.d.ts is affected by this issue.**

## Importing modules

- [Great import schism](https://itnext.io/great-import-schism-typescript-confusion-around-imports-explained-d512fc6769c2)

There could be a lot of confusion with different kinds of ways of importing modules. The TLDR is to simply use ES6 import syntax:

```
import Module from 'Module';

// Or if there are multiple exports.
import { func } from 'lodash';

```

The reason is because this will allow babel to do correct tree shaking. Using **require()**, even though it works, will break this.

## Importing CommonJS modules (used by Node)

- [Understanding esModuleInterop](https://stackoverflow.com/questions/56238356/understanding-esmoduleinterop-in-tsconfig-file)

These two settings will know how to handle these situations correctly without you having to worry about it.

```
"esModuleInterop": true,
"allowSyntheticDefaultImports": true
```

## Polyfills for IE11 and lower.

Typescript does not automatically add polyfills. You need to check IE11 and see what breaks because some of your external libraries might be using non ES5. You only need to do this if you want to support IE11 of course.

For polyfilling use [core-js](https://github.com/zloirock/core-js)

```
import 'core-js/stable/array/from';
```
# License

[MIT](https://mit-license.org/)
