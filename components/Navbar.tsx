"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { UserProps } from "@/types";
import { CircleUserRound, GanttChart, LogOut, User } from "lucide-react";

const Navbar = ({ user }: UserProps) => {
  const [position, setPosition] = useState("bottom");
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="/" className="flex items-center" prefetch={false}>
            <GanttChart className="h-6 w-6" />
            <span className="sr-only">Jobs</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              href="/"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Profile
            </Link>
            <Link
              href="/jobs"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Jobs
            </Link>
          </nav>
          {user ? (
            <div className="flex items-center p-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex gap-2" variant="outline">
                    <Avatar className="w-8 h-8 border rounded-full">
                      <AvatarImage
                        className="rounded-full"
                        src={user.photoUrl}
                      />
                    </Avatar>
                    <p className="font-semibold">{user.displayName}</p>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      {/* <Button variant="ghost"> */}
                      <LogOut className="mr-2 h-4 w-4" />
                      Log Out
                      {/* </Button> */}
                    </DropdownMenuItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <a href="http://localhost:8080/auth/google">
                <Button
                  className="flex items-center gap-2"
                  variant="outline"
                  size="sm"
                >
                  <GoogleIcon className="h-6 w-6" /> Sign in with google
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

function GoogleIcon(props: any) {
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
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      ></path>
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      ></path>
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
    </svg>
  );
}

export default Navbar;
