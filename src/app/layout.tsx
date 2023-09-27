import "./globals.css";
import { Quicksand } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export const metadata = {
  title: "FlowFairy",
  description: "Generate Flow Chart by FlowFairy",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`flex flex-col w-full h-screen ${quicksand.className}`}
        >
          {props.children}
          <Toaster position="top-center" />
        </body>
      </html>
    </ClerkProvider>
  );
}
