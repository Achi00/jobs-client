"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ProfileFormProps } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { CircleUser } from "lucide-react";
import TagInput from "./TagInput";
import { Separator } from "./ui/separator";
import { skillsOptions } from "@/utils/index";

const ProfileForm: React.FC<ProfileFormProps> = ({ user }) => {
  const router = useRouter();

  const [profile, setProfile] = useState({
    displayName: user.displayName || "",
    email: user.email || "",
    photoUrl: user.photoUrl || "",
    industry: ["Tech"], // Fixed to 'Tech' industry
    skills: user.skills,
    experience:
      user.experience
        .map((exp) => `${exp.title} at ${exp.company}`)
        .join(", ") || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSkillsChange = (items: string[]) => {
    setProfile({
      ...profile,
      skills: items,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth", profile, {
        withCredentials: true,
      });
      alert("Profile updated successfully");
      router.refresh();
    } catch (error) {
      console.error("Error updating profile", error);
      alert("Error updating profile");
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
        <TabsTrigger value="password">
          <div className="flex items-center gap-2">
            <CircleUser />
            Password
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
      </TabsContent>
      <TabsContent value="password">
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
      </TabsContent>
    </Tabs>
  );
};

export default ProfileForm;
