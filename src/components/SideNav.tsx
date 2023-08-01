import Box from "./Box";
import CreateButton from "./CreateButton";

interface Props {
  children: React.ReactNode;
}

const SideNav = ({ children }: Props) => {
  return (
    <div className="flex h-screen" role="navigation">
      <div className="flex flex-col shadow-sm gap-y-2 border-r border-slate-200 h-full w-[300px] p-2">
        <Box>
          <CreateButton />
        </Box>
        <Box className="overflow-y-auto h-full">Library</Box>
      </div>

      <main className="h-full flex-1 overflow-y-auto py-2 relative">
        {children}
      </main>
    </div>
  );
};

export default SideNav;
