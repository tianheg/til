# Node.js

## Difference between devDependencies and Dependencies

`dependencies`

These are your normal dependencies, or rather ones that you need when running your code (e.g. React or ImmutableJS).

`devDependencies`

These are your development dependencies. Dependencies that you need at some point in the development workflow but not while running your code (e.g. Babel or Flow).

`peerDependencies`

Peer dependencies are a special type of dependency that would only ever come up if you were publishing your own package.

Having a peer dependency means that your package needs a dependency that is the same exact dependency as the person installing your package. This is useful for packages like `react` that need to have a single copy of `react-dom` that is also used by the person installing it.

`optionalDependencies`

Optional dependencies are just that: optional. If they fail to install, Yarn will still say the install process was successful.

This is useful for dependencies that won’t necessarily work on every machine and you have a fallback plan in case they are not installed (e.g. Watchman).

`bundledDependencies`

Array of package names that will be bundled when publishing the package.

Bundled dependencies should be inside your project. The functionality is basically the same as normal dependencies. They will also be packed when running `yarn pack`.

Normal dependencies are usually installed from the npm registry. Bundled dependencies are useful in cases normal dependencies are not sufficient:

- When you want to re-use a third party library that doesn’t come from the npm registry or that was modified.
- When you want to re-use your own projects as modules.
- When you want to distribute some files with your module.

To save a dependency as a devDependency on installation we need to do an `npm install --save-dev`, instead of just an `npm install --save.` A nice shorthand for installing a devDependency that I like to use is `npm i -D`. The shorthand for saving a regular dependency is `-S` instead of `-D`.

---

**References**:

1. [Types of dependencies - Yarn 1.x](https://classic.yarnpkg.com/en/docs/dependency-types)
2. [dependencies - Yarn 2](https://yarnpkg.com/configuration/manifest/#dependencies)
