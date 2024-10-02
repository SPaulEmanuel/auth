import bcrypt from "bcrypt";

import { ZRegisterSchema, ZSchema } from "@/lib/zod";
import { z } from "zod";

export const login = async (values: z.infer<typeof ZRegisterSchema>) => {
  const validatedFields = ZRegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, name, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);
};
