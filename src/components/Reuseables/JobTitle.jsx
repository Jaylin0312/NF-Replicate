function JobTitle(props) {
  return (
    <div className="mt-nf5 basis-full shrink">
      <p className="text-sm mb-0.5 whitespace-pre-wrap">
        <span>{props.name}</span>
        <span>&nbsp; {props.rating} ★</span>
      </p>
      <h2 className="Desc text-base font-bold">
        {props.role}
      </h2>
    </div>
  );
}
export default JobTitle;
