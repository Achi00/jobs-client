import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  console.log(cookieStore);
  return (
    <div>
      <h1>Home</h1>
      <a href="http://localhost:8080/auth/google">Login with Google</a>
    </div>
  );
}
