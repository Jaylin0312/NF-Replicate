function JobDateLocation(props) {
  return (
    <div >
      <div className="text-nf-grey1 flex">
        <span className="text-nf-green2 font-black mr-2.5">{props.created}</span>
        <div className="flex items-center">
          <img
            className="inline-block h-3.5 w-2.5 mr-0.5"
            src="/assets/Location.svg"
          />
          <span className="font-normal">{props.country}</span>
        </div>
      </div>

    </div>
  );
}
export default JobDateLocation;
