import React from "react";
import JobsCard from "./JobsCard";
import Link from "next/link";
import { Button } from "../ui/button";

interface JobsListProps {
  jobsData: {
    jobs: any[];
    currentPage: number;
    totalPages: number;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
  type: string;
  limit?: number;
}

const JobsList: React.FC<JobsListProps> = ({
  jobsData,
  searchParams,
  type,
}) => {
  let page = 1;
  let limit = 20;

  if (searchParams && searchParams.page) {
    page = Number(searchParams.page) || 1;
  }

  if (searchParams && searchParams.limit) {
    limit = Number(searchParams.limit) || 20;
  }

  const { jobs, currentPage, totalPages } = jobsData;

  return (
    <div>
      <div className="flex justify-center mb-4 gap-5">
        <Button
          variant={type === "regular" ? "outline" : "default"}
          className="w-40"
        >
          <Link href={`/jobs?type=regular`}>All Jobs</Link>
        </Button>
        <Button
          variant={type === "featured" ? "outline" : "default"}
          className="w-40"
        >
          <Link href={`/jobs?type=featured`}>Featured Jobs</Link>
        </Button>
      </div>

      <JobsCard jobs={jobs} />

      {searchParams && (
        <div className="flex justify-center mt-4 space-x-2">
          {currentPage > 1 && (
            <Link
              href={`/jobs?type=${type}&page=${currentPage - 1}&limit=${limit}`}
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
              href={`/jobs?type=${type}&page=${currentPage + 1}&limit=${limit}`}
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
