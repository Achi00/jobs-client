import axios from "axios";
import { cookies } from "next/headers";
import { User } from "@/types";
import ProfileForm from "@/components/profile/ProfileForm";

async function fetchUserData(cookie: string): Promise<User> {
  const API_BASE_URL = process.env.API_BASE_URL as string;
  const response = await axios.get(`${API_BASE_URL}/auth/profile`, {
    headers: {
      Cookie: `connect.sid=${cookie}`,
    },
  });

  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new Error("Failed to fetch data");
  }
}

export default async function ProfilePage() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("connect.sid")?.value || "";
  const user = await fetchUserData(cookie);

  return (
    <div className="w-full h-screen p-7">
      <h2 className="scroll-m-20 border-b px-8 pb-5 text-3xl font-semibold tracking-tight first:mt-0">
        Account
      </h2>
      <ProfileForm user={user} />
    </div>
  );
}
