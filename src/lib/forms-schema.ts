import { z } from "zod";

export const incidenceFormSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(500),
  criticality: z.enum(["low", "medium", "high"]),
  status: z.enum(["open", "closed"]),
});
