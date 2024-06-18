export interface User {
  displayName: string;
  email: string;
  photoUrl: string;
  industry: string;
  skills: string[];
  experience: { title: string; company: string }[];
}

export interface ProfileFormProps {
  user: User;
}
