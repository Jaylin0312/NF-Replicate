import JobTag from "../Reuseables/JobTag";

function DescMiddle(props) {
    const selectedJob = props.selectedJob;
    return (
      <div className="grid grid-cols-2 gap-y-5 gap-x-2.5 text-sm">
        <div>
          <div className="font-bold">Job Type</div>
          <div>Permanent</div>
        </div>
        <div>
          <div className="font-bold">Seniority</div>
          <div className="text-nf-grey1 font-bold bg-nf-grey2 rounded-[5px] inline-block">
            <div className="py-nf5 px-2">Senior</div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="font-bold">Years of Experience</div>
          <div>At least 5 Years</div>
        </div>
        <div className="col-span-2 font-bold">
          <div>Tech Stacks</div>
          {selectedJob.skills.map((skill, index) => (
            <JobTag key={index} skill={skill} />
          ))}
        </div>
      </div>
    );
}
export default DescMiddle;
