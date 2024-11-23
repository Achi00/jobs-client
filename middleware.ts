import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const sessionId = req.cookies.get("connect.sid");
  console.log("Middleware invoked");
  console.log("Session ID:", sessionId);

  // Allow access to the home page and avoid infinite loop
  if (
    req.nextUrl.pathname === "/" &&
    req.nextUrl.searchParams.get("alert") === "auth"
  ) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to home page with alert
  if (!sessionId && req.nextUrl.pathname !== "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    url.searchParams.set("alert", "autherror");
    console.log("Redirecting to home due to missing session ID");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*", // Add other protected routes here
  ],
};
