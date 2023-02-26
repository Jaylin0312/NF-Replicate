import JobTitle from "../Reuseables/JobTitle";
import JobDateLocation from "../Reuseables/JobDateLocation";
import JobSalary from "../Reuseables/JobSalary";

function TopInfo(props) {
  const job = props.job;
  return (
    <div className="bg-white flex flex-col rounded-t-lg px-5 pt-5 pb-2">
      <div className="flex flex-wrap nf-sm:flex-nowrap items-start justify-start">
        <div className="mr-2.5">
          <img
            className="w-[45px] h-[45px] max-w-none rounded-[4px]"
            src={job.company[0].logo}
          />
        </div>
        <div className="ml-auto pl-2.5 nf-sm:order-3">
          <div className="bg-nf-green1 text-sm text-nf-green2 py-nf5 px-2 rounded-[5px] w-max font-semibold">
            {job.tag}
          </div>
        </div>
        <JobTitle
          role={job.role}
          rating={job.company[0].rating}
          name={job.company[0].name}
        />
      </div>
      <div className="whitespace-pre-wrap">
        <div className="nf-sm:pl-[55px] text-sm text-nf-green2 font-bold">
          <div className="mb-1.5">
            <JobDateLocation created={job.created} country={job.country} />
          </div>
          <JobSalary pay={job.pay} />
        </div>
        <div className="h-[0.5px] bg-nf-grey3 mt-2.5"></div>
      </div>
    </div>
  );
}
export default TopInfo;
