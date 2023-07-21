import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={twMerge(
        `bg-sky-500/30
      rounded-lg
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
