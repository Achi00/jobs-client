import axios from "axios";
import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL as string;

export async function POST(req: Request) {
  const cookies = req.headers.get("cookie") || "";
  const body = await req.json();

  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/update-profile`,
      body,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Cookie: cookies,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating profile" },
      { status: 500 }
    );
  }
}
