"use server";

import { cookies } from "next/headers";

export async function deleteCookie() {
  // Delete the cookie
  cookies().set("connect.sid", "", {
    path: "/",
    maxAge: 0, // Ensure the cookie is removed immediately
    domain: process.env.NEXT_PUBLIC_DOMAIN, // Match the original domain
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "none",
  });
}
