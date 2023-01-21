# Protobuf

## Prerequisites

### Go should be in path

Check with
``go version``  
If not found then for Mac ``export GO_PATH=~/go`` and ``export PATH=$PATH:/$GO_PATH/bin``.

### Typescript generator

Protocol Buffers do not support Typescript by default so third party npm package has to be installe.     
Run ``npm install`` in project directory.

## Generate

``
protoc -I=./ --go_out=../mpbs-be ./*.proto
``  
``
protoc -I=./ --ts_out=../mpbs-fe/src/generated ./*.proto
``  
... or use a shell script generate.sh
