import SideNav from "@/components/SideNav";
import "./globals.css";
import Header from "@/components/Header";
import { Quicksand } from "next/font/google";
import { getFlowsFromDatabase } from "@/lib/api-controllers";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export const metadata = {
  title: "FlowFairy",
  description: "Generate Flow Chart by FlowFairy",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const flows = await getFlowsFromDatabase();
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <main className="flex flex-col w-full h-screen">
          <Header />
          <SideNav flows={flows}>{children}</SideNav>
        </main>
      </body>
    </html>
  );
}
