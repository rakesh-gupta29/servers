package handlers

import (
	"fmt"
	"net/http"

	"github.com/rakesh-gupta29/blog-backend/utils"
)

func writeJSON(w http.ResponseWriter, status int, message string) {
	envp := map[string]interface{}{"message": message}

	err := utils.WriteJSON(w, status, envp, nil)
	if err != nil {
		fmt.Println("error writing the json error response")
		w.WriteHeader(500)
	}
}

func ErrorMethodNotAllowed(w http.ResponseWriter, r *http.Request) {
	message := "Requested method is not supported for this resource."
	writeJSON(w, http.StatusNotFound, message)

}

func ErrorNotFound(w http.ResponseWriter, r *http.Request) {
	message := "Requsted resource could not be found"
	writeJSON(w, http.StatusNotFound, message)
}

func ErrorBadRequest(w http.ResponseWriter, r *http.Request) {
	message := "Bad request"
	writeJSON(w, http.StatusNotFound, message)
}

func ErrorTooManyRequest(w http.ResponseWriter, r *http.Request) {
	message := "Too Many Requests"
	writeJSON(w, http.StatusNotFound, message)
}

func logError(r *http.Request, err error) {
	fmt.Println("logging for errors will be included here")
	// log additional info of the error
}

func ErrorInternalServer(w http.ResponseWriter, r *http.Request, err error) {
	logError(r, err)
	// this is for logging the errors. otherwise no indicaiton is to be
	//given to client as to where the server went wrong.

	message := "Server encountered a problem while processing your request."
	writeJSON(w, http.StatusInternalServerError, message)
}
