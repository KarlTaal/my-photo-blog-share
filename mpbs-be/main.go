package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
)

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORS())

	e.GET("/healthcheck", func(c echo.Context) error {
		return c.JSON(http.StatusOK, "All good!")
	})

	e.GET("/timeout", func(c echo.Context) error {
		return c.JSON(http.StatusRequestTimeout, "Timeout!")
	})

	e.GET("/error", func(c echo.Context) error {
		return c.JSON(http.StatusInternalServerError, "Internal error!")
	})

	e.GET("/auth", func(c echo.Context) error {
		return c.JSON(http.StatusForbidden, "Access denied!")
	})

	e.Logger.Fatal(e.Start(":1323"))
}
