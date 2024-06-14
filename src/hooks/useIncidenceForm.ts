import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IncidenceCriticality, IncidenceFormValues } from "@/types";
import { incidenceFormSchema } from "@/lib";
import {  useToast } from "@/components/ui/toast/use-toast";
import { ToastAction } from "@/components/ui/toast/toast";

export function useIncidenceForm() {
  const { toast } = useToast()
  const form = useForm<IncidenceFormValues>({
    resolver: zodResolver(incidenceFormSchema),
    defaultValues: {
      title: "",
      description: "",
      criticality: IncidenceCriticality.Low,
      status: true,
    },
  });

  const actionElement: ReactElement = React.createElement(ToastAction, { altText: "Goto schedule to undo" }, "Undo");

      //  <ToastAction altText="Goto schedule to undo">Undo</ToastAction>

  function onSubmit(values: IncidenceFormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
     toast({
          title: "Form submitted successfully!",
          description: "You can undo this action.",
          action: actionElement,
        });
  }

  return {
    form,
    onSubmit,
  };
}
