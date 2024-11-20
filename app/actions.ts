"use server";

import { cookies } from "next/headers";

export async function deleteCookie() {
  // Delete the cookie
  cookies().delete({
    name: "connect.sid",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  });

  // Additionally, set an expired cookie
  cookies().set({
    name: "connect.sid",
    value: "",
    expires: new Date(0),
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  });
}
