// src/ai/flows/smart-search.ts
'use server';
/**
 * @fileOverview A smart search AI agent that allows users to quickly find information across the website by understanding natural language queries.
 *
 * - smartSearch - A function that handles the smart search process.
 * - SmartSearchInput - The input type for the smartSearch function.
 * - SmartSearchOutput - The return type for the smartSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartSearchInputSchema = z.object({
  query: z.string().describe('The natural language query from the user.'),
});
export type SmartSearchInput = z.infer<typeof SmartSearchInputSchema>;

const SmartSearchOutputSchema = z.object({
  results: z
    .array(z.string())
    .describe('The relevant information found across the website.'),
});
export type SmartSearchOutput = z.infer<typeof SmartSearchOutputSchema>;

export async function smartSearch(input: SmartSearchInput): Promise<SmartSearchOutput> {
  return smartSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartSearchPrompt',
  input: {schema: SmartSearchInputSchema},
  output: {schema: SmartSearchOutputSchema},
  prompt: `You are an AI-powered search assistant for the PHÒNG KẾ HOẠCH - ĐẦU TƯ Portal.

  Your goal is to provide the most relevant information from across the website in response to the user's query.

  Query: {{{query}}}

  Results:
  `,
});

const smartSearchFlow = ai.defineFlow(
  {
    name: 'smartSearchFlow',
    inputSchema: SmartSearchInputSchema,
    outputSchema: SmartSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
