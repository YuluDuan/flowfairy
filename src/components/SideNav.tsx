import { FlowType } from "@/types";
import Box from "./Box";
import CreateButton from "./CreateButton";
import Library from "./Library";

interface Props {
  children: React.ReactNode;
  flows: FlowType[];
}

const SideNav = ({ children, flows }: Props) => {
  return (
    <div className="flex h-full" role="navigation">
      <div className="flex flex-col shadow-sm gap-y-2 border-r border-slate-200 h-full w-[300px] p-2">
        <Box>
          <CreateButton />
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library flows={flows} />
        </Box>
      </div>

      <main className="h-full flex-1 overflow-y-auto relative">{children}</main>
    </div>
  );
};

export default SideNav;
