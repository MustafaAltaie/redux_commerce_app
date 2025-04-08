import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

const ProductRating = ({ rating }) => {
  return (
    <Rating
      initialRating={rating}
      readonly
      fullSymbol={<FaStar className="rating-star" />}
      emptySymbol={<FaRegStar className="rating-star" />}
    />
  );
};

export default ProductRating;