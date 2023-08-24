import * as z from 'zod';
export const registerNewsSchema = z.object({
  email: z.string().email(),
});
