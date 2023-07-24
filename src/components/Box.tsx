import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={twMerge(
        `bg-background
        border
        border-slate-200
        rounded-sm
        p-2
        h-fit
        w-full`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
