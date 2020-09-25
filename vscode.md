# VScode Settings

## path

```bash
$HOME/Library/Application Support/Code/User/settings.json

/Users/don/Library/Application Support/Code/User
/Users/don/Library/ApplicationSupport/Code/User
```

[docs](https://code.visualstudio.com/docs/getstarted/themes)

## settings.json

```json
{
    "window.zoomLevel": 0,
    "editor.renderWhitespace": "all",
    "editor.renderControlCharacters": false,
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "files.exclude": {
        "**/.classpath": true,
        "**/.project": true,
        "**/.settings": true,
        "**/.factorypath": true
    },
    "editor.tabSize": 2,
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "python.jediEnabled": false,
    "[sql]": {
        // "editor.defaultFormatter": "mtxr.sqltools"
    },
    "cSpell.userWords": [
        "Bcrypt",
        "Chebyshev",
        "Datagram",
        "Interruptible",
        "OWASP",
        "Regen",
        "Subnetting",
        "TINYINT",
        "Tileset",
        "autofit",
        "connectionless",
        "crossorigin",
        "devtool",
        "dotenv",
        "fileprogress",
        "firestore",
        "getenv",
        "ifconfig",
        "minmax",
        "monospace",
        "netmask",
        "netstat",
        "nmap",
        "nosniff",
        "pathfinding",
        "performant",
        "prepending",
        "pyfile",
        "resave",
        "spritesheet",
        "sqlite",
        "systemctl",
        "tweek",
        "unirest",
        "wtforms"
    ],
    "editor.formatOnPaste": false,
    "editor.formatOnSave": false,
    "editor.formatOnType": false,
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[python]": {},
    "workbench.colorCustomizations": {
        "editor.background": "#000000",
        "activityBar.background": "#000000",
        "sideBar.background": "#1b1b1b",
        "tab.activeBackground": "#333333",
        "breadcrumb.background": "#1f1f1f",
        "statusBar.background": "#1b1b1b",
        "editorWhitespace.foreground": "#ffffff50",
        // "terminal.foreground": "#888888",
        // "foreground": "#888888",
        // "editor.foreground": "#888888",
    },
    "editor.wordWrap": "wordWrapColumn",
    "editor.wordWrapColumn": 150,
    "[typescript]": {
        // "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    // "javascript.format.enable": false,
    // "javascript.validate.enable": false,
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "javascript.format.insertSpaceBeforeAndAfterBinaryOperators": true,
    "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": true,
    // "eslint.format.enable": true,
    // "standard.enable": true,
    // "standard.validate": [
    //     "javascript",
    //     "javascriptreact",
    //     "typescript",
    //     "typescriptreact"
    // ]
    // "markdown-preview-enhanced.previewTheme": "vue.css"
    // "java.semanticHighlighting.enabled": false,
}
```
