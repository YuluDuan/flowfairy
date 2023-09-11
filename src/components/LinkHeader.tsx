// test to see if still can push things in the merged branch

import { GiFairyWand } from "react-icons/gi";
import { IoSave } from "react-icons/io5";
import { HiBackspace } from "react-icons/hi";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface LinkHeaderProps {
  handleSavePDFandEditor: (func?: () => void) => void;
}

const LinkHeader = ({ handleSavePDFandEditor }: LinkHeaderProps) => {
  const router = useRouter();

  const handleBackspace = () => {
    router.back();
  };
  return (
    <>
      <nav className="flex justify-between items-center width-full h-14 px-6 py-3 border-b border-solid border-inherit">
        <div className="flex justify-center items-center gap-2">
          <GiFairyWand className="w-7 h-7 text-[#FFC000]" />
          <p className="font-semibold text-xl orange_gradient">FLOWFAIRY</p>
        </div>
        <div className="flex gap-3 items-center">
          <Dialog>
            <DialogTrigger asChild>
              <button>
                <HiBackspace className="w-8 h-8 cursor-pointer" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Back to the previous page</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. You may permanently lose your
                  note, Please save your note first.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button type="submit" onClick={handleBackspace}>
                  Continue
                </Button>
                <Button
                  type="submit"
                  onClick={async () => {
                    handleSavePDFandEditor(() => router.back());
                  }}
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <button onClick={() => handleSavePDFandEditor()}>
            <IoSave className="w-6 h-6 cursor-pointer" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default LinkHeader;
