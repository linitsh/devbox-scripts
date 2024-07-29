
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
#Flag "-s" makes shell read from stdin.
curl -Ls https://raw.githubusercontent.com/linitsh/scripts/main/bash/test/test.sh | bash -s -- -u 'John Smith' -a 25
```
```powershell
# run from win wsl
bash --login -ic "curl -Ls https://raw.githubusercontent.com/linitsh/scripts/main/bash/test/test.sh | bash -s -- -u name -a 44" 
```