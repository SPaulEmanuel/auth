"use server";
import bcrypt from "bcryptjs";
import { ZRegisterSchema } from "@/lib/zod";
import { z } from "zod";
import { prisma } from "@/prisma";
import { getUserByEmail } from "./data/user";

export const register = async (values: z.infer<typeof ZRegisterSchema>) => {
  const validatedFields = ZRegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, name, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "User created!" };
};
