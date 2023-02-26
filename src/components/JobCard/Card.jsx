import JobTag from "../Reuseables/JobTag";
import TopInfo from "./TopInfo";

function Card(props) {
  const { selectedJobId } = props;
  const { job } = props;
  return (
    <div className="p-nf5 w-full">
      <div
        className={`bg-white jobcard rounded-lg shadow-card pb-10 relative hover:translate-y-[-3px] hover:shadow-card-hover duration-200 ${
          selectedJobId === job.id ? "lg:ring-4 ring-nf-green2" : ""
        }`}
      >
        <TopInfo job={job} />
        <div className="bg-white text-sm absolute bottom-0 min-h-[40px] w-full px-[15px] rounded-b-lg overflow-hidden text-ellipsis whitespace-nowrap">
          {job.skills && (
            <span className="align-top w-full inline-block overflow-hidden">
              {job.skills.map((skill, index) => (
                <JobTag key={index} skill={skill} />
              ))}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
export default Card;
