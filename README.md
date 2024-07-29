
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
curl -s https://raw.githubusercontent.com/linitsh/scripts/main/bash/test/test.sh | bash -s arg1 arg2
```