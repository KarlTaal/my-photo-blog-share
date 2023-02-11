#!/bin/bash

PATH_TO_BE_GENERATED='../mpbs-be/generated'

FULL_PATH_TO_PROTOC='/opt/homebrew/opt/protobuf@3/bin'
FULL_PATH_TO_GO='/Users/karl.taal/workspace/go/go1.19.5/bin'
export PATH=$PATH:${FULL_PATH_TO_PROTOC}:${FULL_PATH_TO_GO}

rm -rf ${PATH_TO_BE_GENERATED}
mkdir "${PATH_TO_BE_GENERATED}"

find ./ -type f -name "*.proto" -exec protoc --go_out=${PATH_TO_BE_GENERATED} {} \;
