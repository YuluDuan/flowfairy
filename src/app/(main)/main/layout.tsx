import Header from "@/components/Header";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export default async function MainLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <section className={`flex flex-col w-full h-screen ${quicksand.className}`}>
      <Header />
      <div className="flex h-full w-full">
        {props.children}
        <div className="h-full w-full flex-1 overflow-y-auto relative">
          {props.modal}
        </div>
      </div>
    </section>
  );
}
