import "../../../globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <section className={`flex flex-col w-full h-screen ${quicksand.className}`}>
      {props.children}
    </section>
  );
}
