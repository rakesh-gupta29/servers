package main

import "github.com/rakesh-gupta29/blog-backend/app"

func main() {
	err := app.LoadAndRun()
	if err != nil {
		panic(err)
	}
}
