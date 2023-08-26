import LinkHeader from "@/components/LinkHeader";
import UploadPdf from "@/components/UploadPdf";

const LinkPage = () => {
  return (
    <>
      <LinkHeader />
      <section className="w-full h-full">
        <UploadPdf />
      </section>
    </>
  );
};

export default LinkPage;
