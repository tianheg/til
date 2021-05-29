# Use New Archetype Create Post In Posts Folder

the archetype directory:

```txt
archetypes
├── default.md
└── question.md
```

I want to create a new post use `question.md` in `~\content\posts\question-2021-4.md`, I will use order:

```sh
hugo new --kind question posts/"question-2021-4".md
```

[source](https://gohugo.io/content-management/archetypes/#directory-based-archetypes)
