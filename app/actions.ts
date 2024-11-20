"use server";

import { cookies } from "next/headers";

export async function deleteCookie() {
  // Delete the cookie
  cookies().set("connect.sid", "", { expires: new Date(0) });
}
