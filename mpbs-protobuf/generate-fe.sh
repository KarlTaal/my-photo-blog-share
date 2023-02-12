#!/bin/bash

PATH_TO_FE_GENERATED='../mpbs-fe/generated'

echo "Setup path"
FULL_PATH_TO_PROTOC='/opt/homebrew/opt/protobuf@3/bin'
FULL_PATH_TO_TYPESCRIPT_GENERATOR='/Users/karl.taal/Desktop/photoshare/mpbs-protobuf/node_modules/.bin'
export PATH=$PATH:${FULL_PATH_TO_PROTOC}:${FULL_PATH_TO_TYPESCRIPT_GENERATOR}

echo "Create folder into mpbs-fe"
rm -rf ${PATH_TO_FE_GENERATED}
mkdir "${PATH_TO_FE_GENERATED}"

echo "Generating files..."
find ./ -type f -name "*.proto" -exec protoc --ts_out=${PATH_TO_FE_GENERATED} --ts_opt=explicit_override {} \;
echo "Files generated successfully"
