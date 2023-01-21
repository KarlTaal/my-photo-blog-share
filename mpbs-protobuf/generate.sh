#!/bin/bash

PATH_TO_FE_GENERATED='../mpbs-fe/generated'
PATH_TO_BE_GENERATED='../mpbs-be/generated'

# Clear generated folders
rm -rf ${PATH_TO_FE_GENERATED}; mkdir "${PATH_TO_FE_GENERATED}";
rm -rf ${PATH_TO_BE_GENERATED}; mkdir "${PATH_TO_BE_GENERATED}";


# Generate
protoc -I=./ --go_out=${PATH_TO_BE_GENERATED} ./*.proto
protoc -I=./ --ts_out=${PATH_TO_FE_GENERATED} ./*.proto --ts_opt=explicit_override