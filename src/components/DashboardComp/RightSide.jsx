import Review from "./Review";
import Updates from "./Updates";

const RightSide = () => {
  return (
    <div className="flex w-full flex-col px-1 xs:px-3 md:flex-row lg:w-[95%] lg:flex-col lg:justify-evenly lg:pt-8 xl:pt-0">
      <div className="w-full">
        <h3 className="mb-4 pt-4 text-lg font-bold lg:mb-2 lg:pt-0">Updates</h3>
        <Updates />
      </div>
      <div className="w-full">
        <h3 className="mb-4 pt-4 text-lg font-bold lg:mb-2 lg:pt-0">Reviews</h3>
        <Review />
      </div>
    </div>
  );
};

export default RightSide;
