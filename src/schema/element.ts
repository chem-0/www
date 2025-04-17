import { z } from "zod";

const elementSchema = z.object({
  number: z.number(),
  symbol: z.string(),
  name: z.string(),
  color: z.string(),
  state: z.string(),
  smiles: z.string(),
});

export type ElementSchema = z.infer<typeof elementSchema>;
