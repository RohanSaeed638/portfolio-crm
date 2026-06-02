export type LeadStatus =
  | "New"
  | "Contacted"
  | "Discovery"
  | "Proposal Sent"
  | "Negotiation"
  | "Won"
  | "Lost";

export type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  source: string;
  status: LeadStatus;
  budget: string;
  notes: string;
  follow_up_date: string | null;
  created_at: string;
};