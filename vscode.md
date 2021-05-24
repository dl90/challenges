# VScode Settings

[docs](https://code.visualstudio.com/docs/getstarted/themes)

```bash
# path
$HOME/Library/Application Support/Code/User/settings.json
```

## settings.json

```json
{
    "files.exclude": {
        "**/.classpath": true,
        "**/.project": true,
        "**/.settings": true,
        "**/.factorypath": true
    },
    "editor.tabSize": 2,
    "editor.renderWhitespace": "all",
    "editor.renderControlCharacters": false,
    "editor.suggestSelection": "first",
    "editor.formatOnPaste": false,
    "editor.formatOnSave": false,
    "editor.formatOnType": false,
    "editor.wordWrap": "wordWrapColumn",
    "editor.wordWrapColumn": 150,
    "workbench.colorCustomizations": {
        "editor.background": "#000000",
        "activityBar.background": "#000000",
        "sideBar.background": "#1b1b1b",
        "tab.activeBackground": "#333333",
        "breadcrumb.background": "#1f1f1f",
        "statusBar.background": "#1b1b1b",
        "editorWhitespace.foreground": "#ffffff50",
    },
    "trailing-spaces.trimOnSave": true,
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "javascript.format.insertSpaceAfterConstructor": true,
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "javascript.format.insertSpaceBeforeAndAfterBinaryOperators": true,
    "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    // "javascript.validate.enable": false,
    // "javascript.format.enable": false,
    // "eslint.format.enable": false,
    // "standard.enable": false,
    // "standard.validate": [
    //     "javascript",›
    //     "javascriptreact",
    //     "typescript",
    //     "typescriptreact"
    // ],
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "typescript.format.insertSpaceAfterConstructor": true,
    "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
    "typescript.format.insertSpaceBeforeAndAfterBinaryOperators": true,
    "typescript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": true,
    "python.languageServer": "Microsoft",
    "liveServer.settings.donotShowInfoMsg": true,
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "window.zoomLevel": 0,
    "[c]": {
        "editor.wordBasedSuggestions": false,
        "editor.suggest.insertMode": "replace",
        "editor.semanticHighlighting.enabled": true
    },
    "C_Cpp.clang_format_fallbackStyle": "{ BasedOnStyle: LLVM, UseTab: Never, IndentWidth: 2, TabWidth: 2, BreakBeforeBraces: Attach, AllowShortIfStatementsOnASingleLine: false, IndentCaseLabels: false, ColumnLimit: 0, AccessModifierOffset: -4 }",
    "C_Cpp.updateChannel": "Insiders"
}
```
