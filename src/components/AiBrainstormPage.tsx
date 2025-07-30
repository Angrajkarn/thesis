"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Lightbulb, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { runAiBrainstorm } from "@/app/actions";

const formSchema = z.object({
  subjectArea: z.string().min(3, {
    message: "Subject area must be at least 3 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function AiBrainstormPage() {
  const [researchTopics, setResearchTopics] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subjectArea: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResearchTopics([]);
    try {
      const result = await runAiBrainstorm(data);
      if (result && result.researchTopics) {
        setResearchTopics(result.researchTopics);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to brainstorm topics. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred.",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="brainstorm" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline">
            AI Research Topic Brainstormer
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Stuck on a topic? Use our free AI-powered tool to generate unique and compelling research topic ideas in seconds. Enter a subject area below to get started.
          </p>
        </div>
        <div className="mx-auto w-full max-w-lg space-y-4">
          <Card>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="subjectArea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Subject Area</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 'Artificial Intelligence in Healthcare'" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      "Brainstorm Topics"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {(isLoading || researchTopics.length > 0) && (
            <Card className="text-left">
              <CardHeader>
                <CardTitle>Generated Research Topics</CardTitle>
                <CardDescription>Here are some ideas to get you started.</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading && (
                   <div className="space-y-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-start space-x-2 animate-pulse">
                          <div className="mt-1 h-4 w-4 rounded-full bg-muted" />
                          <div className="h-4 flex-1 rounded-md bg-muted" />
                        </div>
                      ))}
                    </div>
                )}
                {!isLoading && researchTopics.length > 0 && (
                   <ul className="space-y-2">
                    {researchTopics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <Lightbulb className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
