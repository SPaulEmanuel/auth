"use client";
import { Input } from "@/app/components/input/input";
import { signInSchema } from "@/app/lib/zod";
import Link from "next/link";
import { useFormState } from "react-dom";

const handlerSignUp = async (state: any, formData: FormData) => {
  const validatedFields = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields),
    });

    if (response.ok) {
      // setSuccess(true);
      // setError(null);
    } else {
      // const errorData = await response.json();
      // setError(errorData.error);
      // setSuccess(false);
    }
  } catch (err) {
    // setError("Something went wrong");
    // setSuccess(false);
  }
};

export default function Home() {
  const [state, action] = useFormState(handlerSignUp, undefined);

  return (
    <form className="flex justify-center h-screen items-center" action={action}>
      <div className="flex flex-col gap-10 min-w-72">
        <div className="h-10">
          <Input
            nameLabel="Email"
            id="email"
            name="email"
            type="email"
            required
          />
          {state?.errors?.email && (
            <p className=" text-red-500">{state.errors.email}</p>
          )}
        </div>

        <div className="h-10">
          <Input nameLabel="Password" id="Password" name="Password" required />

          {state?.errors?.password && (
            <p className=" text-red-500">{state.errors.password}</p>
          )}
        </div>

        <div className="flex flex-col justify-center gap-3">
          <Link href="/login" className="text-center">
            Login with account
          </Link>
          {/* <button>Sign up with Google</button>
          <button>Sign up with GitHub</button> */}
        </div>

        <button
          type="submit"
          className="gap-4 inline-flex  items-center justify-center rounded-full border border-transparent outline-primary-300 outline font-500 outline-md outline-offset-[2px] btn-sm md:btn-md lg:btn-lg cursor-pointer"
        >
          Register
        </button>
      </div>
    </form>
  );
}
