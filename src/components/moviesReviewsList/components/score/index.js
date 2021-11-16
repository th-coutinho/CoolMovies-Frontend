import { FaStar } from 'react-icons/fa';

export default function Score({ rating }) {
  return (
    <div>
      { Array(rating).fill(<FaStar/>) }
    </div>
  )
}
