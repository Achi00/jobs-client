import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import JobsCard from "./JobsCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { User } from "@/types";
import PaginationControls from "./Pagination";

interface JobsListProps {
  jobsData: {
    jobs: any[];
    currentPage: number;
    totalPages: number;
    page?: number;
    limit?: number;
  };
  user: User;
  searchParams?: { [key: string]: string | string[] | undefined };
  type: string;
  page: number;
  limit: number;
  showPagination: boolean;
}

const JobsList = ({
  jobsData,
  searchParams,
  type,
  page,
  user,
  showPagination,
}: JobsListProps) => {
  // let page = 1;
  let limit = 21;

  if (searchParams && searchParams.page) {
    page = Number(searchParams.page) || 1;
  }

  if (searchParams && searchParams.limit) {
    limit = Number(searchParams.limit) || 21;
  }
  const { jobs, currentPage, totalPages } = jobsData || {};

  return (
    <div className="pb-8">
      <div className="flex justify-center mb-4 gap-5 pt-3">
        <Button
          asChild
          disabled={type === "regular"}
          variant={type === "regular" ? "outline" : "default"}
          className="w-40"
        >
          <Link href={`/jobs?type=regular&page=1&limit=${limit}`}>
            All Jobs
          </Link>
        </Button>
        <Button
          asChild
          disabled={type === "featured"}
          variant={type === "featured" ? "outline" : "default"}
          className="w-40"
        >
          <Link href={`/jobs?type=featured&page=1&limit=${limit}`}>
            Featured Jobs
          </Link>
        </Button>
      </div>

      <JobsCard user={user} jobs={jobs} type={type} />
      {showPagination && jobs.length > 0 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          type={type}
          limit={limit}
          siblingCount={0}
          className={""}
        />
        // <div className="flex justify-center mt-4 space-x-2">
        //   {currentPage > 1 && (
        //     <Button asChild>
        //       <Link
        //         href={`/jobs?type=${type}&page=${
        //           currentPage - 1
        //         }&limit=${limit}`}
        //       >
        //         Previous
        //       </Link>
        //     </Button>
        //   )}
        //   <span className="px-4 py-2">
        //     Page {currentPage} of {totalPages}
        //   </span>
        //   {currentPage < totalPages && (
        //     <Button asChild>
        //       <Link
        //         href={`/jobs?type=${type}&page=${
        //           currentPage + 1
        //         }&limit=${limit}`}
        //       >
        //         Next
        //       </Link>
        //     </Button>
        //   )}
        // </div>
      )}
    </div>
  );
};

export default JobsList;
