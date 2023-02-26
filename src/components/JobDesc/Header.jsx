import JobTitle from "../Reuseables/JobTitle";
import JobDateLocation from "../Reuseables/JobDateLocation";

function DescHeader(props) {
  const selectedJob = props.selectedJob;
  return (
    <div className="bg-white flex flex-col rounded-t-lg">
      <div className="flex flex-wrap nf-sm:flex-nowrap items-start justify-start">
        <div className="mr-5">
          <img
            className="w-[65px] h-[65px] max-w-none rounded-[4px]"
            src={selectedJob.company[0].logo}
          />
        </div>
        <div className="ml-auto pl-2.5 nf-sm:order-3">
          <div className="ml-auto pl-2.5 nf-sm:order-3">
            <div className="text-sm min-w-[108px] py-2.5 bg-nf-green2 font-bold rounded-[5px] mb-[5px] text-center text-white hover:translate-y-[-3px] hover:shadow-button-hover duration-200">
              APPLY
            </div>
            <div className="text-sm min-w-[108px] py-2.5 outline outline-1 outline-nf-green2 font-bold rounded-[5px] mb-[5px] text-center text-nf-green2 hover:translate-y-[-3px] hover:shadow-button-hover duration-200">
              SHARE
            </div>
          </div>
        </div>
        <div>
          <div className="mb-nf5">
            <JobTitle
              role={selectedJob.role}
              rating={selectedJob.company[0].rating}
              name={selectedJob.company[0].name}
            />
          </div>
          <div>
            <JobDateLocation
              created={selectedJob.created}
              country={selectedJob.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DescHeader;
