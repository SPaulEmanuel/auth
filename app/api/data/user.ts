import { prisma } from "@/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    const user = prisma.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const getUserByID = async (id: string) => {
  try {
    const user = prisma.user.findUnique({ where: { id } });
  } catch {
    return null;
  }
};
