package handlers

import (
	"fmt"
	"net/http"
)

func GetAllBlogs(w http.ResponseWriter, r *http.Request) {
	fmt.Println("this will provide all books")

}
