# Protobuf

## Generate

``
protoc -I=./ --go_out=../mpbs-be ./*.proto
``  
``
protoc -I=./ --ts_out=../mpbs-fe/src/generated ./*.proto
``  
... or use a shell script generate.sh
