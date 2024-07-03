import { cookies } from "next/headers";
import { AlertCircle, MountainIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "postcss";
import Link from "next/link";
import JobsCard from "@/components/jobs/JobsCard";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams.alert);
  return (
    <div>
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1 items-center justify-center">
          <div className="flex w-full items-center justify-center pt-10">
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
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
                <img
                  src="/placeholder.svg"
                  width="1200"
                  height="400"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      48-Hour Flash Sale
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Enjoy exclusive savings for 48 hours only. Limited stock.
                      Limited time. Don't miss out.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      prefetch={false}
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full">
            <div className="mx-auto grid items-center">
              <JobsCard limit={3} />
              {/* <Card>
                  <CardContent className="p-4 lg:p-6">
                    <div className="grid gap-2">
                      <h3 className="text-base font-semibold">
                        Product Title Placeholder
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Description of the product and its features. This is a
                        placeholder text that can be replaced.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="font-semibold">Now only</div>
                        <div className="font-bold">$19.99</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 lg:p-6">
                    <Button variant="outline" className="w-full">
                      Shop Now
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardContent className="p-4 lg:p-6">
                    <div className="grid gap-2">
                      <h3 className="text-base font-semibold">
                        Product Title Placeholder
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Description of the product and its features. This is a
                        placeholder text that can be replaced.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="font-semibold">Now only</div>
                        <div className="font-bold">$19.99</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 lg:p-6">
                    <Button variant="outline" className="w-full">
                      Shop Now
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardContent className="p-4 lg:p-6">
                    <div className="grid gap-2">
                      <h3 className="text-base font-semibold">
                        Product Title Placeholder
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Description of the product and its features. This is a
                        placeholder text that can be replaced.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="font-semibold">Now only</div>
                        <div className="font-bold">$19.99</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 lg:p-6">
                    <Button variant="outline" className="w-full">
                      Shop Now
                    </Button>
                  </CardFooter>
                </Card> */}
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Amazing Products. Happy Customers.
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    &quot;The products are fantastic. I love shopping
                    here!&quot; - Happy Customer
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <img
                  src="/placeholder.svg"
                  width="150"
                  height="150"
                  alt="User"
                  className="mx-auto rounded-full aspect-square object-cover object-center lg:order-last"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Collaboration</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Make collaboration seamless with built-in code review
                          tools.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Automation</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Automate your workflow with continuous integration.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Scale</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Deploy to the cloud with a single click and scale with
                          ease.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Experience the workflow the best frontend teams love.
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Let your team focus on shipping features instead of managing
                  infrastructure with automated CI/CD.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Sign up to get notified when we launch.
                  <Link
                    href="#"
                    className="underline underline-offset-2"
                    prefetch={false}
                  >
                    Terms &amp; Conditions
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Performance
                  </div>
                  <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Traffic spikes should be exciting, not scary.
                  </h2>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-300"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Security
                  </div>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                    Fully managed infrastructure designed to scale dynamically
                    with your traffic, a global edge to ensure your site is fast
                    for every customer, and the tools to monitor every aspect of
                    your app.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-300"
                    prefetch={false}
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; 2024, Portfolio project
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
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
