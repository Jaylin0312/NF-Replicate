function JobSalary(props) {
  return (
    <div className="mb-3 whitespace-pre-wrap">
    {props.pay && (
      <div>
        <span className="mr-3 pt-[3px]">{props.pay}</span>
        <span className="py-[3px] px-[7px] font-normal rounded-[5px] bg-nf-grey2">EST</span>
      </div>
    )}
  </div>
  );
}
export default JobSalary;
