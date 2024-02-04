import React from "react";
import RegisterForm from "../_components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "../api/auth/[...nextauth]/route";

async function Register() {
  const session = await getServerSession(authOption as any);

  if (session) redirect("/dashboard");
  return <RegisterForm />;
}

export default Register;
