import { useState, useEffect } from "react";
import JobCardContainer from "./JobCard/Container";
import JobDescContainer from "./JobDesc/Container";
import axios from "axios";

function JobPanel() {
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(1);
  useEffect(() => {
    axios
      .get("/data/mock-data.json")
      .then((response) => {
        setJobs(response.data.jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (jobs.length > 0) {
    const selectedJob = jobs.find((job) => job.id === selectedJobId);
    return (
      <div className="container mt-5 mb-5">
        <div className="lg:flex">
          <div className="flex flex-col">
            <JobCardContainer
              jobs={jobs}
              selectedJobId={selectedJobId}
              setSelectedJobId={setSelectedJobId}
            />
          </div>
          <div className="hidden lg:block px-[10px] py-[5px] sticky grow">
            <JobDescContainer selectedJob={selectedJob} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>No Listings Observed</div>;
  }
}

export default JobPanel;
