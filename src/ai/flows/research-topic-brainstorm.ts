'use server';

/**
 * @fileOverview An AI-powered research topic brainstorm tool.
 *
 * - researchTopicBrainstorm - A function that generates research topics based on a subject area.
 * - ResearchTopicBrainstormInput - The input type for the researchTopicBrainstorm function.
 * - ResearchTopicBrainstormOutput - The return type for the researchTopicBrainstorm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResearchTopicBrainstormInputSchema = z.object({
  subjectArea: z.string().describe('The subject area to brainstorm research topics for.'),
});
export type ResearchTopicBrainstormInput = z.infer<typeof ResearchTopicBrainstormInputSchema>;

const ResearchTopicBrainstormOutputSchema = z.object({
  researchTopics: z.array(z.string()).describe('A list of brainstormed research topics.'),
});
export type ResearchTopicBrainstormOutput = z.infer<typeof ResearchTopicBrainstormOutputSchema>;

export async function researchTopicBrainstorm(
  input: ResearchTopicBrainstormInput
): Promise<ResearchTopicBrainstormOutput> {
  return researchTopicBrainstormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'researchTopicBrainstormPrompt',
  input: {schema: ResearchTopicBrainstormInputSchema},
  output: {schema: ResearchTopicBrainstormOutputSchema},
  prompt: `You are an expert academic research assistant. Your job is to brainstorm possible research topics for students, based on their subject area.  Generate a list of diverse and interesting research topics based on the provided subject area.  Return the research topics as a JSON array of strings.

Subject Area: {{{subjectArea}}} `,
});

const researchTopicBrainstormFlow = ai.defineFlow(
  {
    name: 'researchTopicBrainstormFlow',
    inputSchema: ResearchTopicBrainstormInputSchema,
    outputSchema: ResearchTopicBrainstormOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
