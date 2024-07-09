import { fetchJobs, fetchFeaturedJobs, fetchUserData } from "@/lib/fetch";
import JobsList from "@/components/jobs/JobsList";
import React from "react";
import { cookies } from "next/headers";

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const JobsPage = async ({ searchParams }: PageProps) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get("connect.sid")?.value || "";
  const user = await fetchUserData(cookie);
  if (!user) return;

  const type = searchParams?.type === "featured" ? "featured" : "regular";
  const page = searchParams?.page
    ? parseInt(searchParams.page as string, 10)
    : 1;
  const limit = searchParams?.limit
    ? parseInt(searchParams.limit as string, 10)
    : 20;

  const jobsData =
    type === "featured"
      ? await fetchFeaturedJobs(page, limit, user._id)
      : await fetchJobs({ page, limit });

  if (!jobsData) {
    return <div>Error loading jobs</div>;
  }
  console.log("Fetched jobs:", jobsData);

  return (
    <JobsList jobsData={jobsData} searchParams={searchParams} type={type} />
  );
};

export default JobsPage;
