import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Askquestion = () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");
  return <div>Ask Question</div>;
};

export default Askquestion;
