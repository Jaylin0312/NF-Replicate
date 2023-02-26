function JobDateLocation(props) {
  return (
    <div >
      <div className="text-nf-grey1 flex">
        <span className="text-nf-green2 font-extrabold mr-3">{props.created}</span>
        <div className="flex items-center">
          <img
            className="inline-block h-4 w-2.5 mr-1"
            src="/assets/Location.svg"
          />
          {props.country}
        </div>
      </div>

    </div>
  );
}
export default JobDateLocation;
