import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function JobBoardLanding() {
  const featuredJobs = [
    {
      id: 1,
      title: "Full-Stack Engineer III",
      company: "Hinge",
      location: "New York, NY",
      salary: "$143K - $172K",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Airbnb",
      location: "San Francisco, CA",
      salary: "$120K - $160K",
      type: "Contract",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Stripe",
      location: "Remote",
      salary: "$130K - $180K",
      type: "Full-time",
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Find Your Dream Tech Job
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover opportunities at top tech companies worldwide
              </p>
              <div className="w-full space-y-2">
                <Button
                  variant="outline"
                  className="text-xl w-1/4 font-semibold"
                >
                  <Link href="/jobs">Find Jobs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
              Featured Jobs
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredJobs.map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {job.company}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <MapPinIcon className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <p className="font-semibold mb-4">{job.salary}</p>
                    <Badge>{job.type}</Badge>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full">View Job</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="/jobs">View All Jobs</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  For Job Seekers
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    Access thousands of tech job listings
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    Create a professional profile
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    Get matched with relevant opportunities
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/signup">Create Your Profile</Link>
                </Button>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  For Employers
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    Post job listings to reach top talent
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    Browse candidate profiles
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    Streamline your hiring process
                  </li>
                </ul>
                <Button variant="outline" asChild>
                  <Link href="/employers">Start Hiring</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2024 TechJobBoard. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BriefcaseIcon(props: any) {
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function MapPinIcon(props: any) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CheckIcon(props: any) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
