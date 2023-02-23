package support

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/labstack/echo/v4"
	"mpbs-be/generated/protocolbuffers/protobuf/go/payloads"
	"mpbs-be/internal/constants"
	"net/http"
	_ "net/http/httputil"
	"os"
	"time"
)

// createSupportTicketHandler godoc
//
//	@Summary		Support ticket create
//	@Description	Create new support ticket
//	@Accept			json
//	@Produce		json
//	@Param			ticket	body	payloads.SupportTicket	true	"Add support ticket"
//	@Router			/support/ticket [post]
func createSupportTicketHandler(c echo.Context) error {
	supportTicket := new(payloads.SupportTicket)
	if err := c.Bind(supportTicket); err != nil {
		return err
	}

	postBody := createClickUpTicketPostMessage(supportTicket)

	jsonValue, _ := json.Marshal(postBody)
	req, err := http.NewRequest("POST", getClickUpPostTicketUrl(), bytes.NewBuffer(jsonValue))
	req.Header.Add("Authorization", os.Getenv(constants.SupportTicketApiTokenVariableKey))
	req.Header.Add("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)

	if err != nil || resp.StatusCode != http.StatusOK {
		return echo.ErrBadRequest
	}

	return c.JSON(http.StatusOK, nil)
}

func getClickUpPostTicketUrl() string {
	return fmt.Sprintf(clickUpPostTicketUrl, os.Getenv(constants.SupportTicketListIdVariableKey))
}

func createClickUpTicketPostMessage(supportTicket *payloads.SupportTicket) clickUpPostTicket {
	return clickUpPostTicket{
		Name:        getTicketTitle(),
		Description: supportTicket.Body,
		Tags: []string{
			clickUpTagSupport,
			resolveSupportTicketTypeToClickUpTag(supportTicket.Type),
		},
		NotifyAll: true,
	}
}

func getTicketTitle() string {
	location, _ := time.LoadLocation(constants.EuropeTallinnLocale)
	currentTime := time.Now().In(location).Format(constants.DateTimeDisplayFormat)
	return fmt.Sprintf(clickUpTicketTitle, currentTime)
}

func resolveSupportTicketTypeToClickUpTag(ticketType payloads.SupportTicketType) string {
	switch ticketType {
	case payloads.SupportTicketType_BUG:
		return clickUpTagBug
	case payloads.SupportTicketType_FEATURE:
		return clickUpTagFeature
	case payloads.SupportTicketType_GENERAL:
		return clickUpTagGeneral
	default:
		return clickUpTagUnknown
	}
}

type clickUpPostTicket struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
	NotifyAll   bool     `json:"notify_all"`
}
