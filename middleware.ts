export const config = {
  matcher: ["/users/:id*", "/dashboard/:path*"],
};

export { default } from "next-auth/middleware";
