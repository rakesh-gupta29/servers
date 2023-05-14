package router

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/rakesh-gupta29/blog-backend/handlers"
)

func rootHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "static/index.html")
}

func MountWebRoute() http.Handler {
	router := httprouter.New()

	router.NotFound = http.HandlerFunc(handlers.ErrorNotFound)
	router.MethodNotAllowed = http.HandlerFunc(handlers.ErrorMethodNotAllowed)
	router.HandlerFunc(http.MethodGet, "/", handlers.HandleHome)
	// router.HandlerFunc(http.MethodGet, "/about", handlers.HandleAbout)
	// router.HandlerFunc(http.MethodGet, "/blog", handlers.HandleBlog)
	// router.HandlerFunc(http.MethodGet, "/blog/:filename", handlers.HandleBlogDetails)
	// router.ServeFiles("/_astro/*filepath", http.Dir("static/_astro"))
	// router.ServeFiles("/chunks/*filepath", http.Dir("static/chunks"))

	return router
}
