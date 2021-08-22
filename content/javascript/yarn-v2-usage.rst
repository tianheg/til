
Yarn v2 Usage
=============



   npm install -g yarn # update the global yarn version to latest v1(1.22.10)
   cd yourproject
   yarn set version berry # after this will generate .yarnrc.yml
   # add `nodeLinker: node-modules` to .yarnrc.yml
   # commit files:
   # - .yarn/releases/yarn-berry.cjs
   # - .yarnrc.yml
   yarn install # migrate the lockfile

Add these to .gitignore(not using Zero-Installs)(or use my own `.gitignore <https://github.com/tianheg/config/blob/main/git/gitignore#L117>`_\ ):



   .yarn/*
   !.yarn/patches
   !.yarn/releases
   !.yarn/plugins
   !.yarn/sdks
   !.yarn/versions
   .pnp.*

Then commit everything remaining

ref: https://yarnpkg.com/getting-started/migration
