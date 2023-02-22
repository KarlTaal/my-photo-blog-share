package support

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"github.com/labstack/echo/v4"
	"mpbs-be/generated/protocolbuffers/protobuf/go/payloads"
	"net/http"
	_ "net/http/httputil"
	"os"
	"time"
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

	postBody := createClickUpTicketPostMessage(supportTicket)

	jsonValue, _ := json.Marshal(postBody)
	req, err := http.NewRequest("POST", getClickUpPostTicketUrl(), bytes.NewBuffer(jsonValue))
	req.Header.Add("Authorization", os.Getenv("CLICK_UP_API_TOKEN"))
	req.Header.Add("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)

	if err != nil || resp.StatusCode != http.StatusOK {
		return errors.New("support ticket submission failed")
	}

	return c.JSON(http.StatusOK, nil)
}

func getClickUpPostTicketUrl() string {
	return fmt.Sprintf("https://api.clickup.com/api/v2/list/%s/task", os.Getenv("SUPPORT_TICKET_LIST_ID"))
}

func createClickUpTicketPostMessage(supportTicket *payloads.SupportTicket) ClickUpPostTicket {
	return ClickUpPostTicket{
		Name:        getTicketTitle(),
		Description: supportTicket.Body,
		Tags: []string{
			"support",
			resolveSupportTicketTypeToClickUpTag(supportTicket.Type),
		},
		NotifyAll: true,
	}
}

func getTicketTitle() string {
	location, _ := time.LoadLocation("Europe/Tallinn")
	currentTime := time.Now().In(location).Format("01.02.2006 15:04")
	return fmt.Sprintf("Support ticket %s", currentTime)
}

func resolveSupportTicketTypeToClickUpTag(ticketType payloads.SupportTicketType) string {
	switch ticketType {
	case payloads.SupportTicketType_BUG:
		return "bug"
	case payloads.SupportTicketType_FEATURE:
		return "feature"
	case payloads.SupportTicketType_GENERAL:
		return "general"
	default:
		return "unknown"
	}
}

type ClickUpPostTicket struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
	NotifyAll   bool     `json:"notify_all"`
}
