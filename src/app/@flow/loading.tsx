export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
