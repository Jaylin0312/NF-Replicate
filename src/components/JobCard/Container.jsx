import JobCard from "./Card";
import React from "react";

function JobCardContainer(props) {
  function handleSelect(id) {
    props.setSelectedJobId(id);
  }
  return props.jobs.map((job) => (
    <div
      className="w-full lg:w-[427px]"
      key={job.id}
      onClick={() => handleSelect(job.id)}
    >
      <JobCard selectedJobId={props.selectedJobId} job={job} />
    </div>
  ));
}
export default JobCardContainer;
