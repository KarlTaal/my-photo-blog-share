export interface SupportTicket {
  type: SupportTicketType;
  body: string;
}

export enum SupportTicketType {
  GENERAL = 'general',
  FEATURE = 'feature',
  BUG = 'bug',
}
