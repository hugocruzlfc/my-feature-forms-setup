import { z } from "zod";
import { incidenceFormSchema } from "@/lib";

export type IncidenceFormValues = z.infer<typeof incidenceFormSchema>;
