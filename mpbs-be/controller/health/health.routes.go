package health

import "github.com/labstack/echo/v4"

func InitHealthRoutes(e *echo.Echo) {
	e.GET("/healthcheck", ServerStatusHandler)
}
