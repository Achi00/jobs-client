"use server";

import { cookies } from "next/headers";

export async function deleteCookie() {
  // Delete the cookie
  (await cookies()).delete("connect.sid");
}
