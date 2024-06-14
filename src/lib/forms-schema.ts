import { IncidenceCriticality } from "@/types";
import { z } from "zod";

export const incidenceFormSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(500),
  criticality: z.nativeEnum(IncidenceCriticality
    , {
    required_error: "You need to select a criticality level.",
  }),
  status: z.boolean().default(true),
});
