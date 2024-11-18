"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Experience, UserProps } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { CircleUser, FileScan } from "lucide-react";
import TagInput from "./TagInput";
import { Separator } from "../ui/separator";
import { skillsOptions } from "@/utils/index";
import ExperienceInput from "./ExperienceInput";
import { ToastNotification } from "../ToastNotification";

const ProfileForm: React.FC<UserProps> = ({ user }) => {
  if (!user) return;

  const [profile, setProfile] = useState({
    displayName: user.displayName || "",
    email: user.email || "",
    photoUrl: user.photoUrl || "",
    industry: ["Tech"], // Fixed to 'Tech' industry
    skills: user.skills,
    experience: user.experience || [],
  });

  const handleSkillsChange = (items: string[]) => {
    setProfile({
      ...profile,
      skills: items,
    });
  };

  const handleExperienceChange = (experiences: Experience[]) => {
    setProfile({
      ...profile,
      experience: experiences,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating profile");
    try {
      const response = await axios.post(
        `${process.env.API_BASE_URL}/user/profile`,
        profile,
        {
          withCredentials: true,
        }
      );
      ToastNotification({
        message: "Profile updated successfully",
        result: "success",
      });
      // router.refresh();
    } catch (error) {
      console.error("Error updating profile", error);
      ToastNotification({
        message: "Error updating profile",
        result: "error",
      });
    }
  };

  if (!user) return;

  return (
    <Card className="w-full flex flex-col p-5">
      <CardHeader>
        <CardTitle>Update Profile</CardTitle>
        <CardDescription className="text-md font-semibold text-black">
          By update your profile information with adding your skills and
          experience helps us to provide you with most suitable jobs for you
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <img
              src={user.photoUrl}
              alt="User Photo"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <div className="mb-4">
            <Label>Display Name</Label>
            <p className="text-xl font-bold">{user.displayName}</p>
          </div>
          <div className="mb-4">
            <Label>Email</Label>
            <p className="text-xl font-bold">{user.email}</p>
          </div>
          <Separator className="my-4" />

          <div className="mb-4">
            <Label>Industry</Label>
            <p className="text-xl font-bold">Tech</p>
          </div>
          <div className="mb-4">
            <TagInput
              id="skills"
              label="Skills"
              tags={profile.skills}
              onTagsChange={handleSkillsChange}
              options={skillsOptions}
            />
          </div>
          <div className="mb-4">
            <ExperienceInput
              experiences={profile.experience}
              onExperiencesChange={handleExperienceChange}
            />
          </div>
          <Button onClick={handleSubmit} type="submit">
            Update Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
