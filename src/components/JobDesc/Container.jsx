import JobDescHeader from "./Header";

function JobDescContainer(props) {
  return (
    <div className="pr-nf5 pb-[50px] overflow-x-hidden overflow-y-scroll max-h-info-card">
      <div className="py-[29px] px-[20px] shadow-card rounded-lg bg-white">
        <JobDescHeader selectedJob={props.selectedJob} />
        <div className="w-breakline h-[0.5px] bg-nf-grey2 my-5 mx-[-20px]"></div>
        Placeholder
      </div>
    </div>
  );
}
export default JobDescContainer;
