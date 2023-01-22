package controller

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

// InitHealthRoutes godoc
//
//	@Summary		Health check
//	@Description	Returns value if server is running
//	@Success		200	{string}	string "Status comment"
//	@Router			/healthcheck [get]
func InitHealthRoutes(e *echo.Echo) {
	e.GET("/healthcheck", func(c echo.Context) error {
		return c.JSON(http.StatusOK, "Server is up and running")
	})
}
