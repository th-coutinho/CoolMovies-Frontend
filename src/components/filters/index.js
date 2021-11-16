import MovieReviewsList from './components/moviesReviewsList';
import { FaVideo } from 'react-icons/fa';

export default function Filters() {
  return (
    <div className="flex items-center mt-2">
      <span className="px-2 py-1 bg-green-100 border border-green-600 text-green-600 rounded-full text-sm cursor-pointer">
        Show mine first
      </span>
    </div>)
}
