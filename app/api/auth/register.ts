// app/api/auth/register.ts (pentru App Router) sau pages/api/auth/register.ts (pentru Pages Router)
import { prisma } from "@/prisma"; // Importă instanța Prisma
import bcrypt from "bcryptjs"; // Pentru a hash-ui parola
import { signInSchema } from "@/app/lib/zod"; // Schema de validare
import { NextResponse } from "next/server";

export async function Register(req: Request) {
  try {
    const body = await req.json();

    // Validează datele folosind Zod
    const { email, password } = signInSchema.parse(body);

    // Verifică dacă utilizatorul există deja
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash-uiește parola
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creează noul utilizator în baza de date
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    // Oferă un răspuns corespunzător după înregistrare
    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
