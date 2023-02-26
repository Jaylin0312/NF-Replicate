function DescContent(props) {
  const selectedJob = props.selectedJob;
  return (
    <div className="block">
      <div className="font-bold mb-nf5">Job Descriptions</div>
      <div className="mt-5 whitespace-pre-wrap text-sm">
        {selectedJob.desc}
      </div>
    </div>
  );
}
export default DescContent;
