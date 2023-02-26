import JobTitle from "../Reuseables/JobTitle";
import JobDateLocation from "../Reuseables/JobDateLocation";
import JobTag from "../Reuseables/JobTag";
import JobSalary from "../Reuseables/JobSalary";

function Card(props) {
  const { selectedJobId } = props;
  const { job } = props;
  return (
    <div className="p-nf5 w-full">
      <div
        className={`rounded-lg shadow-card pb-10 relative hover:translate-y-[-3px] hover:shadow-card-hover duration-200 ${
          selectedJobId === job.id ? "lg:outline outline-nf-green2" : ""
        }`}
      >
        <div className="bg-white flex flex-col rounded-t-lg px-5 pt-5">
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
          <div className="whitespace-pre-wrap font-semibold">
            <div className="mb-1.5 border-b nf-sm:pl-[55px] text-sm">
              <JobDateLocation created={job.created} country={job.country} />
              <JobSalary pay={job.pay} />
            </div>
          </div>
        </div>
        <div className="bg-white text-sm absolute bottom-0 min-h-[40px] w-full px-[15px] overflow-hidden text-ellipsis whitespace-nowrap rounded-b-lg">
          {job.skills.map((skill, index) => (
            <JobTag key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Card;
