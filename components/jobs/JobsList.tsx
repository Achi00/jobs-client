import { fetchJobs } from "@/lib/fetch";
import React from "react";
import JobsCard from "./JobsCard";
import Link from "next/link";

interface JobsListProps {
  limit?: number;
  searchParams?: { [key: string]: string | string[] | undefined };
}

const JobsList = async ({ limit, searchParams }: JobsListProps) => {
  let page = 1;
  let pageSize = limit || 20;

  if (searchParams && searchParams.page) {
    page = Number(searchParams.page) || 1;
  }

  const jobsData = await fetchJobs({ page, limit: pageSize });

  if (!jobsData) {
    return <div>Error loading jobs</div>;
  }

  const { jobs, currentPage, totalPages } = jobsData;

  return (
    <div>
      <JobsCard jobs={jobs} />
      {searchParams && (
        <div className="flex justify-center mt-4 space-x-2">
          {currentPage > 1 && (
            <Link
              href={`/jobs?page=${currentPage - 1}`}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Previous
            </Link>
          )}
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          {currentPage < totalPages && (
            <Link
              href={`/jobs?page=${currentPage + 1}`}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default JobsList;
