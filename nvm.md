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
├── @angular/cli@12.0.1
├── npm@7.13.0
├── pm2@4.5.6
├── standard@16.0.3
└── typescript@4.2.4

=> If you wish to uninstall them at a later point (or re-install them under your
=> `nvm` Nodes), you can remove them from the system Node as follows:

     $ nvm use system
     $ npm uninstall -g a_module
```

[usage](https://github.com/nvm-sh/nvm#usage)

```bash

nvm current

# location
nvm which node

nvm ls

->      v16.2.0
default -> node (-> v16.2.0)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v16.2.0) (default)
stable -> 16.2 (-> v16.2.0) (default)
lts/* -> lts/fermium (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.1 (-> N/A)
lts/fermium -> v14.17.0 (-> N/A)

nvm cache clear

# setting a new alias:
nvm alias <name> <version>

# using an alias/specific version:
nvm use <name/version>

nvm alias

default -> node (-> v16.1.0)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v16.1.0) (default)
stable -> 16.1 (-> v16.1.0) (default)
lts/* -> lts/fermium (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.1 (-> N/A)
lts/fermium -> v14.16.1 (-> N/A)
```
