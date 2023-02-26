import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonView() {
  return (
    <div className="container mt-5 mb-5">
      <div className="lg:flex">
        <div className="flex flex-col">
          <div className="w-full lg:w-[427px]">
            <Skeleton height={150} count={10} />
          </div>
        </div>
        <div className="hidden lg:block px-[10px] py-[5px] top-0 sticky self-start grow">
          <Skeleton height={600} />
        </div>
      </div>
    </div>
  );
}
export default SkeletonView;
