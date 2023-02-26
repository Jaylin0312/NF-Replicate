import JobTag from "../Reuseables/JobTag";
import JobSalary from "../Reuseables/JobSalary";

function DescMiddle(props) {
  const selectedJob = props.selectedJob;
  return (
    <div className="grid grid-cols-2 gap-y-5 gap-x-2.5 text-sm">
      {selectedJob.pay && (
        <div>
          <div className="font-normal">
            <div className="font-bold">Job Type</div>
            <JobSalary pay={selectedJob.pay} />
          </div>
        </div>
      )}
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
      <div>
        <div className="font-bold">Years of Experience</div>
        <div>At least 5 Years</div>
      </div>
      <div className="col-span-2 font-bold">
        <div>Tech Stacks</div>
        {selectedJob.skills.map((skill, index) => (
          <div className="inline-block mr-nf5 mb-nf5">
            <JobTag key={index} skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default DescMiddle;
