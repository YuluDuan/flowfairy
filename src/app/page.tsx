import Features from "@/components/LandingPage/Features";
import Introduction from "@/components/LandingPage/Introduction";
import LandingPageHeader from "@/components/LandingPage/LandingPageHeader";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const LandingPage = () => {
  const { userId } = auth();
  if (userId) {
    redirect("/main");
  }
  return (
    <div className="flex flex-col">
      <LandingPageHeader />
      <Introduction />
      <Features />
    </div>
  );
};

export default LandingPage;
