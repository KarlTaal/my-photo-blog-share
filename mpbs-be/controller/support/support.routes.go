package support

import "github.com/labstack/echo/v4"

func InitSupportRoutes(e *echo.Echo, baseUrl string) {
	e.POST(baseUrl+"/support/ticket", CreateSupportTicketHandler)
}
