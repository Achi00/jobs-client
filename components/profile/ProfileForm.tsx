"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Experience, UserProps } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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
        "http://localhost:8080/user/profile",
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

  return (
    <Tabs defaultValue="account" className="w-full flex p-5">
      <TabsList className="flex flex-col w-44">
        <TabsTrigger value="account">
          <div className="flex items-center gap-2">
            <CircleUser />
            Account
          </div>
        </TabsTrigger>
        <Separator className="my-4 " />
        <TabsTrigger value="resume">
          <div className="flex items-center gap-2">
            <FileScan />
            Resume
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent className="w-full px-10" value="account">
        <Card>
          <CardHeader>
            <CardTitle>Update Profile</CardTitle>
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
      </TabsContent>
      {/* tab 2 */}
      {/* <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Update Profile</CardTitle>
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
                <Label htmlFor="skills">Skills</Label>
                <TagInput
                  id="skills"
                  label="Skills"
                  tags={profile.skills}
                  onTagsChange={handleSkillsChange}
                  options={skillsOptions}
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="experience">Experience</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  value={profile.experience}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit">Update Profile</Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent> */}
    </Tabs>
  );
};

export default ProfileForm;
