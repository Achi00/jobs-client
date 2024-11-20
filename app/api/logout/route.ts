import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Create response object
    const response = NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );

    // Delete the cookie
    response.cookies.set("connect.sid", "", {
      path: "/",
      domain: process.env.NEXT_PUBLIC_DOMAIN,
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "none",
      maxAge: 0,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
