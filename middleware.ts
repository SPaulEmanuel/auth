import authConfig from "@/auth.config";
import NextAuth from "next-auth";

export const { auth } = NextAuth(authConfig);

export default auth((req: any) => {
  const isLoggedIn = req.auth;
  debugger;
  console.log("ROUTEEEEEE:");
});

// "/", "/login"
export const config = {
  matcher: [],
};
