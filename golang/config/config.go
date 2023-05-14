package config

import (
	"log"

	"github.com/caarlos0/env"
	"github.com/joho/godotenv"
)

type Config struct {
	Address string `env:"ADDRESS" envDefault:"localhost:4000"`
	Mode    string `env:"MODE" envDefault:"dev"`
}

func LoadConfig() (*Config, error) {
	err := godotenv.Load("config.env")

	if err != nil {
		log.Println("Error Loading ENV Variables.", err)
	}
	cfg := Config{}
	err = env.Parse(&cfg) // parsing to the struct
	if err != nil {
		return nil, err
	}
	return &cfg, nil
}
