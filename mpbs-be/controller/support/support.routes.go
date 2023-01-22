package support

import "github.com/labstack/echo/v4"

func InitSupportRoutes(e *echo.Echo) {
	e.POST("/support/ticket", CreateSupportTicketHandler)
}
