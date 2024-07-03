import axios from "axios";
import { User } from "@/types";

const API_BASE_URL = process.env.API_BASE_URL as string;

export async function fetchUserData(cookie: string): Promise<User | null> {
  if (!cookie) {
    console.log("No valid cookie found.");
    return null;
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/auth/profile`, {
      headers: {
        Cookie: `connect.sid=${cookie}`,
      },
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      console.error("Failed to fetch user data, status:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

export async function fetchAllJobs() {
  try {
    const res = await axios.get(`${API_BASE_URL}/jobs/getjobs`);
    if (!res.data) {
      throw new Error("No jobs found");
    }

    return res.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return null;
  }
}
export async function fetchJobsWithID(id: string) {
  try {
    const res = await axios.get(`${API_BASE_URL}/jobs/getjobs/${id}`);
    if (!res.data) {
      throw new Error("No jobs found");
    }

    return res.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return null;
  }
}
