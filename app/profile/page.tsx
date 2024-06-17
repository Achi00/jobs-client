import { GetServerSideProps } from "next";
import axios from "axios";
import { useState } from "react";
import { cookies } from "next/headers";

interface User {
  education: string;
  industry: string;
  skills: string[];
  experience: { title: string; company: string }[];
}

interface ProfileProps {
  user: User;
}

async function fetchUserData(cookie: string): Promise<User> {
  const API_BASE_URL = process.env.API_BASE_URL;
  const response = await axios.get(`${API_BASE_URL}/auth/profile`, {
    withCredentials: true,
    headers: {
      Cookie: `connect.sid=${cookie}`,
    },
  });
  if (response.status >= 200 && response.status < 300) {
    // This will activate the closest `error.js` Error Boundary
    return response.data;
  } else {
    throw new Error("Failed to fetch data");
  }
}

export default async function Profile({ user }: ProfileProps) {
  const cookieStore = cookies();
  const cookie = cookieStore.get("connect.sid")?.value || "";
  console.log(cookie);
  const data = await fetchUserData(cookie);
  console.log(data);
  return (
    <main></main>
    // <div>
    //   <h1>Update Profile</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Education:</label>
    //       <input
    //         type="text"
    //         name="education"
    //         value={profile.education}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label>Industry:</label>
    //       <input
    //         type="text"
    //         name="industry"
    //         value={profile.industry}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label>Skills:</label>
    //       <input
    //         type="text"
    //         name="skills"
    //         value={profile.skills}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label>Experience:</label>
    //       <textarea
    //         name="experience"
    //         value={profile.experience}
    //         onChange={handleChange}
    //       ></textarea>
    //     </div>
    //     <button type="submit">Update Profile</button>
    //   </form>
    // </div>
  );
}
