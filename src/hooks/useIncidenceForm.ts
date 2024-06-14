import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IncidenceCriticality, IncidenceFormValues } from "@/types";
import { incidenceFormSchema } from "@/lib";

export function useIncidenceForm() {
  const form = useForm<IncidenceFormValues>({
    resolver: zodResolver(incidenceFormSchema),
    defaultValues: {
      title: "",
      description: "",
      criticality: IncidenceCriticality.Low,
      status: true,
    },
  });

  function onSubmit(values: IncidenceFormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return {
    form,
    onSubmit,
  };
}
