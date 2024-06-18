export interface User {
  displayName: string;
  email: string;
  photoUrl: string;
  industry: string;
  skills: string[];
  experience: { title: string; company: string; duration: string }[];
}

export interface ProfileFormProps {
  user: User;
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
