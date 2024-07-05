import { cookies } from "next/headers";
import ProfileForm from "@/components/profile/ProfileForm";
import { fetchUserData } from "@/lib/fetch";
import { redirect } from "next/navigation";

export default async function ProfilePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const cookieStore = cookies();
  const cookie = cookieStore.get("connect.sid")?.value || "";
  const user = await fetchUserData(cookie);

  if (!user) {
    redirect("/");
  }

  return (
    <div className="w-full h-screen p-7">
      <h2 className="scroll-m-20 border-b px-8 pb-5 text-3xl font-semibold tracking-tight first:mt-0">
        Account
      </h2>
      <ProfileForm user={user || undefined} />
    </div>
  );
}
