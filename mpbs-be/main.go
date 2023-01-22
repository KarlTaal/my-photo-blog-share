package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/swaggo/echo-swagger"
	"mpbs-be/controller"
	_ "mpbs-be/docs"
)

// @title Echo Swagger API
// @version 1.0

// @host localhost:1323
// @BasePath /
// @schemes http
func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORS())

	e.GET("/swagger/*", echoSwagger.WrapHandler)

	controller.InitHealthRoutes(e)
	controller.InitSupportRoutes(e)

	e.Logger.Fatal(e.Start(":1323"))
}
