function Card() {
  return (
    <div>
      <div className="p-nf5 w-full">
        <div className="rounded-lg shadow-card pb-10 relative hover:translate-y-[-3px] hover:shadow-card-hover duration-200 lg:outline lg:outline-nf-green2">
          <div className="bg-white flex flex-col rounded-t-lg px-5 pt-5">
            Placeholder
          </div>
          <div className="bg-white absolute bottom-0 min-h-[40px] w-full px-[15px] overflow-hidden whitespace-nowrap rounded-b-lg">
            Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
