import { z } from "zod";

const chemicalReactionOutput = z.object({
  attributes: z.object({
    color: z.string(),
    odor: z.string(),
    solubility: z.string(),
    taste: z.string(),
  }),
  reactants: z.object({
    symbol: z.string()
  }),
  response: z.string(),
  results: z.array(
    z.object({
      state: z.enum(["l", "g", "s", "aq", "unknown"]),
      symbol: z.string(),
    }),
  ),
});

export type ChemicalReactionOutput = z.infer<typeof chemicalReactionOutput>;
