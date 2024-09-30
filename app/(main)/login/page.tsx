import { Input } from "@/app/components/input/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <form className="flex justify-center h-screen items-center">
      <div className="flex flex-col gap-10 min-w-72">
        <Input onClick={() => {}} nameLabel="Email" id="Email" name="Email" />

        <Input
          onClick={() => {}}
          nameLabel="Password"
          id="Password"
          name="Password"
        />

        <div className="flex flex-col justify-center gap-3">
          <Link href="/" className=" text-center">
            Register now
          </Link>
          <button>Login up with Google</button>
          <button>Login up with GitHub</button>
        </div>

        <button className="gap-4 inline-flex  items-center justify-center rounded-full border border-transparent outline-primary-300 outline font-500 outline-md outline-offset-[2px] btn-sm md:btn-md lg:btn-lg cursor-pointer">
          Login
        </button>
      </div>
    </form>
  );
}
