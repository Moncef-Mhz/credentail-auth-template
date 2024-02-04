import { getServerSession } from "next-auth";
import LoginForm from "./_components/LoginForm";
import { authOption } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOption as any);

  if (session) redirect("/dashboard");
  return (
    <div>
      <LoginForm />
    </div>
  );
}
