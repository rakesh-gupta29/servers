package email

// import (
// 	"bytes"
// 	"fmt"
// 	"log"
// 	"net/smtp"
// 	"text/template"

// 	"github.com/rakesh-gupta29/golang-server/config"
// )

// type Request struct {
// 	from    string
// 	to      []string
// 	subject string
// 	body    string
// } // struct to define the structure of an email

// const (
// 	MIME = "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";\n\n"
// )

// func NewRequest(to []string, subject string) *Request {
// 	return &Request{
// 		to:      to,
// 		subject: subject,
// 	} // returns a struct to get the struct of a typical email
// }

// func (r *Request) parseTemplate(fileName string, data interface{}) error {
// 	t, err := template.ParseFiles(fileName)
// 	if err != nil {
// 		return err
// 	}
// 	buffer := new(bytes.Buffer)
// 	if err = t.Execute(buffer, data); err != nil {
// 		return err
// 	}
// 	r.body = buffer.String()
// 	return nil
// }

// func (r *Request) sendMail() bool {
// 	app_config, _ := config.LoadConfig()
// 	body := "To: " + r.to[0] + "\r\nSubject: " + r.subject + "\r\n" + MIME + "\r\n" + r.body
// 	SMTP := fmt.Sprintf("%s:%s", app_config.SMTPServer, app_config.SMTPPort)
// 	if err := smtp.SendMail(SMTP, smtp.PlainAuth("", app_config.FromEmail, app_config.Password, app_config.SMTPServer), app_config.FromEmail, r.to, []byte(body)); err != nil {
// 		return false
// 	}
// 	return true
// }

// func (r *Request) Send(templateName string, items interface{}) {
// 	err := r.parseTemplate(templateName, items)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	if ok := r.sendMail(); ok {
// 		log.Printf("Email has been sent to %s\n", r.to)
// 	} else {
// 		log.Printf("Failed to send the email to %s\n", r.to)
// 	}
// }
