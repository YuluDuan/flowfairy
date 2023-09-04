import "./globals.css";
import Header from "@/components/Header";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export const metadata = {
  title: "FlowFairy",
  description: "Generate Flow Chart by FlowFairy",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col w-full h-screen ${quicksand.className}`}>
        <Header />
        <main className="flex h-full w-full">
          {props.children}
          <div className="h-full w-full flex-1 overflow-y-auto relative">
            {props.modal}
          </div>
        </main>
      </body>
    </html>
  );
}
