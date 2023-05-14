## Express Web Server

Notes manage project for learning how to build NodeJS and ExpressJS projects

> This is still WORK IN PROGRESS

## Prerequisites

To clone and run project, you must have NodeJS installed and set up on your local machine.

## Installation

To clone and run the following project. run the following commands

```
 $ git clone https://www.github.com/rakesh-gupta29/node-web-server.git
 $ cd node-web-server
 $ npm i
 $ npm run dev
```

Create a .env file at root of project and add following variables.

```
APP_NAME = name of app
KEYWORDS  = array of keywords
APP_DESCRIPTION  = desription for app
AUTHOR = name of author
APP_URL = url for file
NODE_RUNTIME_ENV = env for  runtime "development" | "production"
RUNTIME_PORT = number for runtime port
API_ROUTES_PREFIX = string for API routes
CORS_ENABLED = boolean for CORS
MAX_UPLOAD_LIMIT  = Upper limit for upload
MONGOOSE_URL : URL for mongoDB Atlas
```

## Deployment

To build the code for deployment, build the code for deployment using following command

```
npm run build
```

## Author

[Rakesh Gupta](https://www.github.com/rakesh-gupta29)
