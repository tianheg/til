---
title: unmet-peer-dependency
date: 2021-05-01 10:19:14
permalink: /pages/4505ca/
categories:
  - nodejs
tags:
  - 
---
# Unmet Peer Dependency

When I install packages, something always shows like these:

```bash
warning " > @vue/test-utils@1.1.3" has unmet peer dependency "vue@2.x".
warning " > @vue/test-utils@1.1.3" has unmet peer dependency "vue-template-compiler@^2.x".
warning " > eslint-loader@3.0.4" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
warning " > eslint-plugin-vue@5.2.3" has incorrect peer dependency "eslint@^5.0.0".
warning "eslint-plugin-vue > vue-eslint-parser@5.0.0" has incorrect peer dependency "eslint@^5.0.0".
warning " > sass-loader@10.1.1" has unmet peer dependency "webpack@^4.36.0 || ^5.0.0".
warning " > vue-jest@3.0.7" has unmet peer dependency "vue@^2.x".
warning " > vue-jest@3.0.7" has unmet peer dependency "vue-template-compiler@^2.x".
```

```bash
$ npm ls                   
til@1.0.0 folder path
├── husky@5.1.3
├─┬ lint-md-cli@0.1.2
│ ├─┬ babel-polyfill@6.26.0
│ │ ├─┬ babel-runtime@6.26.0
│ │ │ ├── core-js@2.6.12 deduped
│ │ │ └── regenerator-runtime@0.11.1
│ │ ├── core-js@2.6.12
│ │ └── regenerator-runtime@0.10.5
│ ├─┬ chalk@2.4.2
│ │ ├─┬ ansi-styles@3.2.1
│ │ │ └─┬ color-convert@1.9.3
│ │ │   └── color-name@1.1.3
│ │ ├── escape-string-regexp@1.0.5
│ │ └─┬ supports-color@5.5.0
│ │   └── has-flag@3.0.0
│ ├── commander@2.20.3
│ ├─┬ glob@7.1.6
│ │ ├── fs.realpath@1.0.0
│ │ ├─┬ inflight@1.0.6
│ │ │ ├── once@1.4.0 deduped
│ │ │ └── wrappy@1.0.2
│ │ ├── inherits@2.0.4
│ │ ├─┬ minimatch@3.0.4
│ │ │ └─┬ brace-expansion@1.1.11
│ │ │   ├── balanced-match@1.0.0
│ │ │   └── concat-map@0.0.1
│ │ ├─┬ once@1.4.0
│ │ │ └── wrappy@1.0.2 deduped
│ │ └── path-is-absolute@1.0.1
│ ├─┬ lint-md@0.2.0
│ │ ├── ast-plugin@0.0.7
│ │ ├── lodash@4.17.21 deduped
│ │ ├─┬ remark-parse@6.0.3
│ │ │ ├── collapse-white-space@1.0.6
│ │ │ ├── is-alphabetical@1.0.4
│ │ │ ├── is-decimal@1.0.4
│ │ │ ├── is-whitespace-character@1.0.4
│ │ │ ├── is-word-character@1.0.4
│ │ │ ├── markdown-escapes@1.0.4
│ │ │ ├─┬ parse-entities@1.2.2
│ │ │ │ ├── character-entities@1.2.4
│ │ │ │ ├── character-entities-legacy@1.1.4
│ │ │ │ ├── character-reference-invalid@1.1.4
│ │ │ │ ├─┬ is-alphanumerical@1.0.4
│ │ │ │ │ ├── is-alphabetical@1.0.4 deduped
│ │ │ │ │ └── is-decimal@1.0.4 deduped
│ │ │ │ ├── is-decimal@1.0.4 deduped
│ │ │ │ └── is-hexadecimal@1.0.4
│ │ │ ├── repeat-string@1.6.1
│ │ │ ├── state-toggle@1.0.3
│ │ │ ├── trim@0.0.1
│ │ │ ├── trim-trailing-lines@1.1.4
│ │ │ ├─┬ unherit@1.1.3
│ │ │ │ ├── inherits@2.0.4 deduped
│ │ │ │ └── xtend@4.0.2 deduped
│ │ │ ├─┬ unist-util-remove-position@1.1.4
│ │ │ │ └─┬ unist-util-visit@1.4.1
│ │ │ │   └─┬ unist-util-visit-parents@2.1.2
│ │ │ │     └── unist-util-is@3.0.0
│ │ │ ├── vfile-location@2.0.6
│ │ │ └── xtend@4.0.2
│ │ └─┬ unified@7.1.0
│ │   ├── @types/unist@2.0.3
│ │   ├─┬ @types/vfile@3.0.2
│ │   │ ├── @types/node@14.14.34
│ │   │ ├── @types/unist@2.0.3 deduped
│ │   │ └─┬ @types/vfile-message@2.0.0
│ │   │   └─┬ vfile-message@2.0.4
│ │   │     ├── @types/unist@2.0.3 deduped
│ │   │     └─┬ unist-util-stringify-position@2.0.3
│ │   │       └── @types/unist@2.0.3 deduped
│ │   ├── bail@1.0.5
│ │   ├── extend@3.0.2
│ │   ├── is-plain-obj@1.1.0
│ │   ├── trough@1.0.5
│ │   ├─┬ vfile@3.0.1
│ │   │ ├── is-buffer@2.0.5
│ │   │ ├── replace-ext@1.0.0
│ │   │ ├── unist-util-stringify-position@1.1.2
│ │   │ └─┬ vfile-message@1.1.1
│ │   │   └── unist-util-stringify-position@1.1.2 deduped
│ │   └── x-is-string@0.1.0
│ └── lodash@4.17.21
├─┬ lint-staged@10.5.4
│ ├─┬ chalk@4.1.0
│ │ ├─┬ ansi-styles@4.3.0
│ │ │ └─┬ color-convert@2.0.1
│ │ │   └── color-name@1.1.4
│ │ └─┬ supports-color@7.2.0
│ │   └── has-flag@4.0.0
│ ├─┬ cli-truncate@2.1.0
│ │ ├─┬ slice-ansi@3.0.0
│ │ │ ├── ansi-styles@4.3.0 deduped
│ │ │ ├── astral-regex@2.0.0
│ │ │ └── is-fullwidth-code-point@3.0.0
│ │ └─┬ string-width@4.2.2
│ │   ├── emoji-regex@8.0.0
│ │   ├── is-fullwidth-code-point@3.0.0 deduped
│ │   └─┬ strip-ansi@6.0.0
│ │     └── ansi-regex@5.0.0
│ ├── commander@6.2.1
│ ├─┬ cosmiconfig@7.0.0
│ │ ├── @types/parse-json@4.0.0
│ │ ├─┬ import-fresh@3.3.0
│ │ │ ├─┬ parent-module@1.0.1
│ │ │ │ └── callsites@3.1.0
│ │ │ └── resolve-from@4.0.0
│ │ ├─┬ parse-json@5.2.0
│ │ │ ├─┬ @babel/code-frame@7.12.13
│ │ │ │ └─┬ @babel/highlight@7.13.10
│ │ │ │   ├── @babel/helper-validator-identifier@7.12.11
│ │ │ │   ├─┬ chalk@2.4.2
│ │ │ │   │ ├─┬ ansi-styles@3.2.1
│ │ │ │   │ │ └─┬ color-convert@1.9.3
│ │ │ │   │ │   └── color-name@1.1.3
│ │ │ │   │ ├── escape-string-regexp@1.0.5 deduped
│ │ │ │   │ └─┬ supports-color@5.5.0
│ │ │ │   │   └── has-flag@3.0.0
│ │ │ │   └── js-tokens@4.0.0
│ │ │ ├─┬ error-ex@1.3.2
│ │ │ │ └── is-arrayish@0.2.1
│ │ │ ├── json-parse-even-better-errors@2.3.1
│ │ │ └── lines-and-columns@1.1.6
│ │ ├── path-type@4.0.0
│ │ └── yaml@1.10.2
│ ├─┬ debug@4.3.1
│ │ └── ms@2.1.2
│ ├── dedent@0.7.0
│ ├─┬ enquirer@2.3.6
│ │ └── ansi-colors@4.1.1
│ ├─┬ execa@4.1.0
│ │ ├─┬ cross-spawn@7.0.3
│ │ │ ├── path-key@3.1.1
│ │ │ ├─┬ shebang-command@2.0.0
│ │ │ │ └── shebang-regex@3.0.0
│ │ │ └─┬ which@2.0.2
│ │ │   └── isexe@2.0.0
│ │ ├─┬ get-stream@5.2.0
│ │ │ └─┬ pump@3.0.0
│ │ │   ├─┬ end-of-stream@1.4.4
│ │ │   │ └── once@1.4.0 deduped
│ │ │   └── once@1.4.0 deduped
│ │ ├── human-signals@1.1.1
│ │ ├── is-stream@2.0.0
│ │ ├── merge-stream@2.0.0
│ │ ├─┬ npm-run-path@4.0.1
│ │ │ └── path-key@3.1.1 deduped
│ │ ├─┬ onetime@5.1.2
│ │ │ └── mimic-fn@2.1.0
│ │ ├── signal-exit@3.0.3
│ │ └── strip-final-newline@2.0.0
│ ├─┬ listr2@3.4.3
│ │ ├── chalk@4.1.0 deduped
│ │ ├── cli-truncate@2.1.0 deduped
│ │ ├─┬ figures@3.2.0
│ │ │ └── escape-string-regexp@1.0.5 deduped
│ │ ├── indent-string@4.0.0
│ │ ├─┬ log-update@4.0.0
│ │ │ ├─┬ ansi-escapes@4.3.1
│ │ │ │ └── type-fest@0.11.0
│ │ │ ├─┬ cli-cursor@3.1.0
│ │ │ │ └─┬ restore-cursor@3.1.0
│ │ │ │   ├── onetime@5.1.2 deduped
│ │ │ │   └── signal-exit@3.0.3 deduped
│ │ │ ├─┬ slice-ansi@4.0.0
│ │ │ │ ├── ansi-styles@4.3.0 deduped
│ │ │ │ ├── astral-regex@2.0.0 deduped
│ │ │ │ └── is-fullwidth-code-point@3.0.0 deduped
│ │ │ └─┬ wrap-ansi@6.2.0
│ │ │   ├── ansi-styles@4.3.0 deduped
│ │ │   ├── string-width@4.2.2 deduped
│ │ │   └── strip-ansi@6.0.0 deduped
│ │ ├─┬ p-map@4.0.0
│ │ │ └─┬ aggregate-error@3.1.0
│ │ │   ├── clean-stack@2.2.0
│ │ │   └── indent-string@4.0.0 deduped
│ │ ├─┬ rxjs@6.6.6
│ │ │ └── tslib@1.14.1
│ │ ├── through@2.3.8
│ │ └─┬ wrap-ansi@7.0.0
│ │   ├── ansi-styles@4.3.0 deduped
│ │   ├── string-width@4.2.2 deduped
│ │   └── strip-ansi@6.0.0 deduped
│ ├─┬ log-symbols@4.0.0
│ │ └── chalk@4.1.0 deduped
│ ├─┬ micromatch@4.0.2
│ │ ├─┬ braces@3.0.2
│ │ │ └─┬ fill-range@7.0.1
│ │ │   └─┬ to-regex-range@5.0.1
│ │ │     └── is-number@7.0.0
│ │ └── picomatch@2.2.2
│ ├── normalize-path@3.0.0
│ ├─┬ please-upgrade-node@3.2.0
│ │ └── semver-compare@1.0.0
│ ├── string-argv@0.3.1
│ └─┬ stringify-object@3.3.0
│   ├── get-own-enumerable-property-symbols@3.0.2
│   ├── is-obj@1.0.1
│   └── is-regexp@1.0.0
└── prettier@2.2.1
```

What's the meaning of `deduped`?
