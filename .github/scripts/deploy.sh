#!/bin/sh

echo -e "${PRIVATE_KEY}" >_TEMP_IDENTITY_FILE && \
chmod 600 _TEMP_IDENTITY_FILE && \
ls -la && \
scp -o StrictHostKeyChecking=no -v -i _TEMP_IDENTITY_FILE -r 'build' deployer@cookbook.pchapl.dev:/home/deployer/CookBookFrontend/releases && \
ssh deployer@cookbook.pchapl.dev "./release-react.sh"
