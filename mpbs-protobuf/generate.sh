#!/bin/bash

PATH_TO_FE_GENERATED='../mpbs-fe/generated'
PATH_TO_BE_GENERATED='../mpbs-be/generated'

# Add necessary programs to path temporary
FULL_PATH_TO_PROTOC='/opt/homebrew/opt/protobuf@3/bin'
FULL_PATH_TO_GO='/Users/karl.taal/workspace/go/go1.19.5/bin'
FULL_PATH_TO_TYPESCRIPT_GENERATOR='/Users/karl.taal/Desktop/photoshare/mpbs-protobuf/node_modules/.bin'
export PATH=$PATH:${FULL_PATH_TO_PROTOC}:${FULL_PATH_TO_GO}:${FULL_PATH_TO_TYPESCRIPT_GENERATOR}

# Clear generated folders
rm -rf ${PATH_TO_FE_GENERATED}
mkdir "${PATH_TO_FE_GENERATED}"
rm -rf ${PATH_TO_BE_GENERATED}
mkdir "${PATH_TO_BE_GENERATED}"

# Generate
find ./ -type f -name "*.proto" -exec protoc --go_out=${PATH_TO_BE_GENERATED} {} \;
find ./ -type f -name "*.proto" -exec protoc --ts_out=${PATH_TO_FE_GENERATED} --ts_opt=explicit_override {} \;
