import DescHeader from "./Header";
import DescMiddle from "./Middle";
import DescContent from "./Content";

function JobDescContainer(props) {
  return (
    <div className="pr-nf5 pb-[50px] overflow-x-hidden overflow-y-scroll">
      <div className="py-[29px] px-[20px] shadow-card rounded-lg bg-white lg:max-w-[660px]">
        <DescHeader selectedJob={props.selectedJob} />
        <div className="w-breakline h-[1px] bg-nf-grey2 my-5 mx-[-20px]"></div>
        <DescMiddle selectedJob={props.selectedJob}/>
        <div className="w-breakline h-[1px] bg-nf-grey2 my-5 mx-[-20px]"></div>
        <DescContent selectedJob={props.selectedJob}/>
      </div>
    </div>
  );
}
export default JobDescContainer;
