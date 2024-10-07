import { signIn } from "@/auth";

import { FcGoogle } from "react-icons/fc";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="flex gap-3">
      <Button className="w-full" variant="outline" size="lg">
        <FcGoogle />
      </Button>

      <Button className="w-full" variant="outline" size="lg">
        <FaGithub />
      </Button>
    </div>
  );
};
