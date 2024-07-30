#!/bin/bash

# test version

apt-get update && apt-get install -y curl xz-utils

curl -L https://nixos.org/nix/install | sh -s -- --daemon
curl -fsSL https://get.jetify.com/devbox | bash -s -- -f

# try global
echo 'eval "$(devbox global shellenv)"' >> ~/.bashrc
source ~/.bashrc
eval "$(devbox global shellenv --recompute)"
refresh-global

# alias
echo "alias dbg='devbox global'" >> ~/.bashrc
echo "alias db='devbox'" >> ~/.bashrc
source ~/.bashrc
