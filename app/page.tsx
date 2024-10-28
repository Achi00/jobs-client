import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  AlertCircle,
  CheckCircle,
  ChevronRight,
  CircleUserRound,
  PencilRuler,
  Sliders,
  Target,
  UserCheck,
  Zap,
} from "lucide-react";
import FixedJobCard from "@/components/jobs/FixedJobCard";
import JobsList from "@/components/jobs/JobsList";
import { fetchJobs, fetchUserData } from "@/lib/fetch";
import { cookies } from "next/headers";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function JobBoardLanding({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const cookieStore = cookies();
  const cookie = cookieStore.get("connect.sid")?.value || "";
  let user = await fetchUserData(cookie);

  // Fetch the first 3 jobs
  const jobsData = await fetchJobs({ page: 1, limit: 3 });
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
              <div className="w-full py-6">
                <Link
                  href="/jobs"
                  className="text-xl border border-black px-6 py-2 rounded-md w-1/4 font-semibold hover:bg-gray-800 hover:text-white transition-all"
                >
                  Find Jobs
                </Link>
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
              <JobsList
                showPagination={false}
                jobsData={jobsData}
                searchParams={searchParams}
                page={1}
                user={user!}
                limit={5}
                type="regular"
              />
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="/jobs">View All Jobs</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
            <h2 className="text-3xl font-bold text-center">
              Customize Your Profile, Get Jobs Based On Your Experience
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Tailor your profile with your tech skills and experience to get
              personalized job recommendations and stand out to employers.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Sliders className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Personalized Matches</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get job recommendations that align perfectly with your
                    skills and experience level.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Target className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Stand Out</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Highlight your unique skill set to catch the eye of top
                    employers in your field.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Quick Apply</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Apply to matching jobs with just one click, using your
                    customized profile information.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl">Your Current Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Tech Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge variant="outline">Add more...</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Experience Level</h4>
                  <Badge variant="secondary">3-5 years</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Finish up profile
                </div>
                {user && (
                  <Link
                    href="/profile"
                    className="flex bg-gray-950 text-white rounded-md p-2 items-center "
                  >
                    Update Profile
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                )}
              </CardFooter>
            </Card>
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
