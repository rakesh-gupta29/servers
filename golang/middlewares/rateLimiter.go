package middlewares

// import (
// 	"net"
// 	"net/http"
// 	"sync"
// 	"time"

// 	"github.com/rakesh-gupta29/golang-server/handlers"
// 	"golang.org/x/time/rate"
// )

// func MiddlewareRateLimiter(next http.Handler) http.Handler {

// 	// if this is a hosted on a server , it is a good practice to use rate limiter
// 	//provider by the load balancer for late limiting.
// 	// WARNING : this is not suitable for distributed systems.

// 	type client struct {
// 		limiter  *rate.Limiter
// 		lastSeen time.Time
// 	}

// 	var (
// 		mut sync.Mutex

// 		// Update the map so the values are pointers to a client struct.

// 		clients = make(map[string]*client)
// 	)

// 	go func() {

// 		for {

// 			time.Sleep(time.Minute)

// 			mut.Lock()

// 			for ip, client := range clients {
// 				if time.Since(client.lastSeen) > 3*time.Minute {
// 					delete(clients, ip)
// 				}
// 			}

// 			mut.Unlock()
// 		}

// 	}()
// 	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

// 		if true {

// 			ip, _, err := net.SplitHostPort(r.RemoteAddr)
// 			if err != nil {
// 				handlers.ErrorInternalServer(w, r, err)
// 				return
// 			}
// 			// reading from clients map for
// 			mut.Lock()

// 			if _, found := clients[ip]; !found {
// 				clients[ip] = &client{limiter: rate.NewLimiter(2, 4)}
// 				clients[ip].lastSeen = time.Now()
// 			}

// 			if !clients[ip].limiter.Allow() {
// 				mut.Unlock()
// 				handlers.ErrorTooManyRequest(w, r)
// 				return
// 			}

// 			mut.Unlock()
// 		}

// 		next.ServeHTTP(w, r)
// 	})

// }
