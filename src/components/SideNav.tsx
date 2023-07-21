"use client";

import Box from "./Box";
import CreateButton from "./CreateButton";

interface Props {
  children: React.ReactNode;
}

const SideNav = ({ children }: Props) => {
  return (
    <div className="flex h-full">
      <div className="flex flex-col gap-y-2 bg-gray-100 h-full w-[300px] p-2">
        <Box>
          <CreateButton />
        </Box>
        <Box className="h-screen">Library</Box>
      </div>
    </div>
  );
};

export default SideNav;
