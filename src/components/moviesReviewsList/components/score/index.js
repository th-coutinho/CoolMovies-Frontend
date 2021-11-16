import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

export default function Score({ rating }) {
  const fullStars = Array(rating);
  const voidStars = Array(5 - rating);

  return (
    <div className="flex text-yellow-500">
      { fullStars.fill(<FaStar />) }
      { voidStars.fill(<FaRegStar />) }
    </div>
  )
}

