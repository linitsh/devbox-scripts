---
title     : readme
tags      : [tag1]
categories: [yaml]
---
>[taskfile docs](https://taskfile.dev/experiments/remote-taskfiles/)

### install
```
scoop install task
```

### vscode-validation top coment
```yml
# yaml-language-server: $schema=https://json.schemastore.org/taskfile.json
version: '3'
includes:
  # $bash '' $pwsh '' $node '' $get ''
  shared: https://raw.githubusercontent.com/linitsh/scripts/main/taskfile.shared.yml

tasks:
  default: task --list-all
```
### make task crossplatform
windows
- change system path variable - git bash folder must be before System32
- same for scoop
- reload all
- add remote env variable from docs
- include shared.yml for use shell envs in your taskfile
```yml
includes:
  shared: https://raw.githubusercontent.com/linitsh/scripts/main/taskfile.shared.yml
```
- now use shells like: 
```yml
tasks:
  test-shared:
  - $bash 'echo "some1"'
  - $pwsh 'echo "some2"'
  - $node 'console.log("some2")'
  # see shell yml
```

### run remote scripts
```powershell
# win
# 1 add remote env variable from taskfile docs
# 2 push up scoop env path 
scoop install curl
```
```powershell
# win
# 1 push up gitbash env path
# bash script simple
bash -ic "$(curl -Ls <URL>/test.sh)" -- -u 'my name' -a 30
```
```powershell
# node script simpe
node --input-type=module -e "$(curl -Ls <URL>/test.mjs)" -- arg1 arg2
```