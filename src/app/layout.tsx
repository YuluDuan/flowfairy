import "./globals.css";

import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import { quicksand } from "./font";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "FlowFairy",
  description: "Generate Flow Chart by FlowFairy",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${quicksand.className} block w-screen h-screen`}>
          {props.children}
          <Toaster position="top-center" />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
