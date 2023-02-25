function JobDateLocation() {
  return (
    <div className="mb-1.5 border-b nf-sm:pl-[55px] text-sm">
      <div className="text-nf-grey1 flex">
        <span className="text-nf-green2 font-extrabold mr-3">Date here</span>
        <div className="flex items-center">
          <img
            className="inline-block h-4 w-2.5 mr-1"
            src="/assets/Location.svg"
          />
          Singapore
        </div>
      </div>
      <div className="mb-3 mt-2 whitespace-pre-wrap font-semibold">
        <span className="mr-2">Salary $$$</span>
        <span className="py-[3px] px-[7px] font-normal rounded-[5px] bg-nf-grey2">
          EST
        </span>
      </div>
    </div>
  );
}
export default JobDateLocation;
