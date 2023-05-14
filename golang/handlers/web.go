package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"

	"github.com/rakesh-gupta29/blog-backend/utils"
)

type Book struct {
	Id               string   `json:"id"`
	Title            string   `json:"title"`
	Subtitle         string   `json:"subtitle"`
	Authors          []string `json:"authors"`
	AverageRating    int      `json:"averageRating"`
	Description      string   `json:"description"`
	Langauge         string   `json:"language"`
	PrintedPageCount string   `json:"printedPages"`
	PublishedDate    string   `json:"publishedDate"`
	Publisher        string   `json:"publisher"`
	Images           []string `json:"images"`
	Thumbnail        string   `json:"thumbnail"`
	Mrp              string   `json:"mrp"`
	Category         string   `json:"category"`
}

func HandleHome(w http.ResponseWriter, r *http.Request) {
	jsonFile, err := os.Open("assets/books.json")
	if err != nil {
		fmt.Println(err)
	}

	var books []Book

	if err != nil {
		fmt.Println(err)
	}

	byteData, err := ioutil.ReadAll(jsonFile)
	json.Unmarshal(byteData, &books)

	utils.WriteJSON(w, http.StatusOK, books, nil)
	defer jsonFile.Close()

}

func HandleAbout(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "static/about/index.html")
}
func HandleContact(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "static/contact/index.html")
}
func HandleBlog(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "static/blog/index.html")
}
func HandleBlogDetails(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "static/blog/desc.html")
}
