import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import { cookies } from "next/headers";
import { fetchUserData } from "@/lib/fetch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Search",
  description: "Find your dream tech job",
};

export default async function RootLayout({
  children,
  searchParams,
}: Readonly<{
  children: React.ReactNode;
  searchParams?: { [key: string]: string | string[] | undefined };
}>) {
  const cookieStore = cookies();
  const cookie = cookieStore.get("connect.sid")?.value || "";
  let user = null;

  if (cookie) {
    user = await fetchUserData(cookie);
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar user={user ?? undefined} />
        <div className=" pt-16">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
