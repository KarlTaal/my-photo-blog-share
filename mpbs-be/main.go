package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/swaggo/echo-swagger"
	_ "mpbs-be/docs"
	"mpbs-be/internal/health"
	"mpbs-be/internal/support"
	"net/http"
)

// @title Echo Swagger API
// @version 1.0

// @host localhost:1323
// @BasePath /mpbs/api
// @schemes http
func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"https://karltaal.github.io"},
		AllowMethods: []string{http.MethodGet, http.MethodPost},
	}))

	e.GET("/swagger/*", echoSwagger.WrapHandler)

	baseUrl := "/mpbs/api"
	health.InitHealthRoutes(e, baseUrl)
	support.InitSupportRoutes(e, baseUrl)

	e.Logger.Fatal(e.Start(":1323"))
}
