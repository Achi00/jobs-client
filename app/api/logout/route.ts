import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Create response object
    const response = NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );

    // Delete the cookie - fixed type signature
    response.cookies.delete({
      name: "connect.sid",
      path: "/",
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
