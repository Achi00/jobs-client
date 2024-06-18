"use client";

import { useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Experience, ExperienceInputProps } from "@/types";
import { Separator } from "../ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  BriefcaseIcon,
  Building2,
  BuildingIcon,
  CalendarIcon,
  Captions,
  Hourglass,
  XIcon,
} from "lucide-react";

const ExperienceInput: React.FC<ExperienceInputProps> = ({
  experiences,
  onExperiencesChange,
}) => {
  const [currentExperience, setCurrentExperience] = useState<Experience>({
    title: "",
    company: "",
    duration: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCurrentExperience({
      ...currentExperience,
      [name]: value,
    });
  };

  const handleAddExperience = () => {
    if (
      currentExperience.title &&
      currentExperience.company &&
      currentExperience.duration
    ) {
      console.log("Adding experience:", currentExperience);
      onExperiencesChange([...experiences, currentExperience]);
      setCurrentExperience({ title: "", company: "", duration: "" });
    }
  };

  const handleRemoveExperience = (index: number) => {
    console.log("Removing experience at index:", index);
    onExperiencesChange(experiences.filter((_, i) => i !== index));
  };

  return (
    <div className="border rounded-lg p-4">
      <Label className="font-bold text-xl p-2">Experience</Label>
      <Separator />
      <div className="flex flex-wrap">
        {experiences.map((exp, index) => (
          <div className="p-3">
            <Card className="w-[280px] max-w-md p-6 grid gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg dark:bg-gray-800">
                    <BriefcaseIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <BuildingIcon className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  onClick={() => handleRemoveExperience(index)}
                >
                  <XIcon className="w-5 h-5" />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                <CalendarIcon className="w-4 h-4" />
                <span>{exp.duration}</span>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className="mb-4 pt-4">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          value={currentExperience.title}
          onChange={handleChange}
          placeholder="Job Title"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="company">Company</Label>
        <Input
          type="text"
          id="company"
          name="company"
          value={currentExperience.company}
          onChange={handleChange}
          placeholder="Company"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="duration">Duration</Label>
        <Input
          type="text"
          id="duration"
          name="duration"
          value={currentExperience.duration}
          onChange={handleChange}
          placeholder="Duration (e.g., 2019-2021)"
        />
      </div>
      <Button type="button" onClick={handleAddExperience}>
        Add Experience
      </Button>
    </div>
  );
};

export default ExperienceInput;
