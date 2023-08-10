const FlowPage = ({ params }: { params: { flowId: string } }) => {
  return <p>hello {params.flowId}</p>;
};

export default FlowPage;
