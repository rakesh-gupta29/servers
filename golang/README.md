## Gyansila

Book suggestion app for suggesting books, upvoting and downvoting books and writing reviews of books.

> _This is still WORK IN PROGRESS_

> _Please do not use it unless your backend is client agnostic: when it does not care about the client. Otherwise, go with NextJS or NuxtJS. They are better options in that case. This backend is useful only beyond CRUD._

## Prerequisites

To clone and run project, you must have Golang installed and set up on your local machine.

## Features

- routing - using [httprouter](https://github.com/julienschmidt/httprouter) package; Making the
- static file serving: server static files using h[httprouter](https://github.com/julienschmidt/httprouter) package: serve all files under the [static](https://www.github.com/rakesh-gupta29/golang-server/tree/main/static) directory
- Utils for handling all errors with proper headers and messages.

## Installation

To clone and run the following project, run the following commands

```
 $ git clone https://www.github.com/rakesh-gupta29/golang-web-server.git
 $ cd golang-web-server
 $ go  mod tidy
 $ go run
```

Before we can run the project, ceate a `.env` file ar the root of the project and fill appropriate values for following properties.

```
port = runtime port for server (number)
```

## Deployment

To build the code for deployment, build the code for deployment using following command

```
go  build
```

## Author

[Rakesh Gupta](https://www.github.com/rakesh-gupta29)
