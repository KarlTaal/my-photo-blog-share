package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/swaggo/echo-swagger"
	_ "mpbs-be/docs"
	"mpbs-be/internal/constants"
	"mpbs-be/internal/health"
	"mpbs-be/internal/support"
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

	e.GET(constants.SwaggerRoute, echoSwagger.WrapHandler)

	health.InitHealthRoutes(e, constants.BaseRoute)
	support.InitSupportRoutes(e, constants.BaseRoute)

	e.Logger.Fatal(e.Start(constants.Port))
}
