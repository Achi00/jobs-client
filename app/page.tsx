import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  AlertCircle,
  CircleUserRound,
  PencilRuler,
  UserCheck,
} from "lucide-react";
import FixedJobCard from "@/components/jobs/FixedJobCard";
import JobsList from "@/components/jobs/JobsList";
import { fetchUserData } from "@/lib/fetch";
import { cookies } from "next/headers";

export default async function JobBoardLanding({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const cookieStore = cookies();
  const cookie = cookieStore.get("connect.sid")?.value || "";
  const user = await fetchUserData(cookie);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-22 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="flex w-full justify-center pb-20">
            {searchParams.alert === "autherror" && (
              <Alert className="w-1/4" variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  You need to be logged in to access this page
                </AlertDescription>
              </Alert>
            )}
          </div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl border-b border-gray-300 pb-2 font-bold tracking-tighter sm:text-5xl">
                    Leading Tech Jobs
                  </h1>
                  <br />
                  <div className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 flex flex-col gap-1">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                      Find Your Dream Tech Jobs
                    </h3>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                      Discover opportunities at top tech companies worldwide
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/jobs"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Find Jobs
                  </Link>
                </div>
              </div>
              <div className="gradient w-full max-w-3xl mx-auto rounded-lg flex items-center justify-center p-4">
                <FixedJobCard />
              </div>
            </div>
          </div>
          <div className="container px-4 pt-20 md:px-6">
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
            <div className="w-full">
              <JobsList limit={3} />
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="/jobs">View All Jobs</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center z-10 relative">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
                  Customize Your Profile
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tailor your profile to match your skills and preferences, and
                  get personalized job recommendations.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 ">
              <div className="relative w-full">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gray-200 rounded-full"></div>
                <div className="absolute top-1/4 right-0 w-48 h-48 bg-gray-100 rounded-full"></div>
                <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-gray-200 rounded-full "></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gray-200 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gray-100 rounded-full "></div>
                <div className="flex relative z-10 justify-between items-center">
                  <PencilRuler size={55} />
                  <div className="flex-grow border-b-2 border-dotted border-gray-500 mx-2" />
                  <CircleUserRound size={55} />
                  <div className="flex-grow border-b-2 border-dotted border-gray-500 mx-2" />
                  <UserCheck size={55} />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 z-10">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <div className="text-xl text-muted-foreground">
                        Personalize your{" "}
                        <Link
                          href="/profile"
                          className="border-b border-gray-500 hover:text-blue-600"
                        >
                          profile
                        </Link>
                        {!user && (
                          <p className="text-xl text-muted-foreground">
                            This requires authentication
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <p className="text-xl text-muted-foreground">
                        Set your tech skills & experience
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <p className="text-xl text-muted-foreground">
                        Get more suitable job recommendations
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2024 Tech Job. All rights reserved.
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
