"use server";

import { cookies } from "next/headers";

export async function deleteCookie() {
  // Delete the cookie
  cookies().delete({
    name: "connect.sid",
    domain: ".woedcrafter.io",
    path: "/",
    secure: true,
    httpOnly: true,
    sameSite: "none",
  });

  // Additionally, set an expired cookie
  cookies().set({
    name: "connect.sid",
    value: "",
    domain: ".woedcrafter.io",
    expires: new Date(0),
    path: "/",
    secure: true,
    httpOnly: true,
    sameSite: "none",
  });
}
