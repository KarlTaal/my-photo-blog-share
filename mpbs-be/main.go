package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/swaggo/echo-swagger"
	"mpbs-be/controller/health"
	"mpbs-be/controller/support"
	_ "mpbs-be/docs"
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
	e.Use(middleware.CORS())

	e.GET("/swagger/*", echoSwagger.WrapHandler)

	baseUrl := "/mpbs/api"
	health.InitHealthRoutes(e, baseUrl)
	support.InitSupportRoutes(e, baseUrl)

	e.Logger.Fatal(e.Start(":1323"))
}
