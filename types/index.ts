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
  applyLink: string;
  company: string;
  companyLogo: string;
  descriptionHTML: string;
  experiences: string[];
  jobTitle: string;
  knowledge: string[];
  link: string;
  location: string;
  otherData: string;
  jobDetailPreferences: string;
}

export interface JobsDataProps {
  type: string;
  jobs: JobsData[];

  user: User;
}
