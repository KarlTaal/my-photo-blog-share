package support

import (
	"github.com/labstack/echo/v4"
	"mpbs-be/generated/protocolbuffers/protobuf/go/payloads"
	"net/http"
	_ "net/http/httputil"
)

// CreateSupportTicketHandler godoc
//
//	@Summary		Support ticket create
//	@Description	Create new support ticket
//	@Accept			json
//	@Produce		json
//	@Param			ticket	body	payloads.SupportTicket	true	"Add support ticket"
//	@Router			/support/ticket [post]
func CreateSupportTicketHandler(c echo.Context) error {
	supportTicket := new(payloads.SupportTicket)
	if err := c.Bind(supportTicket); err != nil {
		return err
	}
	return c.JSON(http.StatusOK, nil)
}