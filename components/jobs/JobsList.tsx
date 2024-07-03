import { fetchAllJobs } from "@/lib/fetch";
import React from "react";
import JobsCard from "./JobsCard";

const JobsList = async () => {
  const jobs = await fetchAllJobs();
  console.log(jobs);
  return (
    <div>
      <JobsCard jobs={jobs} />
    </div>
  );
};

export default JobsList;
