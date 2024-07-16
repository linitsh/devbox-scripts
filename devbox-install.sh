#!/bin/bash
apt-get update && apt-get install -y curl xz-utils
curl -L https://nixos.org/nix/install | sh -s -- --daemon
curl -fsSL https://get.jetify.com/devbox | bash -s -- -f
echo 'eval "$(devbox global shellenv)"' >> ~/.bashrc
eval "$(devbox global shellenv --recompute)"
echo "alias dbg='devbox global'" >> ~/.bashrc
