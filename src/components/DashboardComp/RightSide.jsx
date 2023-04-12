import Review from "./Review";
import Updates from "./Updates";

const RightSide = () => {
  return (
    <div className="flex w-[95%] flex-col justify-evenly">
      <div>
        <h3 className="mb-2 text-lg font-bold">Updates</h3>
        <Updates />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold">Reviews</h3>
        <Review />
      </div>
    </div>
  );
};

export default RightSide;
