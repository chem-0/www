import { z } from "zod";

const chatOutput = z.object({
  messages: z.array(
    z.object({
      role: z.union([
        z.literal("user"),
        z.literal("assistant"),
        z.literal("system"),
      ]),
      content: z.string(),
    })
  )
})

export type ChatOutput = z.infer<typeof chatOutput>;
