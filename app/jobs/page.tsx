import JobsList from "@/components/jobs/JobsList";
import React from "react";

const JobsPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div>
      <JobsList searchParams={searchParams} />
    </div>
  );
};

export default JobsPage;
