import { ZSchema } from "@/lib/zod";
import { z } from "zod";

export const login = async (values: z.infer<typeof ZSchema>) => {
  const validatedFields = ZSchema.safeParse(values);
  return { error: "Invalid fields" };
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
};
