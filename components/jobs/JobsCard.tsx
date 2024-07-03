import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { JobsDataProps } from "@/types";
import { ArrowUpRight } from "lucide-react";

const JobsCard = ({ jobs }: JobsDataProps) => {
  return (
    <div className="flex flex-col w-full">
      <main className="flex bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <form className="flex-1">
            <Input
              placeholder="Search jobs..."
              className="bg-white dark:bg-gray-950"
            />
            <Button type="submit" className="sr-only">
              Submit
            </Button>
          </form>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          {jobs?.map((job, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src={job.companyLogo}
                    alt={`${job.company} logo`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between h-20">
                  <CardTitle className="text-lg font-semibold">
                    {job.jobTitle}
                  </CardTitle>
                  <CardDescription className="text-sm truncate">
                    {job.company}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="grid gap-2 flex-grow">
                <div className="text-sm font-semibold">{`${job.jobType}, ${job.locationType}`}</div>
                <div className="flex items-center gap-2 text-sm">
                  <LocateIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    {job.location}
                  </span>
                </div>
                {job.employees ? (
                  <Badge
                    variant="secondary"
                    className="w-fit hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                  >
                    {job.employees}
                  </Badge>
                ) : (
                  <Badge
                    variant="secondary"
                    className="w-fit hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                  >
                    Not Specified
                  </Badge>
                )}
                {job.salary && (
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {job.salary}
                  </div>
                )}
              </CardContent>
              <CardFooter className="mt-auto flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full flex items-center gap-2"
                >
                  {/* <ArrowUpRight size={16} /> */}
                  <Linkedin className="w-7 h-7" />
                  <Link href={job.applyLink}>Apply Now</Link>
                </Button>
                <Button size="sm" className="w-full border-2">
                  <Link href={job.applyLink}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default JobsCard;

function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function Linkedin(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#0078d4"
        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
      ></path>
      <path
        d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
        opacity=".05"
      ></path>
      <path
        d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
        opacity=".07"
      ></path>
      <path
        fill="#fff"
        d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
      ></path>
    </svg>
  );
}
