
>[taskfile docs](https://taskfile.dev/experiments/remote-taskfiles/)

### install
```powershell
scoop install task
```

### vscode-validation
```yml
# yaml-language-server: $schema=https://json.schemastore.org/taskfile.json
version: '3'
tasks:
  task1: echo " :) "
```
### make task crossplatform
windows
- change system path variable - git bash folder must be before System32
- same for scoop
- reload all
- now use: 
  ```powershell
  bash -ic "command" -- arg1 arg2
  ```

### run remote scripts
```powershell
scoop install curl
```
```powershell
# bash script
bash -ic "$(curl -Ls https://raw.githubusercontent.com/linitsh/scripts/main/bash/test/test.sh)" -- -u 'my name' -a 30
```
```powershell
# node script
node -e "$(curl -Ls https://raw.githubusercontent.com/linitsh/scripts/main/node/test/test.mjs)"
```
