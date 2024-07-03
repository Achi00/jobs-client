"use client";

import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface TagInputProps {
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  label: string;
  id: string;
  options: string[];
}

const TagInput: React.FC<TagInputProps> = ({
  tags,
  onTagsChange,
  label,
  id,
  options,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (
        !tags.includes(inputValue.trim()) &&
        options.includes(inputValue.trim())
      ) {
        onTagsChange([...tags, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const handleRemoveTag = (tag: string) => {
    onTagsChange(tags.filter((t) => t !== tag));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleOptionClick = (option: string) => {
    if (!tags.includes(option)) {
      onTagsChange([...tags, option]);
      setInputValue("");
    }
  };

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center border rounded-lg px-2">
            <span>{tag}</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => handleRemoveTag(tag)}
              className=" bg-transparent"
            >
              x
            </Button>
          </div>
        ))}
      </div>
      <Input
        autoComplete="off"
        id={id}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Start typing to search..."
        className="mt-2"
      />
      {inputValue && (
        <div className="mt-2 max-h-40 overflow-y-auto border border-gray-300 rounded">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagInput;
