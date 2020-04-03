# MicroMapper

This is the backend of the Nexworld MicroMapper project. Go Nexworld!

For the moment this is just a skeleton and there is no complexity behind the endpoints.

## Requirements

For development, you will only need Node.js installed.

## Install

```sh
  $ git clone https://github.com/nexmicroservices/micromapper
  $ cd micromapper/Backend
  $ npm install
```

## Running the project

```sh
  $ npm start
```

By default, the API will be exposed on port 8080.

Endpoint : 
- GET /services             (List all services)
- GET /services/{id}        (Get a specific service)
- POST /services            (Create a service)
- PUT /services/{id}        (Update a service)
- DELETE /services/{id}     (Delete a service)
