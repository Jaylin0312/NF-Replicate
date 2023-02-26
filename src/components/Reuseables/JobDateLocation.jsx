function JobDateLocation(props) {
  return (
    <div >
      <div className="flex">
        <span className="mr-2.5 whitespace-pre-wrap break-words">{props.created}</span>
        <div className="flex items-center">
          <img
            className="inline-block h-3.5 w-2.5 mr-0.5"
            src="/assets/Location.svg"
          />
          <span className="text-nf-grey1 font-normal">{props.country}</span>
        </div>
      </div>

    </div>
  );
}
export default JobDateLocation;
