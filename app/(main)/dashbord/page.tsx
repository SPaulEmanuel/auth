import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function Dashboard() {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="h-96 w-96">
        <p className="text-center font-medium text-2xl">Login Form</p>

        <form>
          <Button variant="default" size="lg">
            <FcGoogle />
          </Button>
        </form>
      </div>
    </div>
  );
}
