import z from "zod";

export const formSchema = z.object({
  from: z.string().email(),
  subject: z.string(),
  message: z.string()
})
