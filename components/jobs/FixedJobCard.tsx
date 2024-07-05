import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface JobCardProps {
  company: string;
  position: string;
  department: string;
  type: "FULL TIME" | "PART TIME";
  date: string;
  logo: string | React.FC<React.SVGProps<SVGSVGElement>>;
}

const JobCard: React.FC<JobCardProps> = ({
  company,
  position,
  department,
  type,
  date,
  logo,
}) => {
  return (
    <Card className="w-full mb-4">
      <CardContent className="flex items-center flex-col sm:flex-row p-4">
        <Avatar className="h-12 w-12 mr-4">
          {typeof logo === "string" ? (
            <img
              src={logo}
              alt={company}
              className="h-full w-full object-contain"
            />
          ) : (
            React.createElement(logo, { className: "h-full w-full" })
          )}
        </Avatar>
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-sm text-blue-500">{company}</h3>
            <div className="flex items-center text-xs text-gray-400">
              <Clock size={12} className="mr-1" />
              <span>{date}</span>
            </div>
          </div>
          <h2 className="font-bold text-lg mb-1">{position}</h2>
          <div className="flex items-center">
            <Badge variant="secondary" className="mr-2 text-xs font-normal">
              {department}
            </Badge>
            <Badge variant="outline" className="text-xs font-normal">
              {type}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FixedJobCard = () => {
  const jobs = [
    {
      company: "Webflow",
      position: "Digital Marketing Specialist",
      department: "Remote",
      type: "FULL TIME" as "FULL TIME", // Add this line
      date: "May 24, 2020",
      logo: WebflowIcon,
    },
    {
      company: "Google",
      position: "Senior Backend Engineer",
      department: "Remote",
      type: "FULL TIME" as "FULL TIME", // Add this line
      date: "May 24, 2020",
      logo: GoogleIcon,
    },
    {
      company: "Facebook",
      position: "ReactJS Developer",
      department: "Hybrid",
      type: "PART TIME" as "PART TIME", // Add this line
      date: "May 24, 2020",
      logo: FacebookIcon,
    },
  ];
  return (
    <div className="p-4 w-3/4 flex flex-col items-center">
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default FixedJobCard;

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
        fill="#fbc02d"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path
        fill="#e53935"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      ></path>
      <path
        fill="#4caf50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      ></path>
      <path
        fill="#1565c0"
        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
    </svg>
  );
}
function WebflowIcon(props: any) {
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
      <circle cx="24" cy="24" r="20" fill="#1976d2"></circle>
      <path
        fill="#fff"
        d="M30.1,21.43c0,0-1.73,5.42-1.86,5.88c-0.05-0.46-1.31-10.2-1.31-10.2c-2.95,0-4.52,2.09-5.35,4.32 c0,0-2.1,5.44-2.27,5.9c-0.01-0.43-0.32-5.84-0.32-5.84c-0.18-2.72-2.66-4.37-4.67-4.37l2.42,14.76c3.09-0.01,4.75-2.1,5.62-4.32 c0,0,1.85-4.8,1.93-5.02c0.02,0.21,1.33,9.34,1.33,9.34c3.09,0,4.76-1.96,5.66-4.1l4.32-10.67C32.54,17.11,30.93,19.2,30.1,21.43z"
      ></path>
    </svg>
  );
}
function FacebookIcon(props: any) {
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
      <linearGradient
        id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
        x1="9.993"
        x2="40.615"
        y1="9.993"
        y2="40.615"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#2aa4f4"></stop>
        <stop offset="1" stop-color="#007ad9"></stop>
      </linearGradient>
      <path
        fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
        d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
      ></path>
      <path
        fill="#fff"
        d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
      ></path>
    </svg>
  );
}
