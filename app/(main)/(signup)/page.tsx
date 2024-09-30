import { Input } from "@/app/components/input/input";
import { signIn } from "@/auth";
import Link from "next/link";

export default function Home() {
  return (
    <form
      className="flex justify-center h-screen items-center"
      // action={async (formData) => {
      //   "use server";
      //   const data = await signIn("credentials", formData);
      //   console.log(data);
      // }}
    >
      <div className="flex flex-col gap-10 min-w-72">
        <Input nameLabel="Email" id="Email" name="Email" required />

        <Input nameLabel="Password" id="Password" name="Password" required />

        <div className="flex flex-col justify-center gap-3">
          <Link href="/login" className=" text-center">
            Login with account
          </Link>
          {/* <button>Sign up with Google</button>
          <button>Sign up with GitHub</button> */}
        </div>

        <button className="gap-4 inline-flex  items-center justify-center rounded-full border border-transparent outline-primary-300 outline font-500 outline-md outline-offset-[2px] btn-sm md:btn-md lg:btn-lg cursor-pointer">
          Register
        </button>
      </div>
    </form>
  );
}
