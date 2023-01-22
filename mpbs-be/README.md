# MPBS - Go server

## API docs

[Echo Swagger](https://github.com/swaggo/echo-swagger) is used to generate API documentation.

Currently, documentation is configured to be served locally only.

To generate documentation:

- Run ```swag init main.go --output docs``` in mpbs-be directory
- Start mpbs-be server
- Navigate to [http://localhost:1323/swagger/index.html#](http://localhost:1323/swagger/index.html#)

### Automate doc generation Intellij

- Create Go server run configuration
- Create Shell script run configuration with script following text:
    - Needed if you don't have Go in your path by default:  
      - ```export PATH=$PATH:<path to Go>/bin;``` 
      - ```export PATH=$PATH:$(go env GOPATH)/bin;```
    - ```swag init main.go --output docs;```
- Edit Go server run configuration to run before launch previously created Shell script
- Run Go server with your Go run configuration