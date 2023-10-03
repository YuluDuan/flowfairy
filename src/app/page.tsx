import Contact from "@/components/LandingPage/Contact";
import Developer from "@/components/LandingPage/Developer";
import Features from "@/components/LandingPage/Features";
import Footer from "@/components/LandingPage/Footer";
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
    <div className="flex flex-col w-full">
      <LandingPageHeader />
      <Introduction />
      <Features />
      <Developer />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
