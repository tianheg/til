# V1 To V2

1. Run `npm install -g yarn` to update the global yarn version to latest v1
2. Go into your project directory
3. Run `yarn set version berry` to enable v2 (cf [Install](https://yarnpkg.com/getting-started/install) for more details)
4. If you used `.npmrc` or `.yarnrc`, you'll need to turn them into the [new format](https://yarnpkg.com/configuration/yarnrc) (see also [1](https://yarnpkg.com/getting-started/migration#update-your-configuration-to-the-new-settings), [2](https://yarnpkg.com/getting-started/migration#dont-use-npmrc-files))
5. Add [`nodeLinker: node-modules`](https://yarnpkg.com/configuration/yarnrc#nodeLinker) in your `.yarnrc.yml` file
6. Commit the changes so far (`yarn-X.Y.Z.js`, `.yarnrc.yml`, ...)
7. Run `yarn install` to migrate the lockfile
8. Take a look at [this article](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored) to see what should be gitignored
9. Commit everything remaining

[source](https://yarnpkg.com/getting-started/migration)
