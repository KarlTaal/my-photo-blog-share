package health

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

// ServerStatusHandler godoc
//
//	@Summary		Health check
//	@Description	Returns value if server is running
//	@Success		200	{string}	string "Status comment"
//	@Router			/healthcheck [get]
func serverStatusHandler(c echo.Context) error {
	return c.JSON(http.StatusOK, okMessage)
}
