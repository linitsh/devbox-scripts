
- [taskfile docs](https://taskfile.dev/experiments/remote-taskfiles/)

### vscode-validation
```yml
# yaml-language-server: $schema=https://json.schemastore.org/taskfile.json
version: '3'
tasks:
  task1: echo " :) "
```

### run remote scripts
```bash
#!/bin/bash
# bash flag "-s" makes shell read from stdin.
curl -Ls https://raw.githubusercontent.com/linitsh/scripts/main/bash/test/test.sh | bash -s -- -u 'Jon Doe' -a 25
```
```powershell
# powershellrun from win wsl
bash --login -ic "curl -Ls https://raw.githubusercontent.com/linitsh/scripts/main/bash/test/test.sh | bash -s -- -u 'Jon Doe' -a 25"
# fix win curl
# 0 scoop install curl
# 1 Remove-Item alias:curl
# 2 Set-Alias -Name curl -Value C:\Users\LIN\scoop\apps\curl\current\bin\curl.exe
# now curl is indentical
curl -Ls https://raw.githubusercontent.com/linitsh/scripts/main/bash/test/test.sh | bash -s -- -u 'Jon Doe' -a 25

#node gitabsh
node -e "$(curl -Ls https://raw.githubusercontent.com/linitsh/scripts/main/node/test.mjs)"
```
```bash

# yaml
tasks test:hello -- arg1
```