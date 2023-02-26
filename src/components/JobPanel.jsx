import { useState, useEffect } from "react";
import axios from "axios";
import JobCardContainer from "./JobCard/Container";
import JobDescContainer from "./JobDesc/Container";
import SkeletonView from "./SkeletonView";

function JobPanel() {
  const [jobs, setJobs] = useState([]);
  // Each job card has a unique id. By default the first job card will get selected
  const [selectedJobId, setSelectedJobId] = useState(null);
  // show skeleton view for 1 second while fetching data
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);
  // Simulate real-life api call using axios
  const fetchData = () => {
    axios
      .get("/data/mock-data.json")
      .then((response) => {
        setJobs(response.data.jobs);
        // Set first card to be the selected card
        setSelectedJobId(response.data.jobs[0].id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          <div className="hidden lg:block px-[10px] py-[5px] top-0 sticky self-start grow">
            <JobDescContainer selectedJob={selectedJob} />
          </div>
        </div>
      </div>
    );
  } else {
    // Return skeleton view when no job data is obtained
    return <SkeletonView />;
  }
}

export default JobPanel;
