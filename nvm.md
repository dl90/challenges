# Node Version Manager

```bash
npm ls -g --depth 0
```

[about](https://github.com/nvm-sh/nvm#about)

```bash
=> Appending nvm source string to /Users/don/.bash_profile
=> Appending bash_completion source string to /Users/don/.bash_profile
=> You currently have modules installed globally with `npm`. These will no
=> longer be linked to the active version of Node when you install a new node
=> with `nvm`; and they may (depending on how you construct your `$PATH`)
=> override the binaries of modules installed with `nvm`:

/usr/local/lib
├── apidoc@0.20.0
├── firebase-tools@8.2.0
├── http-server@0.12.1
├── jsdoc@3.6.3
├── knex@0.20.13
├── tldr@3.3.2
└── typescript@3.9.3
=> If you wish to uninstall them at a later point (or re-install them under your
=> `nvm` Nodes), you can remove them from the system Node as follows:

     $ nvm use system
     $ npm uninstall -g a_module
```

[usage](https://github.com/nvm-sh/nvm#usage)

```bash
nvm current

nvm ls
```

setting a new alias:

```bash
nvm alias <name> <version>
```

using an alias/specific version:

```bash
nvm use <name/version>
```

```bash
nvm alias

default -> node (-> v14.5.0)
node -> stable (-> v14.5.0) (default)
stable -> 14.5 (-> v14.5.0) (default)
iojs -> N/A (default)
unstable -> N/A (default)
lts/* -> lts/erbium (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.21.0 (-> N/A)
lts/erbium -> v12.18.2 (-> N/A)
```
