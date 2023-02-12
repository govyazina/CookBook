#!/bin/sh

echo $PATH

echo "$PRIVATE_KEY" >_TEMP_IDENTITY_FILE && \
chmod 600 _TEMP_IDENTITY_FILE && \
ls -la && \
scp -o StrictHostKeyChecking=no -v -i _TEMP_IDENTITY_FILE -r 'build' deployer@cookbook.pchapl.dev:/home/deployer/CookBookFrontend/releases && \
ssh -v -i _TEMP_IDENTITY_FILE deployer@cookbook.pchapl.dev "./release-react.sh"
