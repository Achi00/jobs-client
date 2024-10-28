import { fetchJobs, fetchFeaturedJobs, fetchUserData } from "@/lib/fetch";
import JobsList from "@/components/jobs/JobsList";
import React from "react";
import { cookies } from "next/headers";
import { type } from "os";

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
  params: { slug: string };
}

export const dynamic = "force-dynamic";

const JobsPage = async ({ searchParams, params }: PageProps) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get("connect.sid")?.value || "";
  const user = await fetchUserData(cookie);

  const searchQuery =
    typeof searchParams?.search === "string" ? searchParams?.search : "";

  const type = searchParams?.type === "featured" ? "featured" : "regular";
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 20;

  console.log(type);

  if (!user) {
    type == "regular";
  }

  const jobsData =
    type === "featured" && user
      ? await fetchFeaturedJobs(page, limit, user._id)
      : await fetchJobs({ page, limit, search: searchQuery || "" });

  if (!jobsData) {
    throw new Error("Failed to fetch jobs");
  }

  console.log(user?._id);

  return (
    <JobsList
      showPagination={true}
      jobsData={jobsData}
      type={type}
      page={page}
      limit={limit}
      user={user!}
      searchParams={searchParams}
    />
  );
};

export default JobsPage;
