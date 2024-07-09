export interface User {
  _id: string;
  displayName: string;
  email: string;
  photoUrl: string;
  industry: string;
  skills: string[];
  experience: { title: string; company: string; duration: string }[];
}

export interface UserProps {
  user?: User;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
}

export interface ExperienceInputProps {
  experiences: Experience[];
  onExperiencesChange: (experiences: Experience[]) => void;
}

interface JobsData {
  _id: string;
  jobId: string;
  __v: number;
  applyLink: string;
  company: string;
  companyLogo: string;
  descriptionHTML: string;
  employees: string;
  jobInfo: string;
  jobTitle: string;
  jobType: string;
  link: string;
  location: string;
  locationType: string;
  salary: string;
}

export interface JobsDataProps {
  jobs: JobsData[];
}
