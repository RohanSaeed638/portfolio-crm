import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional(),
  company: z.string().optional(),
  source: z.string().optional(),
  status: z.string(),
  budget: z.string().optional(),
  notes: z.string().optional(),
});

export type LeadFormValues =
  z.infer<typeof leadSchema>;