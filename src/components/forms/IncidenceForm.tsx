
import { useIncidenceForm } from "@/hooks";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, RadioGroup, RadioGroupItem, Input, Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "../ui";
import { IncidenceCriticality } from "@/types";
import { Switch } from "../ui/switch";

export function IncidenceForm() {
  const { form, onSubmit } = useIncidenceForm();

  
  return (
    <Card className="w-[380px]">
       <CardHeader>
        <CardTitle>Incidence Form</CardTitle>
        <CardDescription>This is a form demo</CardDescription>
      </CardHeader>
       <CardContent className="grid gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Title..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Description..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="criticality"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Criticality Level</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row space-y-1 space-x-3"
                  >
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={IncidenceCriticality.High} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        High
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={IncidenceCriticality.Medium} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Medium
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={IncidenceCriticality.Low}/>
                      </FormControl>
                      <FormLabel className="font-normal">Low</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-5 ">
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                     className="bg-slate-300"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          <Button type="submit" className="bg-red-400">
            Submit
          </Button>
        </form>
        </Form>
      </CardContent>
      <CardFooter>
        <CardDescription>This is simple use case for a basic incidence!</CardDescription>
        </CardFooter>
    </Card>
  );
}





