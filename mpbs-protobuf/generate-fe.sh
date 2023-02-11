#!/bin/bash

PATH_TO_FE_GENERATED='../mpbs-fe/generated'

FULL_PATH_TO_PROTOC='/opt/homebrew/opt/protobuf@3/bin'
FULL_PATH_TO_TYPESCRIPT_GENERATOR='/Users/karl.taal/Desktop/photoshare/mpbs-protobuf/node_modules/.bin'
export PATH=$PATH:${FULL_PATH_TO_PROTOC}:${FULL_PATH_TO_TYPESCRIPT_GENERATOR}

rm -rf ${PATH_TO_FE_GENERATED}
mkdir "${PATH_TO_FE_GENERATED}"

find ./ -type f -name "*.proto" -exec protoc --ts_out=${PATH_TO_FE_GENERATED} --ts_opt=explicit_override {} \;
