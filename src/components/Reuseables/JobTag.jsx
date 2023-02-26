function JobTag(props) {
  return (
    <div className="inline-block mr-1 font-black">
      <div className="text-nf-grey1 bg-nf-grey2 tag rounded-[5px]">
        <div className="py-nf5 px-2">{props.skill}</div>
      </div>
    </div>
  );
}
export default JobTag;
