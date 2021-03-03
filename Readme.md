# Express boilerplate #

This is a boiler plate for developing an express NodeJS REST API.

## Kick Off

*    **Include steps for starting the server on dev mode**

*    **Include steps for starting with Docker**

*    **Include steps for starting on production mode**

## About the branches

This boiler plate include various branches with different technology implementations

*   **master** : This is the basic branch that includes:
    * **MySQL & Seqelize**
    * **MongoDB & Mongosse**
    * **Swagger**
    * **Winston Logger**
    ....

*   **Inversify** : This branch includes the boiler plate to start an Inversify project
*   **Redis** : This branch includes the boiler plate with a Redis 

## Structure

    express-boilerplate
    	lib [community convention for server-side code]
    		db [or "models" if preferred, manages connection to DB and exposes models]
    		handler [application logic, actual implementation of the routes]
    		router [routes definition]
    		config [server configuration, could be a directory with multiple files in a more complex project]
    		server [creates and initializes the HTTP server]
    	test [community convention for automated unit test files]

## Configuration variables

    * **Config server**
    * **Local env Vars**

## Testing

## Use of "debug"

Explain how to use debugging with VSCode
    Local DEV
    
    Docker

## CI/CD

This project uses ... for automatic building (docker image, artifact, run test...)
This project uses ... for automatic deploying (kubernetes, server ...)

## Documentation

* **Swagger**
* **Postman**