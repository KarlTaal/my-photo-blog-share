package health

import (
	"github.com/labstack/echo/v4"
)

func InitHealthRoutes(e *echo.Echo, baseUrl string) {
	e.GET(baseUrl+"/healthcheck", serverStatusHandler)
}
