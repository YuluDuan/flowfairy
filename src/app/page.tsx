import Introduction from "@/components/LandingPage/Introduction";
import LandingPageHeader from "@/components/LandingPage/LandingPageHeader";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <LandingPageHeader />
      <Introduction />
    </div>
  );
};

export default LandingPage;
