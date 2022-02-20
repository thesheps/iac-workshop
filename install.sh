#! /bin/bash

brew update
brew install awscli
brew install nvm
mkdir ~/.nvm

echo -e "export NVM_DIR=~/.nvm\nsource $(brew --prefix nvm)/nvm.sh" >> ~/.zshrc
source ~/.zshrc

nvm install 16
nvm use 16