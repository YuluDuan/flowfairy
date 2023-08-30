import Editor from "@/components/Editor";
import LinkHeader from "@/components/LinkHeader";
import UploadPdf from "@/components/UploadPdf";

const LinkPage = () => {
  return (
    <>
      <LinkHeader />
      <section className="flex w-full h-full">
        <UploadPdf />
        <Editor />
      </section>
    </>
  );
};

export default LinkPage;
