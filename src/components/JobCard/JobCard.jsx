import JobTitle from "../Reuseables/JobTitle";
import JobDateLocation from "../Reuseables/JobDateLocation";
import JobTag from "../Reuseables/JobTag";
import JobSalary from "../Reuseables/JobSalary";

function Card() {
  return (
    <div className="p-nf5 w-full">
      <div className="rounded-lg shadow-card pb-10 relative hover:translate-y-[-3px] hover:shadow-card-hover duration-200 lg:outline lg:outline-nf-green2">
        <div className="bg-white flex flex-col rounded-t-lg px-5 pt-5">
          <div className="flex flex-wrap nf-sm:flex-nowrap items-start justify-start">
            <div className="mr-2.5">
              <img
                className="w-[45px] h-[45px] max-w-none rounded-[4px]"
                src="/assets/Binance.png"
              />
            </div>
            <div className="ml-auto pl-2.5 nf-sm:order-3">
              <div className="bg-nf-green1 text-sm text-nf-green2 py-nf5 px-2 rounded-[5px] w-max font-semibold">
                Data Sci
              </div>
            </div>
            <JobTitle />
          </div>
          <div className="whitespace-pre-wrap font-semibold">
            <div className="mb-1.5 border-b nf-sm:pl-[55px] text-sm">
              <JobDateLocation />
              <JobSalary />
            </div>
          </div>
        </div>
        <div className="bg-white absolute bottom-0 min-h-[40px] w-full px-[15px] overflow-hidden whitespace-nowrap rounded-b-lg">
          <JobTag />
        </div>
      </div>
    </div>
  );
}
export default Card;
