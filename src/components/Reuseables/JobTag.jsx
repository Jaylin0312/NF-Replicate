function JobTag(props) {
  return (
    <div className="inline-block mr-1">
      <div className="text-nf-grey1 bg-nf-grey2 rounded-[5px]">
        <div className="py-nf5 px-2 font-mono font-black">{props.skill}</div>
      </div>
    </div>
  );
}
export default JobTag;
