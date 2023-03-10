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
      {selectedJob.type && (
        <div>
          <div className="font-bold">Job Type</div>
          <div>{selectedJob.type}</div>
        </div>
      )}
      {selectedJob.seniority && (
        <div>
          <div className="font-bold">Seniority</div>
          <div className="text-nf-grey1 font-bold bg-nf-grey2 rounded-[5px] inline-block">
            <div className="py-nf5 px-2">{selectedJob.seniority}</div>
          </div>
        </div>
      )}
      {selectedJob.years_of_experience && (
        <div>
          <div className="font-bold">Years of Experience</div>
          <div>{selectedJob.years_of_experience}</div>
        </div>
      )}
      {selectedJob.skills && (
        <div className="col-span-2 font-bold">
          <div>Tech Stacks</div>
          {selectedJob.skills.map((skill, index) => (
            <div key={index} className="inline-block mr-nf5 mb-nf5">
              <JobTag skill={skill} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default DescMiddle;
