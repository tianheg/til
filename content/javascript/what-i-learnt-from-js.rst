
What I learnt from JS
=====================

Use Npx
-------

如果有些包我们只会使用一次，或者只想尝试以下，不想安装到全局，也不想作为当前项目的依赖，可以使用 npx 的方式来执行。

npx 是 npm 5.2+ 版本之后自带的工具，能够帮助我们更高效的执行 npm 软件仓库里的安装包

Use Same Between File Name And Variable
---------------------------------------

文件的名称要和它所匹配的变量相同，否则代码会出问题，不会报错，但生成的页面有问题 `source3 <https://github.com/tianheg/good/commit/b7a0d1111aba1d32c1dcb94f1a3d9e8b342a1c13>`_

Package.json License Should Be A Valid SPDX License Expression
--------------------------------------------------------------

``CC BY-NC-SA 4.0`` to ``CC-BY-NC-SA-4.0``

`source1 <https://spdx.org/licenses/>`_

String Does Not Match The Pattern Of
------------------------------------



   String does not match the pattern of "^(?:@[a-z0-9-*~][a-z0-9-*._~]*/)?[a-z0-9-~][a-z0-9-._~]*$".

Some rules:


* The name must be less than or equal to 214 characters. This includes the scope for scoped packages.
* The names of scoped packages can begin with a dot or an underscore. This is not permitted without a scope.
* New packages must not have uppercase letters in the name.
* The name ends up being part of a URL, an argument on the command line, and a folder name. Therefore, the name can't contain any non-URL-safe characters.

Some tips:


* Don't use the same name as a core Node module.
* Don't put "js" or "node" in the name. It's assumed that it's js, since you're writing a package.json file, and you can specify the engine using the "engines" field. (See below.)
* The name will probably be passed as an argument to require(), so it should be something short, but also reasonably descriptive.
* You may want to check the npm registry to see if there's something by that name already, before you get too attached to it. https://www.npmjs.com/

`source2 <https://docs.npmjs.com/cli/v7/configuring-npm/package-json#name>`_

Unmet Peer Dependency
---------------------

When I install packages, something always shows like these:



   warning " > @vue/test-utils@1.1.3" has unmet peer dependency "vue@2.x".
   warning " > @vue/test-utils@1.1.3" has unmet peer dependency "vue-template-compiler@^2.x".
   warning " > eslint-loader@3.0.4" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
   warning " > eslint-plugin-vue@5.2.3" has incorrect peer dependency "eslint@^5.0.0".
   warning "eslint-plugin-vue > vue-eslint-parser@5.0.0" has incorrect peer dependency "eslint@^5.0.0".
   warning " > sass-loader@10.1.1" has unmet peer dependency "webpack@^4.36.0 || ^5.0.0".
   warning " > vue-jest@3.0.7" has unmet peer dependency "vue@^2.x".
   warning " > vue-jest@3.0.7" has unmet peer dependency "vue-template-compiler@^2.x".



   $ npm ls                   
   til@1.0.0 folder path
   ├── husky@5.1.3
   ├─┬ lint-md-cli@0.1.2
   │ ├─┬ babel-polyfill@6.26.0
   │ │ ├─┬ babel-runtime@6.26.0
   │ │ │ ├── core-js@2.6.12 deduped
   ......

What's the meaning of ``deduped``\ ?
